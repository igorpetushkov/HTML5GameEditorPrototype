import React from 'react';

import TerminalInput from './input/TerminalInput';
import TerminalOutput from './output/TerminalOutput';

import { connect } from '../../../helpers';
import styles from '../styles';

const TerminalView = ({ messages = [], actions = {}, styles = {}, classes, ...store }) => {
    return (
        <div className={classes.root} style={styles.root}>
            {store.stack.map((message, index) => {
                return [
                    <TerminalInput key={`input-${index}`} text={message[0]} disabled={true} />,
                    <TerminalOutput key={`output-${index}`} text={message[1]} />
                ];
            })}
            <TerminalInput focused={true} />
        </div>
    );
};

export default connect('terminal', styles.terminal, TerminalView);
