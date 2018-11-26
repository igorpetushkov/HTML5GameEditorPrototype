import {
    buildImagesTreeListData,
} from './helpers';

export default storage => ({
    accordion: {
        expanded: ['images'],
    },

    folders: {
        storage: storage.folders,
        selectedFolders: [],
        expandedFolders: [],
    },

    images: {
        storage: storage.images,
        search: {
            value: 'is: images',
            mask: true,
        },
        selectedImages: [],

        f: {
            treeData: buildImagesTreeListData,
            expandedFolders: store => store.assets.folders.expandedFolders,
        }
    },
    tilemaps: {
        storage: [],
        search: {
            value: 'is: tilemaps',
            mask: true,
        },
        selectedTilemaps: [],
    }
});