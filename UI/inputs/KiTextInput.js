/* eslint-disable react/forbid-prop-types */

import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles';

import KiInputBox from './KiInputBox';
import styles from './styles';

class KiTextInput extends React.Component {
    state = {
        value: this.props.value,
    }

    render() {
        const {
            inputLeftEl,
            inputRightEl,
            leftEl, rightEl,
            focused, disabled, placeholder,
            actions = {}, styles = {}, classes
        } = this.props;

        return (
            <KiInputBox
                value={this.state.value}
                inputLeftEl={inputLeftEl}
                inputRightEl={inputRightEl}
                leftEl={leftEl}
                rightEl={rightEl}
                focused={focused}
                disabled={disabled}
                placeholder={placeholder}
                actions={{
                    handleInputChange: ({ value }) => this.setState({ value }, () => actions.handleInputChange({ value })),
                    validateInputChange: () => true,
                    handleInputEnter: actions.handleInputEnter,
                }}
                styles={styles}
                classes={{
                    root: classes.root,
                    input: classes.input,
                    disabled: classes.disabled,
                    underline: classes.underline,
                    inkbar: classes.inkbar,
                    inputLeftEl: classes.inputLeftEl,
                    inputRightEl: classes.inputRightEl,
                    leftEl: classes.leftEl,
                    rightEl: classes.rightEl,
                }}
            />
        );
    }
}

KiTextInput.propTypes = {
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
    inputLeftEl: PropTypes.any,
    inputRightEl: PropTypes.any,
    leftEl: PropTypes.any,
    rightEl: PropTypes.any,
    focused: PropTypes.bool,
    disabled: PropTypes.bool,
    placeholder: PropTypes.string,
    actions: PropTypes.shape({
        handleInputChange: PropTypes.func.isRequired,
        handleInputEnter: PropTypes.func,
    }),
    styles: PropTypes.shape({
        root: PropTypes.object,
        input: PropTypes.object,
    }),
    classes: PropTypes.shape({
        root: PropTypes.string,
        input: PropTypes.string,
        disabled: PropTypes.string,
        underline: PropTypes.string,
        inkbar: PropTypes.string,
        inputLeftEl: PropTypes.string,
        inputRightEl: PropTypes.string,
        leftEl: PropTypes.string,
        rightEl: PropTypes.string,
    }),
};

export default withStyles(() => styles.textInput)(KiTextInput);