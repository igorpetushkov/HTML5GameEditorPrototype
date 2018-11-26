import * as _ from 'lodash';
import { wrapAction as wrap, formatTopics } from 'lib/redux';
import { IUiData } from 'interfaces';
import { ASSET_GROUP } from '../../../constants';

export const TOPICS: any = formatTopics('views/explorer/ASSETS', {
    TOGGLE_BRANCH: 'TOGGLE_BRANCH',

    SELECT_ASSET: 'SELECT_ASSET',
    // IMPORT_ASSET: 'IMPORT_ASSET',
    // REFRESH_ASSETS: 'REFRESH_ASSETS',
    // UNLOAD_ASSET: 'UNLOAD_ASSET',
    // UPDATE_ASSET: 'UPDATE_ASSET',
    // SORT_ASSETS: 'SORT_ASSETS',
    // FILTER_ASSETS: 'FILTER_ASSETS'
});

export class AssetsTabActions {
    static topics = TOPICS;

    @wrap(TOPICS.SELECT_ASSET)
    static selectAsset(assetId: number, group: ASSET_GROUP) {
        return (state: IUiData, payload: any) => {
            let key = null;

            switch (payload.group) {
                case (ASSET_GROUP.IMAGES):
                    key = 'imageId';
                    break;
                case (ASSET_GROUP.TILEMAPS):
                    key = 'tilemapId';
                    break;
            }

            return _.set(state, ['ui', 'explorer', key], payload.assetId);
        };
    }

    @wrap(TOPICS.TOGGLE_BRANCH)
    static toggleBranch(branchId: string, group: ASSET_GROUP) {
        return (state: IUiData, payload: any) => {
            let key = null;

            switch (payload.group) {
                case (ASSET_GROUP.IMAGES):
                    key = 'imageBranches';
                    break;
                case (ASSET_GROUP.TILEMAPS):
                    key = 'tilemapBranches';
                    break;
            }

            return _.update(state, ['ui', 'explorer', key], branches => {
                if (_.includes(branches, payload.branchId)) {
                    return _.without(branches, payload.branchId);
                } else {
                    return branches.concat(payload.branchId);
                }
            });
        };
    }
}