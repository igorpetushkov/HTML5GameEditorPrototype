"use strict";
const _ = require('lodash');
const redux_actions_1 = require('redux-actions');
const Actions = require('redux/Actions');
const redux_1 = require('lib/redux');
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (data) => {
    const topics = _.map(_.values(Actions), (action) => {
        return redux_1.parseTopics(action, action.topics);
    });
    return redux_actions_1.handleActions(_.assign({}, ...topics), data);
};
//# sourceMappingURL=Reducer.js.map