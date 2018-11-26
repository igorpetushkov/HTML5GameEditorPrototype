"use strict";
const React = require('react');
const react_redux_1 = require('react-redux');
const redux_1 = require('lib/redux');
const Actions_1 = require('redux/Actions');
class ScenesListPanel extends React.Component {
    changeScene(sceneId) {
        if (sceneId !== this.props.sceneId) {
            this.props.changeScene(sceneId);
        }
        else {
            this.props.toggleSceneListShow();
        }
    }
    render() {
        const { scenes, sceneId } = this.props;
        return (React.createElement("div", {className: 'scenes-list'}, 
            React.createElement("ul", null, _.map(scenes, (scene) => {
                return (React.createElement("li", {key: scene.id}, 
                    React.createElement("img", {title: scene.name, src: scene.image, style: {
                        borderColor: scene.id === sceneId ? '#d1b19a' : '',
                        opacity: scene.id === sceneId ? 0.9 : 0.7,
                    }, onClick: () => this.changeScene(scene.id)})
                ));
            }))
        ));
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = react_redux_1.connect(state => {
    return {
        scenes: state.storage.scenes,
        sceneId: state.scene.sceneId,
    };
}, dispatch => redux_1.mapDispatch(dispatch, Actions_1.SceneActions))(ScenesListPanel);
//# sourceMappingURL=ScenesListPanel.js.map