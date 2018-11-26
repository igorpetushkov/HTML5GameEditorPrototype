"use strict";
const _ = require('lodash');
const redux_1 = require('redux');
const BUILD_ACTION_DATA = '__BUILD_ACTION_DATA__';
exports.wrapAction = (value) => (target, propertyKey, descriptor) => {
    function getFunctionParamNames(func) {
        return func.toString().match(/\(.*?\)/)[0].replace(/[()]/gi, '').replace(/\s/gi, '').split(',');
    }
    let origin = target[propertyKey];
    target[propertyKey] = (...args) => {
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
        };
    };
    return target;
};
exports.formatTopics = (prefix, topics) => {
    let result = [];
    _.forEach(_.keys(topics), (key) => {
        result[key] = `${prefix}/${topics[key]}`;
    });
    return result;
};
exports.parseTopics = (actionHandlers, actionNames) => {
    let topics = {};
    _.forEach(_.keys(actionNames), (actionName) => {
        let handler = actionHandlers[_.camelCase(actionName)];
        if (_.isFunction(handler)) {
            const { topic, action } = handler(BUILD_ACTION_DATA);
            topics[topic] = (state, data) => {
                return action(_.clone(state), data.payload, { type: data.type, error: data.error });
            };
        }
    });
    return topics;
};
exports.mapDispatch = (dispatch, actions) => {
    let _actions = _.reduce([].concat(actions), (allActions, action) => {
        const topics = _.reduce(_.keys(action['topics']), (allTopics, topic) => {
            return allTopics.concat(_.camelCase(topic));
        }, []);
        return _.assign(allActions, _.pick(action, topics));
    }, {});
    return redux_1.bindActionCreators(_actions, dispatch);
};
//# sourceMappingURL=redux.js.map