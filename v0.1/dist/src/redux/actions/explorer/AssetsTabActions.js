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
exports.TOPICS = redux_1.formatTopics('views/explorer/ASSETS', {
    TOGGLE_BRANCH: 'TOGGLE_BRANCH',
    SELECT_ASSET: 'SELECT_ASSET',
});
class AssetsTabActions {
    static selectAsset(assetId, group) {
        return (state, payload) => {
            let key = null;
            switch (payload.group) {
                case (constants_1.ASSET_GROUP.IMAGES):
                    key = 'imageId';
                    break;
                case (constants_1.ASSET_GROUP.TILEMAPS):
                    key = 'tilemapId';
                    break;
            }
            return _.set(state, ['ui', 'explorer', key], payload.assetId);
        };
    }
    static toggleBranch(branchId, group) {
        return (state, payload) => {
            let key = null;
            switch (payload.group) {
                case (constants_1.ASSET_GROUP.IMAGES):
                    key = 'imageBranches';
                    break;
                case (constants_1.ASSET_GROUP.TILEMAPS):
                    key = 'tilemapBranches';
                    break;
            }
            return _.update(state, ['ui', 'explorer', key], branches => {
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
AssetsTabActions.topics = exports.TOPICS;
__decorate([
    redux_1.wrapAction(exports.TOPICS.SELECT_ASSET), 
    __metadata('design:type', Function), 
    __metadata('design:paramtypes', [Number, Number]), 
    __metadata('design:returntype', void 0)
], AssetsTabActions, "selectAsset", null);
__decorate([
    redux_1.wrapAction(exports.TOPICS.TOGGLE_BRANCH), 
    __metadata('design:type', Function), 
    __metadata('design:paramtypes', [String, Number]), 
    __metadata('design:returntype', void 0)
], AssetsTabActions, "toggleBranch", null);
exports.AssetsTabActions = AssetsTabActions;
//# sourceMappingURL=AssetsTabActions.js.map