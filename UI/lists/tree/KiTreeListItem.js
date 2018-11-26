import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles';

import styles from './styles';

const KiTreeListItem = ({ data = {}, selected, actions = {}, styles = {}, classes }) => {
    const clsItem = classes.root +
        (selected ? ` ${classes.selected}` : '');
    // (this.state.showBorderDotted && !selected ? ` ${classes.borderDotted}` : '');

    return (
        <div className={clsItem}
            style={styles.root}
            ctxm={data.meta.menu}
            onClick={event => actions.handleSelectItem({ key: data.key, multi: event.metaKey || event.ctrlKey })}
        >
            {data.name}
        </div>
    );
}

KiTreeListItem.propTypes = {
    data: PropTypes.object,
    selected: PropTypes.bool,
    actions: PropTypes.shape({
        handleSelectItem: PropTypes.func,
    }),
    styles: PropTypes.shape({
        root: PropTypes.object,
    }),
    classes: PropTypes.shape({
        root: PropTypes.string,
        selected: PropTypes.string,
        borderDotted: PropTypes.string,
    }),
};

export default withStyles(() => styles.treeListItem)(KiTreeListItem);