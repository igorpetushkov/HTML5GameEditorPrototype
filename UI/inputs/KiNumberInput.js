/* eslint-disable react/forbid-prop-types */

import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles';

import KiInputBox from './KiInputBox';
import styles from './styles';
import icons from '../icons';

class KiNumberInput extends React.Component {
    state = {
        value: this.props.value,
    }

    handleNumberChange = isPlus => {
        this.updateValue(isPlus ? this.state.value + 1 : this.state.value - 1);
    }

    updateValue = value => {
        this.setState({ value: +value }, () => this.props.actions.handleInputChange({ value: +value }));
    }

    render() {
        const { 
            inputLeftEl,
            leftEl, rightEl,
            disabled,
            actions = {}, styles = {}, classes
        } = this.props;

        const PlusIcon = icons('add');
        const MinusIcon = icons('remove');

        const inputRightEl = this.props.inputRightEl || (
            <div className={classes.plusMinusButton}>
                <div className={classes.plusMinusButtonEl}>
                    <PlusIcon className={classes.plusButtonIcon} onClick={() => this.handleNumberChange(true)} />
                </div>
                <div className={classes.plusMinusButtonEl}>
                    <MinusIcon className={classes.minusButtonIcon} onClick={() => this.handleNumberChange(false)} />
                </div>
            </div>
        );

        return (
            <KiInputBox
                value={this.state.value}
                inputLeftEl={inputLeftEl}
                inputRightEl={inputRightEl}
                leftEl={leftEl}
                rightEl={rightEl}
                disabled={disabled}
                actions={{
                    handleInputChange: ({ value }) => this.updateValue(value),
                    validateInputChange: value => !_.isNaN(+value),
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

KiNumberInput.propTypes = {
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
    inputLeftEl: PropTypes.any,
    inputRightEl: PropTypes.any,
    leftEl: PropTypes.any,
    rightEl: PropTypes.any,
    disabled: PropTypes.bool,
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
        plusMinusButton: PropTypes.string,
        plusMinusButtonEl: PropTypes.string,
        plusButtonIcon: PropTypes.string,
        minusButtonIcon: PropTypes.string,
    }),
};

export default withStyles(() => styles.numberInput)(KiNumberInput);