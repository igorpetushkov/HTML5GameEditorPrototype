import * as _ from 'lodash';

import * as http from './http';

export default class Loader {
    static async loadGameConfig(url): Promise<any> {
        return await http.loadFile(url);
    }

    static async loadGameData(url): Promise<any> {
        const dataJSON = await http.loadFile(url);

        if (!dataJSON['data']) {
            throw 'error: lib/data -> loadGameData';
        }

        let models = [];

        _.forIn(dataJSON['data'], (list, key) => {
            for (let model of list) {
                model['typeclass'] = key;

                models.push(model);
            }
        });

        // if null -> return [];

        return models;
    }

    static async loadAssetData(url): Promise<any> {
        const assetsJSON = await http.loadFile(url);

        if (!assetsJSON['assets']) {
            throw 'error: lib/assets -> loadAssetsData';
        }

        let models = [];

        _.forIn(assetsJSON['assets'], (list, key) => {
            for (let model of list) {
                model['typeclass'] = 'asset';
                model['typeasset'] = key;

                models.push(model);
            }
        });

        // if null -> return [];

        return models;
    }
}