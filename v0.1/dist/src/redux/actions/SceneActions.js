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
const TOPICS = redux_1.formatTopics('UI/SCENE', {
    CHANGE_SCENE: 'CHANGE_SCENE',
    CHANGE_LAYER: 'CHANGE_LAYER',
    TOGGLE_MODE_MOVE: 'TOGGLE_MODE_MOVE',
    TOGGLE_MODE_SCALE: 'TOGGLE_MODE_SCALE',
    TOGGLE_MODE_ROTATE: 'TOGGLE_MODE_ROTATE',
    ROTATE_LEFT: 'ROTATE_LEFT',
    ROTATE_RIGHT: 'ROTATE_RIGHT',
    ROTATE_90: 'ROTATE_90',
    PLAY_SCENE: 'PLAY_SCENE',
    STOP_SCENE: 'STOP_SCENE',
    PAUSE_SCENE: 'PAUSE_SCENE',
    STEP_PREV: 'STEP_PREV',
    STEP_NEXT: 'STEP_NEXT',
    TOGGLE_LAYER_LIST_SHOW: 'TOGGLE_LAYER_LIST_SHOW',
    TOGGLE_SCENE_LIST_SHOW: 'TOGGLE_SCENE_LIST_SHOW',
});
class SceneActions {
    static changeScene(sceneId) {
        return (state, payload) => {
            return _.set(state, 'scene.sceneId', payload.sceneId);
        };
    }
    static changeLayer(layerId, sceneId) {
        return (state, payload) => {
            const { sceneId, layerId } = payload;
            return _.update(state, 'scenes', (scenes) => {
                return scenes.map(scene => {
                    return scene['id'] === sceneId ? _.set(scene, 'layer', layerId) : scene;
                });
            });
        };
    }
    static toggleModeMove() {
        return (state, payload) => {
            return _.update(state, 'scene', scene => {
                return _.assign(scene, {
                    moveMode: !scene.moveMode,
                    scaleMode: false,
                    rotateMode: false,
                });
            });
        };
    }
    static toggleModeScale() {
        return (state, payload) => {
            return _.update(state, 'scene', scene => {
                return _.assign(scene, {
                    moveMode: false,
                    scaleMode: !scene.scaleMode,
                    rotateMode: false,
                });
            });
        };
    }
    static toggleModeRotate() {
        return (state, payload) => {
            return _.update(state, 'scene', scene => {
                return _.assign(scene, {
                    moveMode: false,
                    scaleMode: false,
                    rotateMode: !scene.rotateMode,
                });
            });
        };
    }
    static rotateLeft() {
        return (state, payload) => {
            return state;
        };
    }
    static rotateRight() {
        return (state, payload) => {
            return state;
        };
    }
    static rotate90() {
        return (state, payload) => {
            return state;
        };
    }
    static playScene() {
        return (state, payload) => {
            return _.update(state, 'scene', scene => {
                return _.assign(scene, {
                    playScene: true,
                    stopScene: false,
                    pauseScene: false,
                });
            });
        };
    }
    static stopScene() {
        return (state, payload) => {
            return _.update(state, 'scene', scene => {
                return _.assign(scene, {
                    playScene: false,
                    stopScene: true,
                    pauseScene: false,
                });
            });
        };
    }
    static pauseScene() {
        return (state, payload) => {
            return _.update(state, 'scene', scene => {
                return _.assign(scene, {
                    playScene: false,
                    stopScene: false,
                    pauseScene: true,
                });
            });
        };
    }
    static stepPrev() {
        return (state, payload) => {
            return state;
        };
    }
    static stepNext() {
        return (state, payload) => {
            return state;
        };
    }
    static toggleLayerListShow() {
        return (state, payload) => {
            return _.update(state, 'scene', scene => {
                return _.assign(scene, {
                    layerListShow: !scene.layerListShow,
                    sceneListShow: false,
                });
            });
        };
    }
    static toggleSceneListShow() {
        return (state, payload) => {
            return _.update(state, 'scene', scene => {
                return _.assign(scene, {
                    layerListShow: false,
                    sceneListShow: !scene.sceneListShow,
                });
            });
        };
    }
}
SceneActions.topics = TOPICS;
__decorate([
    redux_1.wrapAction(TOPICS.CHANGE_SCENE), 
    __metadata('design:type', Function), 
    __metadata('design:paramtypes', [Number]), 
    __metadata('design:returntype', void 0)
], SceneActions, "changeScene", null);
__decorate([
    redux_1.wrapAction(TOPICS.CHANGE_LAYER), 
    __metadata('design:type', Function), 
    __metadata('design:paramtypes', [Number, Number]), 
    __metadata('design:returntype', void 0)
], SceneActions, "changeLayer", null);
__decorate([
    redux_1.wrapAction(TOPICS.TOGGLE_MODE_MOVE), 
    __metadata('design:type', Function), 
    __metadata('design:paramtypes', []), 
    __metadata('design:returntype', void 0)
], SceneActions, "toggleModeMove", null);
__decorate([
    redux_1.wrapAction(TOPICS.TOGGLE_MODE_SCALE), 
    __metadata('design:type', Function), 
    __metadata('design:paramtypes', []), 
    __metadata('design:returntype', void 0)
], SceneActions, "toggleModeScale", null);
__decorate([
    redux_1.wrapAction(TOPICS.TOGGLE_MODE_ROTATE), 
    __metadata('design:type', Function), 
    __metadata('design:paramtypes', []), 
    __metadata('design:returntype', void 0)
], SceneActions, "toggleModeRotate", null);
__decorate([
    redux_1.wrapAction(TOPICS.ROTATE_LEFT), 
    __metadata('design:type', Function), 
    __metadata('design:paramtypes', []), 
    __metadata('design:returntype', void 0)
], SceneActions, "rotateLeft", null);
__decorate([
    redux_1.wrapAction(TOPICS.ROTATE_RIGHT), 
    __metadata('design:type', Function), 
    __metadata('design:paramtypes', []), 
    __metadata('design:returntype', void 0)
], SceneActions, "rotateRight", null);
__decorate([
    redux_1.wrapAction(TOPICS.ROTATE_90), 
    __metadata('design:type', Function), 
    __metadata('design:paramtypes', []), 
    __metadata('design:returntype', void 0)
], SceneActions, "rotate90", null);
__decorate([
    redux_1.wrapAction(TOPICS.PLAY_SCENE), 
    __metadata('design:type', Function), 
    __metadata('design:paramtypes', []), 
    __metadata('design:returntype', void 0)
], SceneActions, "playScene", null);
__decorate([
    redux_1.wrapAction(TOPICS.STOP_SCENE), 
    __metadata('design:type', Function), 
    __metadata('design:paramtypes', []), 
    __metadata('design:returntype', void 0)
], SceneActions, "stopScene", null);
__decorate([
    redux_1.wrapAction(TOPICS.PAUSE_SCENE), 
    __metadata('design:type', Function), 
    __metadata('design:paramtypes', []), 
    __metadata('design:returntype', void 0)
], SceneActions, "pauseScene", null);
__decorate([
    redux_1.wrapAction(TOPICS.STEP_PREV), 
    __metadata('design:type', Function), 
    __metadata('design:paramtypes', []), 
    __metadata('design:returntype', void 0)
], SceneActions, "stepPrev", null);
__decorate([
    redux_1.wrapAction(TOPICS.STEP_NEXT), 
    __metadata('design:type', Function), 
    __metadata('design:paramtypes', []), 
    __metadata('design:returntype', void 0)
], SceneActions, "stepNext", null);
__decorate([
    redux_1.wrapAction(TOPICS.TOGGLE_LAYER_LIST_SHOW), 
    __metadata('design:type', Function), 
    __metadata('design:paramtypes', []), 
    __metadata('design:returntype', void 0)
], SceneActions, "toggleLayerListShow", null);
__decorate([
    redux_1.wrapAction(TOPICS.TOGGLE_SCENE_LIST_SHOW), 
    __metadata('design:type', Function), 
    __metadata('design:paramtypes', []), 
    __metadata('design:returntype', void 0)
], SceneActions, "toggleSceneListShow", null);
exports.SceneActions = SceneActions;
//# sourceMappingURL=SceneActions.js.map