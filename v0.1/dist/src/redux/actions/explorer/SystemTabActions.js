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
const constants_1 = require('../../../constants');
exports.TOPICS = redux_1.formatTopics('views/explorer/SYSTEM', {
    SELECT_GROUP_ITEM: 'SELECT_GROUP_ITEM',
    SELECT_GROUP: 'SELECT_GROUP',
});
class SystemTabActions {
    static selectGroupItem(itemId, groupId) {
        return (state, payload) => {
            const { itemId, groupId } = payload;
            return _.update(state, 'ui.explorer', explorer => {
                return _.assign(explorer, {
                    systemSceneId: groupId === constants_1.SYSTEM_GROUP.SCENES ? itemId : 0,
                    systemLayerId: groupId === constants_1.SYSTEM_GROUP.LAYERS ? itemId : 0,
                    systemSceneGroupSelected: false,
                    systemLayerGroupSelected: false,
                });
            });
        };
    }
    static selectGroup(groupId) {
        return (state, payload) => {
            const { groupId } = payload;
            return _.update(state, 'explorer', explorer => {
                return _.assign(explorer, {
                    systemSceneId: 0,
                    systemLayerId: 0,
                    systemSceneGroupSelected: groupId === constants_1.SYSTEM_GROUP.SCENES,
                    systemLayerGroupSelected: groupId === constants_1.SYSTEM_GROUP.LAYERS,
                });
            });
        };
    }
}
SystemTabActions.topics = exports.TOPICS;
__decorate([
    redux_1.wrapAction(exports.TOPICS.SELECT_GROUP_ITEM), 
    __metadata('design:type', Function), 
    __metadata('design:paramtypes', [Number, Number]), 
    __metadata('design:returntype', void 0)
], SystemTabActions, "selectGroupItem", null);
__decorate([
    redux_1.wrapAction(exports.TOPICS.SELECT_GROUP), 
    __metadata('design:type', Function), 
    __metadata('design:paramtypes', [Number]), 
    __metadata('design:returntype', void 0)
], SystemTabActions, "selectGroup", null);
exports.SystemTabActions = SystemTabActions;
//# sourceMappingURL=SystemTabActions.js.map