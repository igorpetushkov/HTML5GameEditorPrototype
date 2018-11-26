"use strict";
const React = require('react');
const MenuItem_1 = require('material-ui/MenuItem');
const DropDownMenu_1 = require('material-ui/DropDownMenu');
function default_1(props) {
    return (React.createElement(DropDownMenu_1.default, {value: 1, onChange: (event, index, value) => props.changeAction(_.toInteger(value)), className: `dropdown ${props.className}`, menuStyle: { width: props.width, maxWidth: props.width, maxHeight: props.maxHeight || 300 }}, _.map(props.items, (item) => {
        return React.createElement(MenuItem_1.default, {value: item.id, key: item.id, primaryText: item.name});
    })));
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
//# sourceMappingURL=DropDownField.js.map