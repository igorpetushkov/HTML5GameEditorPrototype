/* eslint-disable react/forbid-prop-types */

import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles';
import Input from 'material-ui/Input';

import styles from './styles';

class KiInputBox extends React.Component {
    state = {
        value: this.props.value,
    }

    componentDidMount = () => {
        if (this.props.focused) {
            this.inputRef.focus();
        }
    }

    componentWillReceiveProps = nextProps => {
        if (this.state.value !== nextProps.value) {
            this.setState({ value: nextProps.value });
        }
    }

    inputRef = null;

    render() {
        const {
            inputLeftEl, inputRightEl,
            leftEl, rightEl,
            disabled, placeholder,
            actions = {}, styles = {}, classes
        } = this.props;

        return (
            <div className={classes.root} style={styles.root}>
                {leftEl ? <div className={classes.leftEl}> {leftEl}</div> : null}
                {inputLeftEl ? <div className={classes.inputLeftEl}> {inputLeftEl}</div> : null}
                <Input
                    inputRef={el => this.inputRef = el}
                    value={this.state.value}
                    placeholder={placeholder}
                    disabled={disabled}
                    onKeyPress={event => {
                        if (event.key === 'Enter' && actions.handleInputEnter) {
                            actions.handleInputEnter({ value: this.state.value });
                        }
                    }}
                    onChange={event => {
                        const value = event.target.value;

                        if (actions.validateInputChange(value)) {
                            this.setState({ value }, () => {
                                actions.handleInputChange({ value });
                            });
                        }
                    }}
                    style={styles.input}
                    classes={{
                        input: classes.input,
                        disabled: classes.disabled,
                        underline: classes.underline,
                        inkbar: classes.inkbar,
                    }}
                />
                {inputRightEl ? <div className={classes.inputRightEl}> {inputRightEl}</div> : null}
                {rightEl ? <div className={classes.rightEl}> {rightEl}</div> : null}
            </div>
        );
    }
}

KiInputBox.propTypes = {
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
        validateInputChange: PropTypes.func.isRequired,
        handleInputEnter: PropTypes.func,
    }),
    styles: PropTypes.shape({
        root: PropTypes.object,
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

export default withStyles(() => styles.inputBox)(KiInputBox);