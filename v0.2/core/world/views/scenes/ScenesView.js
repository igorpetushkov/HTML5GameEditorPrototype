import React from 'react';

import { KiTreeList } from 'kroppli-ui/lists';

import { connect } from '../../../../helpers';
import styles from '../../styles';

const ScenesView = ({ actions = {}, styles = {}, classes, ...store }) => {
    return (
        <div className={classes.root} style={styles.root}>
            <KiTreeList
                folderIcons={false}
                data={store.storage}
                search={store.search}
                selectedItems={[store.selectedScene]}
                actions={{
                    handleSelectItem: actions.world.scenes.selectScene,
                    handleToggleSearch: actions.world.scenes.toggleScenesSearch,
                    handleUpdateSearch: actions.world.scenes.updateScenesSearch,
                }}
                styles={{
                    root: { margin: 0 },
                }}
            />
        </div>
    );
};

export default connect('world.scenes', styles.scenes, ScenesView);