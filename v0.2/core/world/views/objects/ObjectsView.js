import React from 'react';

import { KiTreeList } from 'kroppli-ui/lists';

import { connect } from '../../../../helpers';
import styles from '../../styles';

import ObjectsToolbar from './ObjectsToolbar';

const ObjectsView = ({ actions = {}, styles = {}, classes, ...store }) => {
    return (
        <div className={classes.root} style={styles.root}>
            <ObjectsToolbar />
            <KiTreeList
                folderIcons={false}
                data={store.f_treeData}
                search={store.search}
                selectedItems={store.selectedObjects}
                selectedItemLists={store.f_groupsWithSelectedItems}
                selectedLists={store.f_selectedGroups}
                expandedLists={store.f_expandedGroups}
                actions={{
                    handleSelectItem: actions.world.objects.selectObject,
                    handleSelectList: actions.world.objects.selectObjectGroup,
                    handleExpandList: actions.world.objects.expandObjectGroup,
                    handleToggleSearch: actions.world.objects.toggleObjectsSearch,
                    handleUpdateSearch: actions.world.objects.updateObjectsSearch,
                }}
                style={{ margin: '4px 0px' }}
            />
        </div>
    );
};

export default connect('world.objects', styles.objects, ObjectsView);