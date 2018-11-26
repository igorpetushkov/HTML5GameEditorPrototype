import React from 'react';

import { connect } from '../../../../helpers';
import styles from '../../styles';

import SceneView from '../../../scene/views/SceneView';

const RootCenterView = ({ actions = {}, styles = {}, classes, ...store }) => {
    return (
        <div className={classes.root} style={styles.root}>
            <SceneView />
        </div>
    );
};

export default connect('root.center', styles.center, RootCenterView);

