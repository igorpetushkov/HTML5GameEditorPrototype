export const UI_DOM_ID = 'kroppli';
export const CANVAS_DOM_ID = 'game';

export const DEFAULT_UI_DATA = {
    explorer: {
        tagId: 1,

        objectId: 0,
        groupId: 0,

        imageId: 0,
        imageBranches: [],
        tilemapId: 0,
        tilemapBranches: [],

        scriptId: 0,
        scriptBranches: [],

        systemSceneId: 0,
        systemSceneGroupSelected: false,
        systemLayerId: 0,
        systemLayerGroupSelected: false,
    },

    scene: {
        moveMode: false,
        scaleMode: false,
        rotateMode: false,

        playScene: false,
        stopScene: true,
        pauseScene: false,

        sceneId: 1,
        sceneListShow: false,
        layerListShow: false,
    },

    inspector: {
        point: 'objects:11',
    },

    timeline: {
        playTime: 0,
    },

    storage: {
        scenes: [],
        layers: [],
        objects: [],
        groups: [],
        images: [],
        tilemaps: [],
        scripts: [],
        tags: [],
        system: {},
    },
};

export enum EXPLORER_TAB {
    OBJECTS = 1,
    ASSETS,
    SCRIPTS,
    SYSTEM
}

export const INSPECTOR_POINT_DELIMITER = ':';

export enum INSPECTOR_POINT {
    SCENES = 1,
    LAYERS,
    OBJECTS,
    GROUPS,
    IMAGES,
    TILEMAPS,
    SCRIPTS
}

export enum INSPECTOR_PANEL_GROUP {
    BASE = 1,
    TRANSFORM,
    TEXTURE,
    TILE,
    PHYSICS,
    ANIMATION,
    INPUT,
    BUTTON,
    TEXT,
    TWEEN,
    AUDIO,
}

export enum PHYSICS_TYPE {
    AABB,
    P2
}

export enum ASSET_GROUP {
    IMAGES = 1,
    TILEMAPS,
    AUDIO
}

export enum SYSTEM_GROUP {
    SCENES = 1,
    LAYERS
}