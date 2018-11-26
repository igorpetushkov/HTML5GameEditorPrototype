import * as _ from 'lodash';
import { INSPECTOR_POINT, INSPECTOR_POINT_DELIMITER } from '../constants';

export function parsePoint(point: string) {
    if (!point) {
        return {
            point: null,
            id: null,
        };
    }

    const _point = point.split(INSPECTOR_POINT_DELIMITER);

    return {
        point: _point[0],
        id: parseInt(_point[1]),
    };
};

export function formatPoint(point: number, id: number) {
    const _point = _.toLower(INSPECTOR_POINT[point]);

    return `${_point}${INSPECTOR_POINT_DELIMITER}${id}`;
};