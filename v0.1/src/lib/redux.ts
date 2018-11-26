import * as _ from 'lodash';
import { bindActionCreators } from 'redux';

const BUILD_ACTION_DATA = '__BUILD_ACTION_DATA__';

export const wrapAction = (value: string) => (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    function getFunctionParamNames(func) {
        return func.toString().match(/\(.*?\)/)[0].replace(/[()]/gi, '').replace(/\s/gi, '').split(',');
    }

    let origin = target[propertyKey];
    target[propertyKey] = (...args: any[]): any => {
        if (args[0] === BUILD_ACTION_DATA) {
            return {
                topic: value,
                action: origin(),
            };
        }

        let payload = {};

        if (args.length) {
            getFunctionParamNames(origin).forEach((name, index) => {
                payload[name] = args[index];
            });
        }

        return {
            type: value,
            payload: payload,
            // error: false
        };
    };

    return target;
};

export const formatTopics = (prefix: string, topics: any) => {
    let result = [];

    _.forEach(_.keys(topics), (key: string) => {
        result[key] = `${prefix}/${topics[key]}`;
    });

    return result;
};

export const parseTopics = (actionHandlers, actionNames) => {
    let topics = {};

    _.forEach(_.keys(actionNames), (actionName: string) => {
        let handler = actionHandlers[_.camelCase(actionName)];
        if (_.isFunction(handler)) {
            const { topic, action } = handler(BUILD_ACTION_DATA);

            topics[topic] = (state, data) => {
                return action(_.clone(state), data.payload, {type: data.type, error: data.error});
            };
        }
    });

    return topics;
};

export const mapDispatch = (dispatch, actions) => {
    let _actions = _.reduce([].concat(actions), (allActions, action): any => {
        const topics = _.reduce(_.keys(action['topics']), (allTopics, topic): any => {
            return allTopics.concat(_.camelCase(topic));
        }, []);

        return _.assign(allActions, _.pick(action, topics));
    }, {});

    return bindActionCreators(_actions as any, dispatch);
};