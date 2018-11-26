import React from 'react';

import { connect } from '../../../../helpers';
import styles from '../../styles';

const CanvasView = ({ actions = {}, styles = {}, classes, ...store }) => {
    return (
        <div className={classes.root} style={{ ...styles.root, height: store.dmns.height }} id='canvas'>
            <div id='game1'>&nbsp;</div>
        </div>
    );
};

export default connect('scene.canvas', styles.canvas, CanvasView);

