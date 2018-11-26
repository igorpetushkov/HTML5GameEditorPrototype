import React from 'react';

import { connect } from '../../../helpers';
import styles from '../styles';

import FunctionsView from './functions/FunctionsView';

const ScriptsView = ({ actions = {}, styles = {}, classes, ...store }) => {
    return (
        <div className={classes.root} style={styles.root}>
            <FunctionsView />
        </div>
    );
};

export default connect('scripts', styles.scripts, ScriptsView);
