"use strict";
const React = require('react');
const react_redux_1 = require('react-redux');
const redux_1 = require('lib/redux');
const Actions_1 = require('redux/Actions');
class LayersListPanel extends React.Component {
    changeLayer(layerId, sceneId) {
        if (layerId !== this.props.layerId) {
            this.props.changeLayer(layerId, sceneId);
        }
        else {
            this.props.toggleLayerListShow();
        }
    }
    render() {
        let { layers, layerId, sceneId } = this.props;
        layers = _.filter(layers, (layer) => {
            return _.includes(layer.scenes, sceneId);
        });
        return (React.createElement("div", {className: 'layers-list'}, 
            React.createElement("ul", null, _.map(layers, (layer) => {
                return (React.createElement("li", {key: layer.id, className: layer.id === layerId && 'selected', onClick: () => this.changeLayer(layer.id, sceneId)}, layer.name));
            }))
        ));
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = react_redux_1.connect(state => {
    const sceneId = state.scene.sceneId;
    const scene = _.find(state.storage.scenes, { id: sceneId });
    return {
        layers: state.storage.layers,
        layerId: scene ? scene.layer : 0,
        sceneId: sceneId,
    };
}, dispatch => redux_1.mapDispatch(dispatch, Actions_1.SceneActions))(LayersListPanel);
//# sourceMappingURL=LayersListPanel.js.map