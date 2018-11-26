import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles';

import KiTreeListItem from './KiTreeListItem';
import KiTreeListSearch from './KiTreeListSearch';
import styles from './styles';
import icons from '../../icons';

const KiTreeList = ({ 
    folderIcons = false,
    data = {}, search = {}, selectedItems = [], selectedItemLists = [], selectedLists = [], expandedLists = [],
    actions = {}, styles = {}, classes
}) => {
    function renderTree(tree, level = 0) {
        return tree.map((it, index) => {
            if (it.items) {
                const selected = !!~selectedLists.indexOf(it.key);
                const expanded = !!~expandedLists.indexOf(it.key);

                const clsList = classes.list +
                    (selected ? ` ${classes.selected}` : '') +
                    (expanded || ~selectedItemLists.indexOf(it.key) ? ` ${classes.expanded}` : '');

                return (
                    <div key={index} className={clsList} style={{ marginLeft: level ? 1 : 0 }}>
                        {renderTreeLabel(it, selected, expanded)}

                        {expanded && !_.isEmpty(it.lists) ?
                            renderTree(it.lists, level + 1, expanded).filter(x => x)
                            : null}

                        {expanded ?
                            it.items.length ?
                                it.items.map((item, index) => renderItem(item, index))
                                : <div className={classes.empty}>#empty</div>
                            : null}
                    </div>
                );
            } else {
                return renderItem(it, index);
            }
        });
    }

    function renderTreeLabel(list, selected, expanded) {
        const clsLabel = classes.label +
            (selected ? ` ${classes.labelSelected}` : '') +
            (~selectedItemLists.indexOf(list.key) ? ` ${classes.labelHasSelectedItem}` : '');

        const clsLabelIcon = classes.labelIcon +
            (selected ? ` ${classes.labelIconSelected}` : '');

        let labelIconStr = '';
        if (selected) {
            if (folderIcons) {
                labelIconStr = expanded ? 'first-page' : 'last-page';
            } else {
                labelIconStr = expanded ? 'view-list' : 'view-stream';
            }
        } else {
            if (folderIcons) {
                labelIconStr = expanded ? 'chevron-left' : 'chevron-right';
            } else {
                labelIconStr = expanded ? 'view-carousel' : 'view-column';
            }
        }
        const LabelIcon = icons(labelIconStr);

        return (
            <div className={classes.labelAndIcon} ctxm={list.meta.menu} onClick={event => {
                (typeof event.target.className === 'string' ? actions.handleExpandList : actions.handleSelectList)({ key: list.key });
            }}>
                <div className={classes.labelIconDiv}>
                    <LabelIcon className={clsLabelIcon}/>
                </div>
                <div className={clsLabel}>
                    {list.name}
                </div>
            </div>
        );
    }

    function renderItem(item, index) {
        return <KiTreeListItem
            key={`${item.key}-${index}`}
            data={item}
            selected={!!~selectedItems.indexOf(item.key)}
            actions={{
                handleSelectItem: actions.handleSelectItem,
            }}
        />;
    }

    return (
        <div className={classes.root} style={styles.root}>
            {search ?
                <KiTreeListSearch
                    search={search}
                    actions={{
                        handleToggleSearch: actions.handleToggleSearch,
                        handleUpdateSearch: actions.handleUpdateSearch,
                    }}
                /> : null}
            <div className={classes.rootList}>
                {renderTree(data)}
            </div>
        </div>
    );
};

KiTreeList.propTypes = {
    folderIcons: PropTypes.bool,
    data: PropTypes.array,
    search: PropTypes.object,
    selectedItems: PropTypes.array,
    selectedItemLists: PropTypes.array,
    selectedLists: PropTypes.array,
    expandedLists: PropTypes.array,
    actions: PropTypes.shape({
        handleSelectItem: PropTypes.func,
        handleSelectList: PropTypes.func,
        handleExpandList: PropTypes.func,

        handleToggleSearch: PropTypes.func,
        handleUpdateSearch: PropTypes.func,
    }),
    styles: PropTypes.shape({
        root: PropTypes.object,
    }),
    classes: PropTypes.shape({
        root: PropTypes.string,
        rootList: PropTypes.string,
        list: PropTypes.string,
        empty: PropTypes.string,
        selected: PropTypes.string,
        expanded: PropTypes.string,
        label: PropTypes.string,
        labelSelected: PropTypes.string,
        labelIcon: PropTypes.string,
        labelIconDiv: PropTypes.string,
        labelAndIcon: PropTypes.string,
        labelIconSelected: PropTypes.string,
        labelHasSelectedItem: PropTypes.string,
    }),
};

export default withStyles(() => styles.treeList)(KiTreeList);