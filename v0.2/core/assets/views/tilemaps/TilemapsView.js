import React from 'react';

import { connect } from '../../../../helpers';
import styles from '../../styles';

const TilemapsView = ({ actions = {}, styles = {}, classes, ...store }) => {
    const data = [

    ];

    return (
        <div className={classes.root}>
            tilemaps
        </div>
    );
};

export default connect('assets.tilemaps', styles.tilemaps, TilemapsView);