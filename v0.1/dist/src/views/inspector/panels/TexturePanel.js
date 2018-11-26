"use strict";
const React = require('react');
const TextField_1 = require('material-ui/TextField');
const Checkbox_1 = require('material-ui/Checkbox');
const DropDownField_1 = require('views/inspector/common/DropDownField');
class TexturePanel extends React.Component {
    changeScene(sceneId) {
        // this.props.changeObject(_.assign(this.props.data, {
        //     imageId: '',
        //     frame: 0,
        //     smoothed: true, 
        // }));
    }
    render() {
        const data = this.props.data;
        return (React.createElement("div", {className: 'texture-component'}, 
            React.createElement("table", null, 
                React.createElement("tbody", null, 
                    React.createElement("tr", null, 
                        React.createElement("td", null, "Image"), 
                        React.createElement("td", null, 
                            React.createElement(DropDownField_1.default, {items: data['images'], changeAction: this.changeScene, width: '231px', className: 'dropdown-images'})
                        )), 
                    React.createElement("tr", null, 
                        React.createElement("td", null, "Frame"), 
                        React.createElement("td", null, 
                            React.createElement(Checkbox_1.default, {label: 'Smoothed', className: 'checkbox'}), 
                            React.createElement(TextField_1.default, {id: 'frame-id', className: 'input'}))))
            )
        ));
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TexturePanel;
//# sourceMappingURL=TexturePanel.js.map