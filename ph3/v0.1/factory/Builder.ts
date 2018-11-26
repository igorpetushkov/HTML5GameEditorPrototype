import * as _ from 'lodash';

import Game from '../core/Game';
import Scene from '../scene/Scene';

export default class Builder {
    public static buildGame(model?: Kroppli.Game.Model): Game {
        model = _.assign({
            debug: false,
            uiplayer: false,
            storages: {
                assets: null,
                data: null,
                physics: null,
            },
        }, model);

        return new Game(model);
    }

    public static buildScene(key, model: DataStorage.SceneModel & any, addToPool): Scene {
        model = _.assign({ key, typeclass: 'scene' }, model);

        const item = new Scene(model);

        if (addToPool) {
            Game.getPool().addItem(item);
        }

        return item;
    }

    public static buildGroup(key, model: DataStorage.GroupModel & any, addToPool): ObjectGroup {
        model = _.assign({
            key: key,
            typeclass: 'group',
            items: [],
        }, model);

        const item = new ObjectGroup(model);

        if (addToPool) {
            Game.getPool().addItem(item);
        }

        return item;
    }

    public static buildLayer(key, model: DataStorage.LayerModel & any, addToPool): Layer {
        _.assign(model, { key, typeclass: 'layer' });

        const item = new Layer(model);

        if (addToPool) {
            Game.getPool().addItem(item);
        }

        return item;
    }

    public static buildImageObject(key, model: DataStorage.ImageObjectModel & any, addToPool): ImageObject {
        model = _.assign({
            key: key,
            typeclass: 'object',
            typeobject: 'image',
            width: 10,
            height: 10,
            position: [10, 10],
            anchor: [0, 0],
        }, model);

        const item = new ImageObject(model);

        if (addToPool) {
            Game.getPool().addItem(item);
        }

        return item;
    }

    public static buildSpriteObject(key, model: DataStorage.SpriteObjectModel & any, addToPool): SpriteObject {
        model = _.assign({
            key: key,
            typeclass: 'object',
            typeobject: 'sprite',
            width: 10,
            height: 10,
            position: [10, 10],
            anchor: [0, 0],
        }, model);

        const item = new SpriteObject(model);

        if (addToPool) {
            Game.getPool().addItem(item);
        }

        return item;
    }

    

}