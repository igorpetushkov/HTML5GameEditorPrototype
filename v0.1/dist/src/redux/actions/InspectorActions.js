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
const inspectorPoints_1 = require('lib/inspectorPoints');
const TOPICS = redux_1.formatTopics('UI/INSPECTOR', {
    CHANGE_POINT: 'CHANGE_POINT',
    CLEAR_POINT: 'CLEAR_POINT',
    CHANGE_OBJECT: 'CHANGE_OBJECT',
});
class InspectorActions {
    static changePoint(point, id) {
        return (state, payload) => {
            return _.set(state, 'inspector.point', inspectorPoints_1.formatPoint(payload.point, payload.id));
        };
    }
    static clearPoint() {
        return (state, payload) => {
            return _.set(state, 'inspector.point', null);
        };
    }
    static changeObject(data) {
        return (state, payload) => {
            // let { data } = action.payload;
            // return state.updateIn(['objects'], objects => {
            //     let index = objects.findIndex(obj => data.id === obj.get('id'));
            //     let objs = objects.updateIn([index], object => {
            //         if (data.tags) {
            //             const isEqual = _.isEqual(object.get('tags').toJS(), data.tags);
            //             if (!isEqual) {
            //                 object = object.set('tags', (data.tags));
            //             }
            //         } else if (data.componentId) {
            //             object = object.updateIn(['components', _.toString(data.componentId), 'data'], cdata => {
            //                 data = _.omit(data, ['id', 'componentId']);
            //                 return !_.isEqual(cdata.toJS(), data) ? data : cdata;
            //             });
            //         } else {
            //             object = object.merge(data);
            //         }
            //         return object;
            //     });
            //     return objs;
            // });
        };
    }
}
InspectorActions.topics = TOPICS;
__decorate([
    redux_1.wrapAction(TOPICS.CHANGE_POINT), 
    __metadata('design:type', Function), 
    __metadata('design:paramtypes', [Number, Number]), 
    __metadata('design:returntype', void 0)
], InspectorActions, "changePoint", null);
__decorate([
    redux_1.wrapAction(TOPICS.CLEAR_POINT), 
    __metadata('design:type', Function), 
    __metadata('design:paramtypes', []), 
    __metadata('design:returntype', void 0)
], InspectorActions, "clearPoint", null);
__decorate([
    redux_1.wrapAction(TOPICS.CHANGE_OBJECT), 
    __metadata('design:type', Function), 
    __metadata('design:paramtypes', [Object]), 
    __metadata('design:returntype', void 0)
], InspectorActions, "changeObject", null);
exports.InspectorActions = InspectorActions;
//# sourceMappingURL=InspectorActions.js.map