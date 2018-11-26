import React from 'react';

import { KiSelect } from 'kroppli-ui/selects';
import { KiFlatButton, KiFlatButtonMenu } from 'kroppli-ui/buttons';

import { connect } from '../../../../helpers';
import styles from '../../styles';

const ObjectsToolbar = ({ actions = {}, styles = {}, classes, ...store }) => {
    return (
        <div className={classes.root} style={styles.root}>
            <KiFlatButtonMenu
                label={'#'}
                size={{
                    small: true,
                }}
                classes={{
                    button: `${classes.buttonLeft} ${classes.buttonMenu}`,
                }}
            />
            <KiSelect
                actions={{
                    handleChange: () => { debugger; }
                }}
                classes={{
                    root: classes.dropdown,
                }}
            />
            <KiFlatButton
                label={'OBJ'}
                actions={{
                    handleClick: () => { },
                }}
                classes={{
                    root: `${classes.buttonRight} ${classes.buttonMenu}`,
                }}
            />
            <KiFlatButton
                label={'GRP'}
                actions={{
                    handleClick: () => { },
                }}
                classes={{
                    root: `${classes.buttonRight} ${classes.buttonMenu}`,
                }}
            />
        </div>
    );
};

export default connect('', styles.objects.toolbar, ObjectsToolbar);