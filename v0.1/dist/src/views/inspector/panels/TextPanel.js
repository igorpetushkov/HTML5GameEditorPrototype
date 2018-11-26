"use strict";
const React = require('react');
const TextField_1 = require('material-ui/TextField');
class TextPanel extends React.Component {
    changeObject() {
    }
    render() {
        return (React.createElement("div", {className: 'text-component'}, 
            React.createElement("table", null, 
                React.createElement("tbody", null, 
                    React.createElement("tr", null, 
                        React.createElement("td", null, 
                            React.createElement("span", null, "Text"), 
                            React.createElement(TextField_1.default, {id: 'text', className: 'input'}))
                    )
                )
            )
        ));
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TextPanel;
//# sourceMappingURL=TextPanel.js.map