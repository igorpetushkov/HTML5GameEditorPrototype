import React from 'react';

import SceneToolbarPositions from './SceneToolbarPositions';
import SceneToolbarPlayer from './SceneToolbarPlayer';
import SceneToolbarSceneLayer from './SceneToolbarSceneLayer';
import SceneToolbarSceneLayerPanel from './SceneToolbarSceneLayerPanel';

import { connect } from '../../../../helpers';
import styles from '../../styles';

const SceneToolbarView = ({ actions = {}, styles = {}, classes, ...store }) => {
    return (
        <div className={classes.root} style={{ ...styles.root, height: store.dmns.height }}>
            <SceneToolbarPositions />
            <SceneToolbarPlayer />
            <SceneToolbarSceneLayer />
            {store.sceneLayer.list ? <SceneToolbarSceneLayerPanel /> : null}
        </div>
    );
}

export default connect('scene.toolbar', styles.toolbar, SceneToolbarView);

