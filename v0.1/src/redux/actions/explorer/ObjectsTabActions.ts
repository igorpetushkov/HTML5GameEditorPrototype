import * as _ from 'lodash';
import { wrapAction as wrap, formatTopics } from 'lib/redux';
import { IUiData } from 'interfaces';

export const TOPICS: any = formatTopics('views/explorer/OBJECTS', {
    SELECT_OBJECT: 'SELECT_OBJECT',
    // CREATE_OBJECT: 'CREATE_OBJECT',
    // UPDATE_OBJECT: 'UPDATE_OBJECT',
    // REMOVE_OBJECT: 'REMOVE_OBJECT',

    SELECT_GROUP: 'SELECT_GROUP',
    // CREATE_GROUP: 'CREATE_GROUP',
    // REMOVE_GROUP: 'REMOVE_GROUP',

    // MOVE_OBJECT_TO_GROUP_: 'MOVE_OBJECT_TO_GROUP_',
    // REMOVE_OBJECT_FROM_GROUP: 'REMOVE_OBJECT_FROM_GROUP',
});

export class ObjectsTabActions {
    static topics = TOPICS;

    @wrap(TOPICS.SELECT_OBJECT)
    static selectObject(objectId: number) {
        return (state: IUiData, payload: any) => {
            return _.update(state, 'explorer', explorer => {
                return _.assign(explorer, {
                    objectId: payload.objectId,
                    groupId: 0,
                });
            });
        };
    }

    @wrap(TOPICS.SELECT_GROUP)
    static selectGroup(groupId: number) {
        return (state: IUiData, payload: any) => {
            return _.update(state, 'explorer', explorer => {
                return _.assign(explorer, {
                    objectId: 0,
                    groupId: payload.groupId,
                });
            });
        };
    }
}