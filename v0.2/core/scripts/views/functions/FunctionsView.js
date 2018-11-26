import React from 'react';

import { KiTreeList } from 'kroppli-ui/lists';

import { connect } from '../../../../helpers';
import styles from '../../styles';

const FunctionsView = ({ actions = {}, styles = {}, classes, ...store }) => {
    return (
        <div className={classes.root} style={styles.root}>
            <KiTreeList
                folderIcons={true}
                data={store.f_treeData}
                search={store.search}
                selectedItems={store.selectedFunctions}
                expandedLists={store.f_expandedFolders}
                actions={{
                    handleSelectItem: actions.scripts.functions.selectFunction,
                    handleSelectList: () => { },
                    handleExpandList: actions.scripts.functions.expandFolder,
                    handleToggleSearch: actions.scripts.functions.toggleFunctionsSearch,
                    handleUpdateSearch: actions.scripts.functions.updateFunctionsSearch,
                }}
                styles={{
                    root: { margin: 0 },
                }}
            />
        </div>
    );
};

export default connect('scripts.functions', styles.functions, FunctionsView);