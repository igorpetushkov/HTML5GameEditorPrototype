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
exports.TOPICS = redux_1.formatTopics('views/explorer/OBJECTS', {
    SELECT_OBJECT: 'SELECT_OBJECT',
    // CREATE_OBJECT: 'CREATE_OBJECT',
    // UPDATE_OBJECT: 'UPDATE_OBJECT',
    // REMOVE_OBJECT: 'REMOVE_OBJECT',
    SELECT_GROUP: 'SELECT_GROUP',
});
class ObjectsTabActions {
    static selectObject(objectId) {
        return (state, payload) => {
            return _.update(state, 'explorer', explorer => {
                return _.assign(explorer, {
                    objectId: payload.objectId,
                    groupId: 0,
                });
            });
        };
    }
    static selectGroup(groupId) {
        return (state, payload) => {
            return _.update(state, 'explorer', explorer => {
                return _.assign(explorer, {
                    objectId: 0,
                    groupId: payload.groupId,
                });
            });
        };
    }
}
ObjectsTabActions.topics = exports.TOPICS;
__decorate([
    redux_1.wrapAction(exports.TOPICS.SELECT_OBJECT), 
    __metadata('design:type', Function), 
    __metadata('design:paramtypes', [Number]), 
    __metadata('design:returntype', void 0)
], ObjectsTabActions, "selectObject", null);
__decorate([
    redux_1.wrapAction(exports.TOPICS.SELECT_GROUP), 
    __metadata('design:type', Function), 
    __metadata('design:paramtypes', [Number]), 
    __metadata('design:returntype', void 0)
], ObjectsTabActions, "selectGroup", null);
exports.ObjectsTabActions = ObjectsTabActions;
//# sourceMappingURL=ObjectsTabActions.js.map