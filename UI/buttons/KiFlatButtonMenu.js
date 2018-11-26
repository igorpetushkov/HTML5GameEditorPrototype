import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles';
import Menu, { MenuItem } from 'material-ui/Menu';

import KiFlatButton from './KiFlatButton';
import styles from './styles';

class KiFlatButtonMenu extends React.Component {
    state = {
        anchorEl: null,
        open: false,
    };

    handleMenuOpen = event => {
        this.setState({ open: true, anchorEl: event.currentTarget }, () => _.invoke(this.props.actions, 'handleMenuOpen'));
    };

    handleMenuClose = () => {
        this.setState({ open: false }, () => _.invoke(this.props.actions, 'handleMenuClose'));
    };

    render() {
        const { label, icon, disabled, size = {}, styles = {}, classes } = this.props;

        return (
            <div className={classes.root} style={styles.root}>
                <KiFlatButton
                    label={label}
                    icon={icon}
                    size={size}
                    disabled={disabled}
                    actions={{
                        handleClick: this.handleMenuOpen,
                    }}
                    styles={{
                        root: styles.button,
                    }}
                    classes={{
                        root: classes.button,
                    }}
                />
                <Menu
                    anchorEl={this.state.anchorEl}
                    open={this.state.open}
                    onRequestClose={this.handleMenuClose}
                    MenuListProps={{
                        classes: {
                            root: classes.list,
                        }
                    }}
                >
                    <MenuItem onClick={this.handleMenuClose} className={classes.item} disableRipple>Profile</MenuItem>
                    <MenuItem className={classes.item} disableRipple>My account</MenuItem>
                    <MenuItem className={classes.item} disableRipple>Logout</MenuItem>
                </Menu >
            </div>
        );
    }
}

KiFlatButtonMenu.propTypes = {
    label: PropTypes.node,
    icon: PropTypes.string,
    size: PropTypes.shape({
        small: PropTypes.bool,
        xsmall: PropTypes.bool,
    }),
    disabled: PropTypes.bool,
    actions: PropTypes.shape({
        handleMenuOpen: PropTypes.func,
        handleMenuClose: PropTypes.func,
    }).isRequired,
    styles: PropTypes.shape({
        root: PropTypes.object,
        button: PropTypes.object,
    }),
    classes: PropTypes.shape({
        root: PropTypes.string,
        button: PropTypes.string,
        list: PropTypes.string,
        item: PropTypes.string,
    }),
};

KiFlatButtonMenu.defaultProps = {
    meta: {},
    style: {},
    actions: {}
};

export default withStyles(() => styles.flatButtonMenu)(KiFlatButtonMenu);