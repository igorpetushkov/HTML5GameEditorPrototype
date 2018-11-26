import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles';

import KiAccordionHeader from './KiAccordionHeader';
import styles from './styles';

const KiAccordionItem = ({ data = {}, expanded = false, actions = {}, styles = {}, classes }) => {
    return (
        <div className={classes.root} style={styles.root}>
            <KiAccordionHeader
                label={data.key}
                expanded={expanded}
                actions={{
                    handleClick: () => actions.handleExpand({ key: data.key }),
                }}
            />
            {expanded ? <div className={classes.content} style={styles.content}>{data.content || 'Empty'}</div> : null}

        </div>
    );
};

KiAccordionItem.propTypes = {
    data: PropTypes.shape({
        key: PropTypes.string,
        content: PropTypes.any,
    }),
    expanded: PropTypes.bool,
    actions: PropTypes.shape({
        handleExpand: PropTypes.func.isRequired,
    }),
    styles: PropTypes.shape({
        root: PropTypes.object,
    }),
    classes: PropTypes.shape({
        root: PropTypes.string,
        content: PropTypes.string,
    }),
};

export default withStyles(() => styles.item)(KiAccordionItem);