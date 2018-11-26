import * as _ from 'lodash';
import { wrapAction as wrap, formatTopics } from 'lib/redux';
import { formatPoint } from 'lib/inspectorPoints';
import { IUiData } from 'interfaces';

const TOPICS: any = formatTopics('UI/INSPECTOR', {
    CHANGE_POINT: 'CHANGE_POINT',
    CLEAR_POINT: 'CLEAR_POINT',

    CHANGE_OBJECT: 'CHANGE_OBJECT',
});

export class InspectorActions {
    static topics = TOPICS;

    @wrap(TOPICS.CHANGE_POINT)
    static changePoint(point: number, id: number) {
        return (state: IUiData, payload: any) => {
            return _.set(state, 'inspector.point', formatPoint(payload.point, payload.id));
        };
    }

    @wrap(TOPICS.CLEAR_POINT)
    static clearPoint() {
        return (state: IUiData, payload: any) => {
            return _.set(state, 'inspector.point', null);
        };
    }

    @wrap(TOPICS.CHANGE_OBJECT)
    static changeObject(data: any) {
        return (state: IUiData, payload: any) => {
            // let { data } = action.payload;

            // return state.updateIn(['objects'], objects => {
            //     let index = objects.findIndex(obj => data.id === obj.get('id'));
            //     let objs = objects.updateIn([index], object => {
            //         if (data.tags) {
            //             const isEqual = _.isEqual(object.get('tags').toJS(), data.tags);

            //             if (!isEqual) {
            //                 object = object.set('tags', (data.tags));
            //             }
            //         } else if (data.componentId) {
            //             object = object.updateIn(['components', _.toString(data.componentId), 'data'], cdata => {
            //                 data = _.omit(data, ['id', 'componentId']);

            //                 return !_.isEqual(cdata.toJS(), data) ? data : cdata;
            //             });
            //         } else {
            //             object = object.merge(data);
            //         }

            //         return object;
            //     });

            //     return objs;
            // });
        };
    }

}