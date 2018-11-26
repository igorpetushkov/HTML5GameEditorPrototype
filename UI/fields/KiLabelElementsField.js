import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles';

import styles from './styles';

const KiLabelElementsField = ({ label, elements = [], styles = {}, classes }) => {
    return (
        <div className={classes.root} style={styles.root}>
            <div className={classes.label}>
                {label}
            </div>
            {elements.map((element, index) => {
                const Element = element.component;

                return (
                    <Element key={index} {...element.props} />
                );
            })}
            
        </div>
    );
};

KiLabelElementsField.propTypes = {
    label: PropTypes.string,
    elements: PropTypes.arrayOf(PropTypes.shape({
        component: PropTypes.any,
        props: PropTypes.object,
    })),
    styles: PropTypes.shape({
        root: PropTypes.object,
    }),
    classes: PropTypes.shape({
        root: PropTypes.string,
        label: PropTypes.string,
    }),
};

export default withStyles(() => styles.labelInputField)(KiLabelElementsField);