"use strict";
const _ = require('lodash');
const constants_1 = require('../constants');
function parsePoint(point) {
    if (!point) {
        return {
            point: null,
            id: null,
        };
    }
    const _point = point.split(constants_1.INSPECTOR_POINT_DELIMITER);
    return {
        point: _point[0],
        id: parseInt(_point[1]),
    };
}
exports.parsePoint = parsePoint;
;
function formatPoint(point, id) {
    const _point = _.toLower(constants_1.INSPECTOR_POINT[point]);
    return `${_point}${constants_1.INSPECTOR_POINT_DELIMITER}${id}`;
}
exports.formatPoint = formatPoint;
;
//# sourceMappingURL=inspectorPoints.js.map