import {
    buildFunctionsTreeListData,
} from './helpers';

export default storage => ({
    folders: {
        storage: storage.folders,
        expandedFolders: [],
    },
    functions: {
        storage: storage.functions,
        selectedFunctions: [],
        search: {
            value: 'is: functions',
            mask: true,
        },

        f: {
            treeData: buildFunctionsTreeListData,
            expandedFolders: store => store.scripts.folders.expandedFolders,
        },
    },
});