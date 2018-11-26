import React from 'react';

import { KiTreeList } from 'kroppli-ui/lists';

import { connect } from '../../../../helpers';
import styles from '../../styles';

const TagsView = ({ actions = {}, styles = {}, classes, ...store }) => {
    return (
        <div className={classes.root} style={styles.root}>
            <KiTreeList
                folderIcons={false}
                data={store.storage}
                search={store.search}
                selectedItems={store.selectedTags}
                actions={{
                    handleSelectItem: actions.world.tags.selectTag,
                    handleToggleSearch: actions.world.tags.toggleTagsSearch,
                    handleUpdateSearch: actions.world.tags.updateTagsSearch,
                }}
                styles={{
                    root: { margin: 0 },
                }}
            />
        </div>
    );
};

export default connect('world.tags', styles.tags, TagsView);