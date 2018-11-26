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
const TOPICS = redux_1.formatTopics('UI/TIMELINE', {
    CHANGE_PLAY_TIME: 'CHANGE_PLAY_TIME',
});
class TimelineActions {
    static changePlayTime(playTime) {
        return (state, payload) => {
            return _.set(state, 'timeline.playTime', payload.playTime);
        };
    }
}
TimelineActions.topics = TOPICS;
__decorate([
    redux_1.wrapAction(TOPICS.CHANGE_PLAY_TIME), 
    __metadata('design:type', Function), 
    __metadata('design:paramtypes', [Number]), 
    __metadata('design:returntype', void 0)
], TimelineActions, "changePlayTime", null);
exports.TimelineActions = TimelineActions;
//# sourceMappingURL=TimelineActions.js.map