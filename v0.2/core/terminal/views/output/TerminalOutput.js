import React from 'react';

import { connect } from '../../../../helpers';
import styles from '../../styles';

const TerminalOutput = ({ text = '', actions = {}, styles = {}, classes, ...store }) => {
    return (
        <div className={classes.root} style={styles.root}>
            <div className={classes.message}>
                {text}
            </div>
        </div>
    );
};

export default connect('terminal', styles.output, TerminalOutput);
