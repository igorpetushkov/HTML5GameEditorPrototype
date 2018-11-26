import { bindActionCreators } from 'redux';
import { connect as reduxConnect } from 'react-redux';

import { withStyles } from 'material-ui/styles';

export const mapDispatch = actions => dispatch => {
    const _actions = {};

    _.keys(actions).forEach(root => {
        _actions[root] = {};

        _.keys(actions[root]).forEach(group => {
            const mapper = {};

            _.keys(actions[root][group]).forEach(name => {
                const type = `${root}/${group}/`.toUpperCase() + _.upperCase(name).replace(/ /g, '_');

                mapper[name] = (...args) => ({ type, args });
            });

            _actions[root][group] = bindActionCreators(mapper, dispatch);
        });
    });

    return { actions: _actions };
};

export const parseTopics = actions => {
    const topics = {};

    _.keys(actions).forEach(root => {
        _.keys(actions[root]).forEach(group => {
            _.keys(actions[root][group]).forEach(name => {
                const func = actions[root][group][name];
                const type = `${root}/${group}/`.toUpperCase() + _.upperCase(name).replace(/ /g, '_');

                topics[type] = (state, data) => {
                    const stres = func(...data.args, state, { type: type });

                    if (stres && stres.length) {
                        stres.forEach(res => {
                            _.update(state, res, stdata => {
                                stdata['tm'] = Date.now();
                                return stdata;
                            });
                        });
                    }

                    return stres ? { ...state } : state;
                };
            });
        });
    });

    return topics;
};

export const connect = (fpstr, styles = {}, actions = [], view) => {
    const fmprops = (state, props) => {
        const result = _.get(state, fpstr);

        for (const key in result) {
            if (key === 'f') {
                Object.keys(result['f']).forEach(fk => {
                    result[`f_${fk}`] = result['f'][fk](state);
                });
            }
        }

        return { ...result };
    };

    return reduxConnect(fmprops, mapDispatch(actions))(withStyles(() => styles)(view));
};