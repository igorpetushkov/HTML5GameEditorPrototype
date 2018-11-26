// import { IGameData, IGameItem } from 'kroppliph/game';
//  import * as _ from 'lodash';

namespace IGameItem {
    export interface Object {};
    export interface Group {};
    export interface Script {};
    export interface Tilemap {};
    export interface System {};
    export interface Layer {};
    export interface Scene {};
    export interface Tag {};
}


interface IGameData {
}

namespace IGameData {
    export interface Object {}
    export interface Group {}
    export interface Script {}
    export interface Tilemap {}
    export interface System {}
    export interface Layer {}
    export interface Scene {}
    export interface Tag {}
}

export interface IUiStorage extends IGameData {}

export namespace IUiStorage {
    export interface Object extends IGameItem.Object {}
    export interface Group extends IGameItem.Group {}
    export interface Script extends IGameItem.Script {}
    export interface Tilemap extends IGameItem.Tilemap {}
    export interface System extends IGameItem.System {}
    export interface Layer extends IGameItem.Layer {}
    export interface Scene extends IGameItem.Scene {}
    export interface Tag extends IGameItem.Tag {}
}

///////  ///////  ///////  ///////  ///////  ///////

export interface IProjectConfig {
    name: string;
}

export interface IUiData {
    explorer: IUiData.Explorer;
    scene: IUiData.Scene;
    inspector: IUiData.Inspector;
    timeline: IUiData.Timeline;
    storage: IUiStorage;
}

export namespace IUiData {
    export interface Explorer {
        tagId: number;

        objectId: number;
        groupId: number;

        imageId: number;
        imageBranches: string[];
        tilemapId: number;
        tilemapBranches: string[];

        scriptId: number;
        scriptBranches: string[];

        systemSceneId: number;
        systemSceneGroupSelected: boolean;
        systemLayerId: number;
        systemLayerGroupSelected: boolean;
    };

    export interface Scene {
        moveMode: boolean;
        scaleMode: boolean;
        rotateMode: boolean;

        playScene: boolean;
        stopScene: boolean;
        pauseScene: boolean;

        sceneId: number;
        sceneListShow: boolean;
        layerListShow: boolean;
    };

    export interface Inspector {
        point: string;
    }

    export interface Timeline {
        playTime: number;
    }
}

export interface IInspectorPaper {
    label: string;
    opened: boolean;
    disconnected: boolean;
    removed: boolean;
    element: JSX.Element;
}

export namespace IInspectorPanel {
    export interface Base {
        id: number;
        name: string;
        scene: number;
        layer: number;
        group: number;
        tags: number[];
        hidden: boolean;
        looked: boolean;
    }

    export interface Transform {
        width: number;
        height: number;
        position: {x: number, y: number};
        anchor: {x: number, y: number};
        scale: {x: number, y: number};
        rotate: number;
    }

    export interface Texture {
        imageId: number;
        frame: number | string;
        smoothed?: boolean;
    }

    export interface Button {
        overFrame: number | string;
        outFrame: number | string;
        downFrame: number | string;
        upFrame: number | string;
    }

    export interface Text {
        text: string;
        style?: any;
        font?: string;
        textSize?: number;
        align?: string;
    }

    export interface Animation {
        frameRate?: number;
        loop?: boolean;
        killOnComplete?: boolean;
    }

    export interface Tile { }
    export interface Physic { }
    export interface Input { }
    export interface Tween { }
    export interface Audio { }
}

export interface IReduxAction {
    topics: string[];
}