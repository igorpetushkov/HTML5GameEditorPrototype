const upd = ['assets.images'];

export default {
    toggleImagesSearch: (none, state) => {
        const { search } = state.assets.images;

        search.mask = !search.mask;

        return upd;
    },

    updateImagesSearch: ({ value }, state) => {
        if (value || value.trim() === '') {
            const { search } = state.assets.images;

            search.value = value;

            return upd;
        }
    },

    selectImage: ({ key, multi = false }, state) => {
        if (key) {
            const { images } = state.assets;

            if (~images.selectedImages.indexOf(key)) {
                if (multi) {
                    images.selectedImages = images.selectedImages.filter(x => x !== key);
                } else {
                    images.selectedImages = [];
                }
            } else {
                if (multi) {
                    images.selectedImages.push(key);
                } else {
                    images.selectedImages = [key];
                }
            }

            return upd;
        }
    },

    expandFolder: ({ key }, state) => {
        if (key) {
            const { folders } = state.assets;

            if (~folders.expandedFolders.indexOf(key)) {
                folders.expandedFolders = folders.expandedFolders.filter(x => x !== key);
            } else {
                folders.expandedFolders.push(key);
            }

            return upd;
        }
    },
};