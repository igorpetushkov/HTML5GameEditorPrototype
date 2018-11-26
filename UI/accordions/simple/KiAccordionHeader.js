import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles';

import { KiFlatButton } from '../../buttons';
import styles from './styles';

const KiAccordionHeader = ({ label, expanded, actions = {}, styles = {}, classes }) => {
    const clsRoot = classes.root + 
        (expanded ? ` ${classes.rootExpanded}` : '');

    const clsButton = classes.button + 
        (expanded ? ` ${classes.buttonExpanded}` : '');

    return (
        <div className={clsRoot} style={styles.root} onClick={actions.handleClick}>
            <KiFlatButton 
                label={label}
                classes={{
                    root: clsButton,
                }}
            />
        </div>
    );
};

KiAccordionHeader.propTypes = {
    label: PropTypes.string,
    expanded: PropTypes.bool,
    actions: PropTypes.shape({
        handleClick: PropTypes.func.isRequired,
    }),
    styles: PropTypes.shape({
        root: PropTypes.object,
    }),
    classes: PropTypes.shape({
        root: PropTypes.string,
        rootExpanded: PropTypes.string,
        button: PropTypes.string,
        buttonExpanded: PropTypes.string,
    }),
};

export default withStyles(() => styles.header)(KiAccordionHeader);