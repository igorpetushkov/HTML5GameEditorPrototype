import * as _ from 'lodash';
import { wrapAction as wrap, formatTopics } from 'lib/redux';
import { IUiData, IUiStorage } from 'interfaces';

const TOPICS: any = formatTopics('UI/SCENE', {
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

export class SceneActions {
    static topics = TOPICS;

    @wrap(TOPICS.CHANGE_SCENE)
    static changeScene(sceneId: number) {
        return (state: IUiData, payload: any) => {
            return _.set(state, 'scene.sceneId', payload.sceneId);
        };
    }

    @wrap(TOPICS.CHANGE_LAYER)
    static changeLayer(layerId: number, sceneId: number) {
        return (state: IUiData, payload: any) => {
            const { sceneId, layerId } = payload;

            return _.update(state, 'scenes', (scenes: IUiStorage.Scene[]) => {
                return scenes.map(scene => {
                    return scene['id'] === sceneId ? _.set(scene, 'layer', layerId) : scene;
                });
            });
        };
    }

    @wrap(TOPICS.TOGGLE_MODE_MOVE)
    static toggleModeMove() {
        return (state: IUiData, payload: any) => {
            return _.update(state, 'scene', scene => {
                return _.assign(scene, {
                    moveMode: !scene.moveMode,
                    scaleMode: false,
                    rotateMode: false,
                });
            });
        };
    }

    @wrap(TOPICS.TOGGLE_MODE_SCALE)
    static toggleModeScale() {
        return (state: IUiData, payload: any) => {
            return _.update(state, 'scene', scene => {
                return _.assign(scene, {
                    moveMode: false,
                    scaleMode: !scene.scaleMode,
                    rotateMode: false,
                });
            });
        };
    }

    @wrap(TOPICS.TOGGLE_MODE_ROTATE)
    static toggleModeRotate() {
        return (state: IUiData, payload: any) => {
            return _.update(state, 'scene', scene => {
                return _.assign(scene, {
                    moveMode: false,
                    scaleMode: false,
                    rotateMode: !scene.rotateMode,
                });
            });
        };
    }

    @wrap(TOPICS.ROTATE_LEFT)
    static rotateLeft() {
        return (state: IUiData, payload: any) => {
            return state;
        };
    }

    @wrap(TOPICS.ROTATE_RIGHT)
    static rotateRight() {
        return (state: IUiData, payload: any) => {
            return state;
        };
    }

    @wrap(TOPICS.ROTATE_90)
    static rotate90() {
        return (state: IUiData, payload: any) => {
            return state;
        };
    }

    @wrap(TOPICS.PLAY_SCENE)
    static playScene() {
        return (state: IUiData, payload: any) => {
            return _.update(state, 'scene', scene => {
                return _.assign(scene, {
                    playScene: true,
                    stopScene: false,
                    pauseScene: false,
                });
            });
        };
    }

    @wrap(TOPICS.STOP_SCENE)
    static stopScene() {
        return (state: IUiData, payload: any) => {
            return _.update(state, 'scene', scene => {
                return _.assign(scene, {
                    playScene: false,
                    stopScene: true,
                    pauseScene: false,
                });
            });
        };
    }

    @wrap(TOPICS.PAUSE_SCENE)
    static pauseScene() {
        return (state: IUiData, payload: any) => {
            return _.update(state, 'scene', scene => {
                return _.assign(scene, {
                    playScene: false,
                    stopScene: false,
                    pauseScene: true,
                });
            });
        };
    }

    @wrap(TOPICS.STEP_PREV)
    static stepPrev() {
        return (state: IUiData, payload: any) => {
            return state;
        };
    }

    @wrap(TOPICS.STEP_NEXT)
    static stepNext() {
        return (state: IUiData, payload: any) => {
            return state;
        };
    }

    @wrap(TOPICS.TOGGLE_LAYER_LIST_SHOW)
    static toggleLayerListShow() {
        return (state: IUiData, payload: any) => {
            return _.update(state, 'scene', scene => {
                return _.assign(scene, {
                    layerListShow: !scene.layerListShow,
                    sceneListShow: false,
                });
            });
        };
    }

    @wrap(TOPICS.TOGGLE_SCENE_LIST_SHOW)
    static toggleSceneListShow() {
        return (state: IUiData, payload: any) => {
            return _.update(state, 'scene', scene => {
                return _.assign(scene, {
                    layerListShow: false,
                    sceneListShow: !scene.sceneListShow,
                });
            });
        };
    }
}