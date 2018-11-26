import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles';

import { KiFlatButton, KiFlatButtonMenu } from '../buttons';
import styles from './styles';

class KiMenuInputField extends React.Component {
    state = {
        inputValue: '22', //this.props.input.value,
    }

    render() {
        const { input = {}, icons = {}, actions = {}, styles = {}, classes } = this.props;

        const InputComponent = input.component;

        return (
            <div className={classes.root} style={styles.root}>
                <KiFlatButtonMenu
                    icon={icons.menu}
                    size={{
                        xsmall: true,
                    }}
                    classes={{
                        button: classes.button,
                    }}
                />
                <InputComponent {...input.props} />
                <KiFlatButton
                    icon={icons.apply}
                    size={{
                        xsmall: true,
                    }}
                    actions={{
                        // handleClick: () => actions.handleApply({ value: this.state.inputValue }),
                    }}
                    classes={{
                        root: classes.button + (this.state.inputValue === input.value ? '' : ` ${classes.buttonApplyEnable}`),
                    }}
                />
                <KiFlatButton
                    icon={icons.close}
                    size={{
                        xsmall: true,
                    }}
                    actions={{
                        handleClick: actions.handleClose,
                    }}
                    classes={{
                        root: classes.button,
                    }}
                />
            </div>
        );
    }
}

KiMenuInputField.propTypes = {
    input: PropTypes.shape({
        component: PropTypes.any,
        props: PropTypes.object,
    }),
    icons: PropTypes.shape({
        menu: PropTypes.string.isRequired,
        apply: PropTypes.string.isRequired,
        close: PropTypes.string.isRequired,
    }),
    actions: PropTypes.shape({
        handleMenuOpen: PropTypes.func,
        handleMenuClose: PropTypes.func,
        handleApply: PropTypes.func,
        handleClose: PropTypes.func,
    }),
    styles: PropTypes.shape({
        root: PropTypes.object,
    }),
    classes: PropTypes.shape({
        root: PropTypes.string,
        menu: PropTypes.string,
        button: PropTypes.string,
        buttonApplyEnable: PropTypes.string,
    }),
};

export default withStyles(() => styles.menuInputField)(KiMenuInputField);