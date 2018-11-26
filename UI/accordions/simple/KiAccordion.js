import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles';

import KiAccordionItem from './KiAccordionItem';
import styles from './styles';

const KiAccordion = ({ data = [], expandedKeys, actions = {}, styles = {}, classes }) => {
    return (
        <div className={classes.root} style={styles.root}>
            {data.map((item, index) => {
                return (
                    <KiAccordionItem
                        key={index}
                        expanded={!!~expandedKeys.indexOf(item.key)}
                        data={item}
                        actions={{
                            handleExpand: actions.handleExpandItem,
                        }}
                        styles={item.styles}
                    />
                );
            })}
        </div>
    );
};

KiAccordion.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        key: PropTypes.string,
        content: PropTypes.any,
        expanded: PropTypes.bool,
    })),
    expandedKeys: PropTypes.arrayOf(PropTypes.string),
    actions: PropTypes.shape({
        handleExpandItem: PropTypes.func.isRequired,
    }),
    styles: PropTypes.shape({
        root: PropTypes.object,
    }),
    classes: PropTypes.shape({
        root: PropTypes.string,
    }),
};

export default withStyles(() => styles.accordion)(KiAccordion);