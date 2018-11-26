"use strict";
const React = require('react');
const react_redux_1 = require('react-redux');
const FlatButton_1 = require('material-ui/FlatButton');
const rotate_left_1 = require('material-ui/svg-icons/image/rotate-left');
const rotate_right_1 = require('material-ui/svg-icons/image/rotate-right');
const rotate_90_degrees_ccw_1 = require('material-ui/svg-icons/image/rotate-90-degrees-ccw');
const cached_1 = require('material-ui/svg-icons/action/cached');
const open_with_1 = require('material-ui/svg-icons/action/open-with');
const settings_ethernet_1 = require('material-ui/svg-icons/action/settings-ethernet');
const skip_next_1 = require('material-ui/svg-icons/av/skip-next');
const skip_previous_1 = require('material-ui/svg-icons/av/skip-previous');
const play_arrow_1 = require('material-ui/svg-icons/av/play-arrow');
const pause_1 = require('material-ui/svg-icons/av/pause');
const stop_1 = require('material-ui/svg-icons/av/stop');
const layers_1 = require('material-ui/svg-icons/maps/layers');
const style_1 = require('material-ui/svg-icons/image/style');
const redux_1 = require('lib/redux');
const Actions_1 = require('redux/Actions');
class SceneToolbarPanel extends React.Component {
    toggleModeMoveHandler() {
        this.props.toggleModeMove();
    }
    toggleModeScaleHandler() {
        this.props.toggleModeScale();
    }
    toggleModeRotateHandler() {
        this.props.toggleModeRotate();
    }
    toggleRotateExtraHandler(show) {
        this.refs['object-rotate-extra']['style']['display'] = show ? 'inline-block' : 'none';
    }
    rotateLeft() {
        this.props.rotateLeft();
    }
    rotateRight() {
        this.props.rotateRight();
    }
    rotate90() {
        this.props.rotate90();
    }
    playHandler() {
        this.props.playScene();
    }
    stopHandler() {
        this.props.stopScene();
    }
    pauseHandler() {
        this.props.pauseScene();
    }
    stepPrevHandler() {
        this.props.stepPrev();
    }
    stepNextHandler() {
        this.props.stepNext();
    }
    toggleLayerListHandler() {
        this.props.toggleLayerListShow();
    }
    toggleSceneListHandler() {
        this.props.toggleSceneListShow();
    }
    render() {
        const { layerName, sceneName, layerListShow, sceneListShow, moveMode, scaleMode, rotateMode, isPlayedScene, isStoppedScene, isPausedScene, } = this.props;
        const btnStyle = (isActive = false) => {
            return {
                border: isActive ? '1px solid #695E56' : '1px solid #3E474A',
                [isActive && 'backgroundColor']: '#472519',
            };
        };
        return (React.createElement("div", {className: 'toolbar'}, 
            React.createElement("div", {className: 'object-transform'}, 
                React.createElement(FlatButton_1.default, {style: btnStyle(moveMode), icon: React.createElement(open_with_1.default, null), onClick: () => this.toggleModeMoveHandler()}), 
                React.createElement(FlatButton_1.default, {style: btnStyle(scaleMode), icon: React.createElement(settings_ethernet_1.default, null), onClick: () => this.toggleModeScaleHandler()}), 
                React.createElement(FlatButton_1.default, {style: btnStyle(rotateMode), icon: React.createElement(cached_1.default, null), onClick: () => this.toggleModeRotateHandler(), onMouseEnter: () => this.toggleRotateExtraHandler(true), onMouseLeave: () => this.toggleRotateExtraHandler(false)}), 
                React.createElement("div", {ref: 'object-rotate-extra', className: 'object-rotate-extra', onMouseOver: () => this.toggleRotateExtraHandler(true), onMouseOut: () => this.toggleRotateExtraHandler(false)}, 
                    React.createElement(FlatButton_1.default, {style: btnStyle(), icon: React.createElement(rotate_left_1.default, null), onClick: () => this.rotateLeft(), onMouseLeave: () => this.toggleRotateExtraHandler(false)}), 
                    React.createElement(FlatButton_1.default, {style: btnStyle(), icon: React.createElement(rotate_right_1.default, null), onClick: (event) => this.rotateRight(), onMouseLeave: () => this.toggleRotateExtraHandler(false)}), 
                    React.createElement(FlatButton_1.default, {style: btnStyle(), icon: React.createElement(rotate_90_degrees_ccw_1.default, null), onClick: () => this.rotate90(), onMouseLeave: () => this.toggleRotateExtraHandler(false)}))), 
            React.createElement("div", {className: 'player-panel'}, 
                React.createElement(FlatButton_1.default, {style: btnStyle(false), icon: React.createElement(skip_previous_1.default, null), disabled: !isPlayedScene && !isPausedScene, onClick: () => this.stepPrevHandler()}), 
                isPausedScene || isStoppedScene ?
                    React.createElement(FlatButton_1.default, {style: btnStyle(), icon: React.createElement(play_arrow_1.default, null), onClick: () => this.playHandler()})
                    : null, 
                isPlayedScene ?
                    React.createElement(FlatButton_1.default, {style: btnStyle(isPausedScene), icon: React.createElement(pause_1.default, null), disabled: !isPlayedScene, onClick: () => this.pauseHandler()})
                    : null, 
                React.createElement(FlatButton_1.default, {style: btnStyle(false), icon: React.createElement(stop_1.default, null), disabled: !isPlayedScene && !isPausedScene, onClick: () => this.stopHandler()}), 
                React.createElement(FlatButton_1.default, {style: btnStyle(false), icon: React.createElement(skip_next_1.default, null), disabled: !isPlayedScene && !isPausedScene, onClick: () => this.stepNextHandler()})), 
            React.createElement("div", {className: 'layers-scenes'}, 
                React.createElement(FlatButton_1.default, {style: btnStyle(layerListShow), label: layerName, icon: React.createElement(layers_1.default, null), onClick: () => this.toggleLayerListHandler()}), 
                React.createElement(FlatButton_1.default, {style: btnStyle(sceneListShow), label: sceneName, icon: React.createElement(style_1.default, null), onClick: () => this.toggleSceneListHandler()}))));
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = react_redux_1.connect(state => {
    const sceneUi = state.scene;
    const sceneId = state.scene.sceneId;
    const scene = _.find(state.storage.scenes, { id: sceneId });
    let layerName = 'notfound';
    if (scene) {
        layerName = _.get(_.find(state.storage.layers, { id: scene.layer }), 'name');
    }
    return {
        layerName: layerName,
        sceneName: scene ? scene.name : 'notfound',
        layerListShow: state.scene.layerListShow,
        sceneListShow: state.scene.sceneListShow,
        moveMode: sceneUi.moveMode,
        scaleMode: sceneUi.scaleMode,
        rotateMode: sceneUi.rotateMode,
        isPlayedScene: sceneUi.playScene,
        isStoppedScene: sceneUi.stopScene,
        isPausedScene: sceneUi.pauseScene,
    };
}, dispatch => redux_1.mapDispatch(dispatch, Actions_1.SceneActions))(SceneToolbarPanel);
//# sourceMappingURL=SceneToolbarPanel.js.map