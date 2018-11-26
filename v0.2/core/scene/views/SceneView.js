import React from 'react';

import { connect } from '../../../helpers';
import styles from '../styles';

import SceneToolbarView from './toolbar/SceneToolbarView';
import CanvasView from './canvas/CanvasView';
import RootBottomView from '../../root/views/root/RootBottomView';

const SceneView = ({ actions = {}, styles = {}, classes, ...store }) => {
    return (
        <div className={classes.root} style={styles.root}>
            <SceneToolbarView />
            <CanvasView />
            <RootBottomView />
        </div>
    );
};

export default connect('scene', styles.scene, SceneView);
