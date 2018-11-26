"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const _ = require('lodash');
const redux_1 = require('lib/redux');
exports.TOPICS = redux_1.formatTopics('views/explorer/SCRIPTS', {
    TOGGLE_BRANCH: 'TOGGLE_BRANCH',
    SELECT_SCRIPT: 'SELECT_SCRIPT',
});
class ScriptsTabActions {
    static selectScript(scriptId) {
        return (state, payload) => {
            return _.set(state, 'explorer.scriptId', payload.scriptId);
        };
    }
    static toggleBranch(branchId) {
        return (state, payload) => {
            return _.update(state, 'explorer.scriptBranches', branches => {
                if (_.includes(branches, payload.branchId)) {
                    return _.without(branches, payload.branchId);
                }
                else {
                    return branches.concat(payload.branchId);
                }
            });
        };
    }
}
ScriptsTabActions.topics = exports.TOPICS;
__decorate([
    redux_1.wrapAction(exports.TOPICS.SELECT_SCRIPT), 
    __metadata('design:type', Function), 
    __metadata('design:paramtypes', [Number]), 
    __metadata('design:returntype', void 0)
], ScriptsTabActions, "selectScript", null);
__decorate([
    redux_1.wrapAction(exports.TOPICS.TOGGLE_BRANCH), 
    __metadata('design:type', Function), 
    __metadata('design:paramtypes', [String]), 
    __metadata('design:returntype', void 0)
], ScriptsTabActions, "toggleBranch", null);
exports.ScriptsTabActions = ScriptsTabActions;
//# sourceMappingURL=ScriptsTabActions.js.map