"use strict";
const React = require('react');
const TextField_1 = require('material-ui/TextField');
class TransformPanel extends React.Component {
    changeObject() {
    }
    render() {
        return (React.createElement("div", {className: 'button-component'}, 
            React.createElement("table", null, 
                React.createElement("tbody", null, 
                    React.createElement("tr", null, 
                        React.createElement("td", null, 
                            React.createElement("span", null, "OverFrame"), 
                            React.createElement(TextField_1.default, {id: 'overFrame', className: 'input'})), 
                        React.createElement("td", null, 
                            React.createElement("span", null, "OutFrame"), 
                            React.createElement(TextField_1.default, {id: 'outFrame', className: 'input'}))), 
                    React.createElement("tr", null, 
                        React.createElement("td", null, 
                            React.createElement("span", null, "DownFrame"), 
                            React.createElement(TextField_1.default, {id: 'downFrame', className: 'input'})), 
                        React.createElement("td", null, 
                            React.createElement("span", null, "UpFrame"), 
                            React.createElement(TextField_1.default, {id: 'upFrame', className: 'input'}))))
            )
        ));
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TransformPanel;
//# sourceMappingURL=ButtonPanel.js.map