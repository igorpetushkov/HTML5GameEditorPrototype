import React from 'react';

import { KiTextInput } from 'kroppli-ui/inputs';

import { connect } from '../../../../helpers';
import styles from '../../styles';

const TerminalInput = ({ text = '', focused, disabled, actions = {}, styles = {}, classes, ...store }) => {
    return (
        <KiTextInput
            value={text}
            leftEl={'root #'}
            focused={focused}
            disabled={disabled}
            actions={{
                handleInputChange: () => { },
                handleInputEnter: ({ value }) => {
                    actions.terminal.stack.input({ value });
                }
            }}
            classes={{
                root: classes.root,
                inkbar: classes.inkbar,
                input: classes.input,
                leftEl: classes.leftEl,
                underline: classes.underline,
                disabled: classes.disabled,
            }}

        />
    );
};

export default connect('terminal', styles.input, TerminalInput);
