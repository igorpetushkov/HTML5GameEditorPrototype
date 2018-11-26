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
        items: this.props.multiple ? [10, 20, 40, 50, 60] : 10,
    };

    // rerenderOptions = () => {
    //     debugger;
    //     const selects = document.getElementsByClassName('KiSelectMultiple');

    //     _.toArray(selects).forEach(select => {
    //         debugger;
    //         const options = select.firstElementChild.firstElementChild.innerText.split(',');
    //         select.firstElementChild.firstElementChild.innerHTML = "<span style='background-color: red'>text sokie</span>";
    //     });
    // }

    handleChange = name => event => {
        this.setState({ [name]: event.target.value }, () => {
            
        });
    };

    render() {
        const { multiple, actions = {}, styles = {}, classes } = this.props;

        return (
            <FormControl className={classes.root} style={styles.root}>
                <Select
                    // className={multiple ? 'KiSelectMultiple' : ''}
                    multiple={multiple}
                    value={this.state.items}
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
                        select: classes.select + (multiple ? ` ${classes.selectMultiple}` : ''),
                        selectMenu: classes.selectMenu,
                        icon: classes.selectIcon,
                    }}
                    MenuProps={{
                        classes: {
                            paper: classes.menuRoot,
                        }
                    }}
                >
                    <MenuItem value={10} onClick={this.handleClose} className={classes.menuItem} disableRipple
                        classes={{
                            selected: classes.menuItemSelected,
                        }}
                    >Profile</MenuItem>
                    <MenuItem value={20} className={classes.menuItem} disableRipple
                        classes={{
                            selected: classes.menuItemSelected,
                        }}
                    >My account</MenuItem>
                    <MenuItem value={30} className={classes.menuItem} disableRipple>Logout1</MenuItem>
                    <MenuItem value={40} className={classes.menuItem} disableRipple
                        classes={{
                            selected: classes.menuItemSelected,
                        }}
                    >Logout2</MenuItem>
                    <MenuItem value={50} className={classes.menuItem} disableRipple
                        classes={{
                            selected: classes.menuItemSelected,
                        }}
                    >Logout3</MenuItem>
                    <MenuItem value={60} className={classes.menuItem} disableRipple>Logout4</MenuItem>
                    <MenuItem value={70} className={classes.menuItem} disableRipple>Logout5</MenuItem>
                </Select>
            </FormControl>
        );
    }
}

KiSelect.propTypes = {
    multiple: PropTypes.bool,
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