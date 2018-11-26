"use strict";
const React = require('react');
const react_redux_1 = require('react-redux');
const SceneToolbarPanel_1 = require('views/scene/panels/SceneToolbarPanel');
const CanvasPanel_1 = require('views/scene/panels/CanvasPanel');
const ScenesListPanel_1 = require('views/scene/panels/ScenesListPanel');
const LayersListPanel_1 = require('views/scene/panels/LayersListPanel');
class SceneView extends React.Component {
    render() {
        return (React.createElement("div", {className: 'scene'}, 
            React.createElement(SceneToolbarPanel_1.default, null), 
            React.createElement("div", {className: 'body'}, 
                React.createElement(CanvasPanel_1.default, null), 
                React.createElement("div", {className: !this.props.layerListShow && 'hidden'}, 
                    React.createElement(LayersListPanel_1.default, null)
                ), 
                React.createElement("div", {className: !this.props.sceneListShow && 'hidden'}, 
                    React.createElement(ScenesListPanel_1.default, null)
                ))));
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = react_redux_1.connect(state => {
    return {
        layerListShow: state.scene.layerListShow,
        sceneListShow: state.scene.sceneListShow,
    };
})(SceneView);
//# sourceMappingURL=SceneView.js.map