import * as React from 'react';
import { connect } from 'react-redux';

import SceneToolbarPanel from 'views/scene/panels/SceneToolbarPanel';
import CanvasPanel from 'views/scene/panels/CanvasPanel';
import ScenesListPanel from 'views/scene/panels/ScenesListPanel';
import LayersListPanel from 'views/scene/panels/LayersListPanel';

class SceneView extends React.Component<any, any> {
    render() {
        return (
            <div className='scene'>
                <SceneToolbarPanel />
                <div className='body'>
                    <CanvasPanel />

                    <div className={!this.props.layerListShow && 'hidden'}>
                        <LayersListPanel />
                    </div>
                    <div className={!this.props.sceneListShow && 'hidden'}>
                        <ScenesListPanel />
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(state => {
    return {
        layerListShow: state.scene.layerListShow,
        sceneListShow: state.scene.sceneListShow,
    };
})(SceneView);