import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';

import styles from './styles';
import icons from '../icons';

const KiFlatButton = ({ label, icon, selected, disabled, size = {}, actions = {}, styles = {}, classes }) => {
    const Icon = icons(icon);
    const clsButton = classes.root +
        (size.small ? ` ${classes.small}` : '') +
        (size.xsmall ? ` ${classes.xsmall}` : '') +
        (size.smallb0 ? ` ${classes.smallb0}` : '') +
        (selected ? ` ${classes.selected}` : '') +
        (disabled ? ` ${classes.disabled}` : '');

    const clsIconEl = classes.iconEl + 
        (label ? ` ${classes.iconElWithLabel}` : '');
    const clsLabelEl = classes.labelEl + 
        (Icon ? ` ${classes.labelWithIcon}` : '');

    return (
        <Button
            disabled={disabled}
            onClick={actions.handleClick}
            className={clsButton}
            style={styles.root}
            disableRipple
        >
            {Icon ? <div className={clsIconEl}><Icon className={classes.icon} /></div> : null}
            {label ? <div className={clsLabelEl}>{label}</div> : null}
        </Button>
    );
};

KiFlatButton.propTypes = {
    label: PropTypes.string,
    icon: PropTypes.string,
    selected: PropTypes.bool,
    disabled: PropTypes.bool,
    size: PropTypes.shape({
        small: PropTypes.bool,
        xsmall: PropTypes.bool,
        smallb0: PropTypes.bool,
    }),
    actions: PropTypes.shape({
        handleClick: PropTypes.func,
    }),
    styles: PropTypes.shape({
        root: PropTypes.object,
    }),
    classes: PropTypes.shape({
        root: PropTypes.string,
        icon: PropTypes.string,
        iconEl: PropTypes.string,
        iconElWithLabel: PropTypes.string,
        labelEl: PropTypes.string,
        labelWithIcon: PropTypes.string,
        small: PropTypes.string,
        xsmall: PropTypes.string,
        smallb0: PropTypes.string,
        selected: PropTypes.string,
    }),
};

export default withStyles(() => styles.flatButton)(KiFlatButton);