import React from 'react';

import { KiTreeList } from 'kroppli-ui/lists';

import { connect } from '../../../../helpers';
import styles from '../../styles';

const LayersView = ({ actions = {}, styles = {}, classes, ...store }) => {
    return (
        <div className={classes.root} style={styles.root}>
            <KiTreeList
                folderIcons={true}
                data={store.f_treeData}
                search={store.search}
                selectedItems={store.selectedLayers}
                selectedItemLists={store.f_scenesWithSelectedLayers}
                expandedLists={store.expandedScenes}
                actions={{
                    handleSelectItem: actions.world.layers.selectLayer,
                    handleSelectList: actions.world.layers.expandScene,
                    handleExpandList: actions.world.layers.expandScene,
                    handleToggleSearch: actions.world.layers.toggleLayersSearch,
                    handleUpdateSearch: actions.world.layers.updateLayersSearch,
                }}
                styles={{
                    root: { margin: 0 },
                }}
            />
        </div>
    );
};

export default connect('world.layers', styles.layers, LayersView);