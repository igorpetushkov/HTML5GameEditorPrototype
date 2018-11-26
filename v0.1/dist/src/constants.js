"use strict";
exports.UI_DOM_ID = 'kroppli';
exports.CANVAS_DOM_ID = 'game';
exports.DEFAULT_UI_DATA = {
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
(function (EXPLORER_TAB) {
    EXPLORER_TAB[EXPLORER_TAB["OBJECTS"] = 1] = "OBJECTS";
    EXPLORER_TAB[EXPLORER_TAB["ASSETS"] = 2] = "ASSETS";
    EXPLORER_TAB[EXPLORER_TAB["SCRIPTS"] = 3] = "SCRIPTS";
    EXPLORER_TAB[EXPLORER_TAB["SYSTEM"] = 4] = "SYSTEM";
})(exports.EXPLORER_TAB || (exports.EXPLORER_TAB = {}));
var EXPLORER_TAB = exports.EXPLORER_TAB;
exports.INSPECTOR_POINT_DELIMITER = ':';
(function (INSPECTOR_POINT) {
    INSPECTOR_POINT[INSPECTOR_POINT["SCENES"] = 1] = "SCENES";
    INSPECTOR_POINT[INSPECTOR_POINT["LAYERS"] = 2] = "LAYERS";
    INSPECTOR_POINT[INSPECTOR_POINT["OBJECTS"] = 3] = "OBJECTS";
    INSPECTOR_POINT[INSPECTOR_POINT["GROUPS"] = 4] = "GROUPS";
    INSPECTOR_POINT[INSPECTOR_POINT["IMAGES"] = 5] = "IMAGES";
    INSPECTOR_POINT[INSPECTOR_POINT["TILEMAPS"] = 6] = "TILEMAPS";
    INSPECTOR_POINT[INSPECTOR_POINT["SCRIPTS"] = 7] = "SCRIPTS";
})(exports.INSPECTOR_POINT || (exports.INSPECTOR_POINT = {}));
var INSPECTOR_POINT = exports.INSPECTOR_POINT;
(function (INSPECTOR_PANEL_GROUP) {
    INSPECTOR_PANEL_GROUP[INSPECTOR_PANEL_GROUP["BASE"] = 1] = "BASE";
    INSPECTOR_PANEL_GROUP[INSPECTOR_PANEL_GROUP["TRANSFORM"] = 2] = "TRANSFORM";
    INSPECTOR_PANEL_GROUP[INSPECTOR_PANEL_GROUP["TEXTURE"] = 3] = "TEXTURE";
    INSPECTOR_PANEL_GROUP[INSPECTOR_PANEL_GROUP["TILE"] = 4] = "TILE";
    INSPECTOR_PANEL_GROUP[INSPECTOR_PANEL_GROUP["PHYSICS"] = 5] = "PHYSICS";
    INSPECTOR_PANEL_GROUP[INSPECTOR_PANEL_GROUP["ANIMATION"] = 6] = "ANIMATION";
    INSPECTOR_PANEL_GROUP[INSPECTOR_PANEL_GROUP["INPUT"] = 7] = "INPUT";
    INSPECTOR_PANEL_GROUP[INSPECTOR_PANEL_GROUP["BUTTON"] = 8] = "BUTTON";
    INSPECTOR_PANEL_GROUP[INSPECTOR_PANEL_GROUP["TEXT"] = 9] = "TEXT";
    INSPECTOR_PANEL_GROUP[INSPECTOR_PANEL_GROUP["TWEEN"] = 10] = "TWEEN";
    INSPECTOR_PANEL_GROUP[INSPECTOR_PANEL_GROUP["AUDIO"] = 11] = "AUDIO";
})(exports.INSPECTOR_PANEL_GROUP || (exports.INSPECTOR_PANEL_GROUP = {}));
var INSPECTOR_PANEL_GROUP = exports.INSPECTOR_PANEL_GROUP;
(function (PHYSICS_TYPE) {
    PHYSICS_TYPE[PHYSICS_TYPE["AABB"] = 0] = "AABB";
    PHYSICS_TYPE[PHYSICS_TYPE["P2"] = 1] = "P2";
})(exports.PHYSICS_TYPE || (exports.PHYSICS_TYPE = {}));
var PHYSICS_TYPE = exports.PHYSICS_TYPE;
(function (ASSET_GROUP) {
    ASSET_GROUP[ASSET_GROUP["IMAGES"] = 1] = "IMAGES";
    ASSET_GROUP[ASSET_GROUP["TILEMAPS"] = 2] = "TILEMAPS";
    ASSET_GROUP[ASSET_GROUP["AUDIO"] = 3] = "AUDIO";
})(exports.ASSET_GROUP || (exports.ASSET_GROUP = {}));
var ASSET_GROUP = exports.ASSET_GROUP;
(function (SYSTEM_GROUP) {
    SYSTEM_GROUP[SYSTEM_GROUP["SCENES"] = 1] = "SCENES";
    SYSTEM_GROUP[SYSTEM_GROUP["LAYERS"] = 2] = "LAYERS";
})(exports.SYSTEM_GROUP || (exports.SYSTEM_GROUP = {}));
var SYSTEM_GROUP = exports.SYSTEM_GROUP;
//# sourceMappingURL=constants.js.map