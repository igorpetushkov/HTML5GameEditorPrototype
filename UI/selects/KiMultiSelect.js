import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles';
import Input from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';
import { FormControl } from 'material-ui/Form';
import Select from 'material-ui/Select';

import styles from './styles';

class KiSelect extends React.Component {
    state = {
        age: 10,
        name: 'Ten',
    };

    handleChange = name => event => {
        this.setState({ [name]: event.target.value });
    };

    render() {
        const { actions = {}, styles = {}, classes } = this.props;

        return (
            <FormControl className={classes.root} style={styles.root}>
                <Select
                    value={this.state.age}
                    onChange={this.handleChange('age')}
                    input={
                        <Input
                            classes={{
                                root: classes.inputRoot,
                                underline: classes.inputUnderline,
                                inkbar: classes.inputInkbar,
                            }}
                        />
                    }
                    classes={{
                        root: classes.selectRoot,
                        select: classes.select,
                        selectMenu: classes.selectMenu,
                        icon: classes.selectIcon,
                    }}
                    MenuProps={{
                        classes: {
                            root: classes.menuRoot,
                        }
                    }}
                >
                    <MenuItem value={10} onClick={this.handleClose} className={classes.menuItem} disableRipple>Profile</MenuItem>
                    <MenuItem value={20} className={classes.menuItem} disableRipple>My account</MenuItem>
                    <MenuItem value={30} className={classes.menuItem} disableRipple>Logout</MenuItem>
                </Select>
            </FormControl>
        );
    }
}

KiSelect.propTypes = {
    actions: PropTypes.shape({
        handleChange: PropTypes.func,
    }),
    styles: PropTypes.shape({
        root: PropTypes.object,
    }),
    classes: PropTypes.shape({
        root: PropTypes.string,
        select: PropTypes.string,
        selectRoot: PropTypes.string,
        selectMenu: PropTypes.string,
        selectIcon: PropTypes.string,
        disabled: PropTypes.string,
        inputRoot: PropTypes.string,
        inputUnderline: PropTypes.string,
        inputInkbar: PropTypes.string,
        menuRoot: PropTypes.string,
        menuItem: PropTypes.string,
    }),
};

export default withStyles(() => styles.select)(KiSelect);