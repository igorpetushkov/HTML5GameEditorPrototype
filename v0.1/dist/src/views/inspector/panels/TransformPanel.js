"use strict";
const React = require('react');
const TextField_1 = require('material-ui/TextField');
class TransformPanel extends React.Component {
    changeScene() {
    }
    render() {
        return (React.createElement("div", {className: 'transform-component'}, 
            React.createElement("table", null, 
                React.createElement("tbody", null, 
                    React.createElement("tr", {className: 'dimensions'}, 
                        React.createElement("td", null, "W/H"), 
                        React.createElement("td", null, 
                            React.createElement("span", null, "Height"), 
                            React.createElement(TextField_1.default, {id: 'height', className: 'input'})), 
                        React.createElement("td", null, 
                            React.createElement("span", null, "Width"), 
                            React.createElement(TextField_1.default, {id: 'width', className: 'input'}))), 
                    React.createElement("tr", {className: 'position'}, 
                        React.createElement("td", null, "Position"), 
                        React.createElement("td", null, 
                            React.createElement("span", null, "Y"), 
                            React.createElement(TextField_1.default, {id: 'position-y', className: 'input'})), 
                        React.createElement("td", null, 
                            React.createElement("span", null, "X"), 
                            React.createElement(TextField_1.default, {id: 'position-x', className: 'input'}))), 
                    React.createElement("tr", {className: 'anchor'}, 
                        React.createElement("td", null, "Anchor"), 
                        React.createElement("td", null, 
                            React.createElement("span", null, "Y"), 
                            React.createElement(TextField_1.default, {id: 'anchor-y', className: 'input'})), 
                        React.createElement("td", null, 
                            React.createElement("span", null, "X"), 
                            React.createElement(TextField_1.default, {id: 'anchor-x', className: 'input'}))), 
                    React.createElement("tr", {className: 'scale'}, 
                        React.createElement("td", null, "Scale"), 
                        React.createElement("td", null, 
                            React.createElement("span", null, "Y"), 
                            React.createElement(TextField_1.default, {id: 'scale-y', className: 'input'})), 
                        React.createElement("td", null, 
                            React.createElement("span", null, "X"), 
                            React.createElement(TextField_1.default, {id: 'scale-x', className: 'input'}))), 
                    React.createElement("tr", {className: 'rotation'}, 
                        React.createElement("td", null, "Rotation"), 
                        React.createElement("td", null), 
                        React.createElement("td", null, 
                            React.createElement(TextField_1.default, {id: 'scale-x', className: 'input'})
                        )))
            )
        ));
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TransformPanel;
//# sourceMappingURL=TransformPanel.js.map