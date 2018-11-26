import React from 'react';

import { KiTreeList } from 'kroppli-ui/lists';

import { connect } from '../../../../helpers';
import styles from '../../styles';

const ImagesView = ({ actions = {}, styles = {}, classes, ...store }) => {
    return (
        <div className={classes.root} style={styles.root}>
            <KiTreeList
                folderIcons={true}
                data={store.f_treeData}
                search={store.search}
                selectedItems={store.selectedImages}
                expandedLists={store.f_expandedFolders}
                actions={{
                    handleSelectItem: actions.assets.images.selectImage,
                    handleSelectList: () => { },
                    handleExpandList: actions.assets.images.expandFolder,
                    handleToggleSearch: actions.assets.images.toggleImagesSearch,
                    handleUpdateSearch: actions.assets.images.updateImagesSearch,
                }}
                styles={{
                    root: { margin: 0 },
                }}
            />
        </div>
    );
};

export default connect('assets.images', styles.images, ImagesView);