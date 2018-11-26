import React from 'react';

import { connect } from '../../../helpers';
import styles from '../styles';

const ProfilerView = ({ actions = {}, styles = {}, classes, ...store }) => {
   
    return (
        <div className={classes.root} style={styles.root}>
            profiler
        </div>
    );
};

export default connect('profiler', styles.profiler, ProfilerView);
