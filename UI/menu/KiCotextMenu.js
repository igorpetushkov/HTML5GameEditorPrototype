import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles';
import Menu, { MenuItem } from 'material-ui/Menu';

import styles from './styles';

class KiCotextMenu extends React.Component {
    state = {
        open: false,
        leftX: 0,
        topX: 0,
        menuKey: null,
    };

    componentDidMount = () => document.addEventListener('contextmenu', this.handleContextMenu);

    menu = null;

    handleContextMenu = (event) => {
        if (!window.menu) return;

        event.preventDefault();

        const key = event.target.getAttribute('ctxm');
        const pkey = event.target.parentNode.getAttribute('ctxm');

        if (key || pkey) {
            this.setState({
                open: true,
                leftX: event.clientX,
                topX: event.clientY + 10,
                menuKey: key || pkey,
            });
        }
    };

    handleMenuClose = () => {
        this.setState({ open: false, leftX: 0, topX: 0 });
    };

    render() {
        const { menu, actions = {}, styles = {}, classes } = this.props;
        const menuStyle = {
            ...styles.root,
            left: this.state.leftX,
            top: this.state.topX,
        };

        const menuKey = this.state.menuKey;
        const menuData = _.get(menu, menuKey);
        const menuActions = _.get(actions, menuKey);

        return (
            <div className={classes.menuEl} style={menuStyle} ref={el => this.menu = el} >
                {menuKey && menuData ?
                    <Menu
                        anchorEl={this.menu}
                        open={this.state.open}
                        onRequestClose={this.handleMenuClose}
                        MenuListProps={{
                            classes: {
                                root: `${classes.root} ${classes.menu}`,
                            },
                        }}
                    >
                        {menuData(menuActions).map((menu, index) => {
                            return (
                                <MenuItem
                                    key={index}
                                    onClick={event => {
                                        menu.action();
                                        this.handleMenuClose();
                                    }}
                                    className={`${classes.item} ${classes.menuItem}`}
                                    disableRipple
                                >
                                    {menu.label}
                                </MenuItem>
                            );
                        })}
                    </Menu > : null}
            </div>
        );
    }
}

KiCotextMenu.propTypes = {
    menu: PropTypes.object.isRequired,
    actions: PropTypes.object,
    styles: PropTypes.shape({
        root: PropTypes.object,
    }),
    classes: PropTypes.shape({
        root: PropTypes.string,
        item: PropTypes.string,
        menuEl: PropTypes.string,
        menu: PropTypes.string,
        menuItem: PropTypes.string,
    }),
};

export default withStyles(() => styles.contextMenu)(KiCotextMenu);