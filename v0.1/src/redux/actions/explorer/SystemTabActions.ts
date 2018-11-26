import * as _ from 'lodash';
import { wrapAction as wrap, formatTopics } from 'lib/redux';
import { IUiData } from 'interfaces';
import { SYSTEM_GROUP } from '../../../constants';

export const TOPICS: any = formatTopics('views/explorer/SYSTEM', {
    SELECT_GROUP_ITEM: 'SELECT_GROUP_ITEM',
    SELECT_GROUP: 'SELECT_GROUP',
});

export class SystemTabActions {
    static topics = TOPICS;

    @wrap(TOPICS.SELECT_GROUP_ITEM)
    static selectGroupItem(itemId: number, groupId: number) {
        return (state: IUiData, payload: any) => {
            const { itemId, groupId } = payload;

            return _.update(state , 'ui.explorer', explorer => {
                return _.assign(explorer, {
                    systemSceneId: groupId === SYSTEM_GROUP.SCENES ? itemId : 0,
                    systemLayerId: groupId === SYSTEM_GROUP.LAYERS ? itemId : 0,
                    systemSceneGroupSelected: false,
                    systemLayerGroupSelected: false,
                });
            });
        };
    }

    @wrap(TOPICS.SELECT_GROUP)
    static selectGroup(groupId: number) {
        return (state: IUiData, payload: any) => {
            const { groupId } = payload;

            return _.update(state, 'explorer', explorer => {
                return _.assign(explorer, {
                    systemSceneId: 0,
                    systemLayerId: 0,
                    systemSceneGroupSelected: groupId === SYSTEM_GROUP.SCENES,
                    systemLayerGroupSelected: groupId === SYSTEM_GROUP.LAYERS,
                });
            });
        };
    }
}