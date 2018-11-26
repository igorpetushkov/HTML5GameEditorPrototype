import * as React from 'react';
import { connect } from 'react-redux';

import { mapDispatch } from 'lib/redux';
import { IUiStorage } from 'interfaces';
import { SceneActions } from 'redux/Actions';

class LayersListPanel extends React.Component<any, void> {
    changeLayer(layerId: number, sceneId: number) {
        if (layerId !== this.props.layerId) {
            this.props.changeLayer(layerId, sceneId);
        } else {
            this.props.toggleLayerListShow();
        }
    }

    render() {
        let { layers, layerId, sceneId } = this.props;

        layers = _.filter(layers, (layer: IUiStorage.Layer ) => {
            return _.includes(layer.scenes, sceneId);
        });

        return (
            <div className='layers-list'>
                <ul>
                    {_.map(layers, (layer: IUiStorage.Layer) => {
                        return (
                            <li key={layer.id} className={layer.id === layerId && 'selected'}
                                onClick={() => this.changeLayer(layer.id, sceneId)} >
                                {layer.name}
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

export default connect(state => {
    const sceneId = state.scene.sceneId;
    const scene = _.find(state.storage.scenes, {id: sceneId}) as IUiStorage.Scene;

    return {
        layers: state.storage.layers,
        layerId: scene ? scene.layer : 0,
        sceneId: sceneId,
    };
}, dispatch => mapDispatch(dispatch, SceneActions))
(LayersListPanel);