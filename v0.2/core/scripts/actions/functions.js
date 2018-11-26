const upd = ['scripts.functions'];

export default {
    toggleFunctionsSearch: (none, state) => {
        const { search } = state.scripts.functions;

        search.mask = !search.mask;

        return upd;
    },

    updateFunctionsSearch: ({ value }, state) => {
        if (value || value.trim() === '') {
            const { search } = state.scripts.functions;

            search.value = value;

            return upd;
        }
    },

    selectFunction: ({ key, multi = false }, state) => {
        if (key) {
            const { functions } = state.scripts;

            if (~functions.selectedFunctions.indexOf(key)) {
                if (multi) {
                    functions.selectedFunctions = functions.selectedFunctions.filter(x => x !== key);
                } else {
                    functions.selectedFunctions = [];
                }
            } else {
                if (multi) {
                    functions.selectedFunctions.push(key);
                } else {
                    functions.selectedFunctions = [key];
                }
            }

            return upd;
        }
    },

    expandFolder: ({ key }, state) => {
        if (key) {
            const { folders } = state.scripts;

            if (~folders.expandedFolders.indexOf(key)) {
                folders.expandedFolders = folders.expandedFolders.filter(x => x !== key);
            } else {
                folders.expandedFolders.push(key);
            }

            return upd;
        }
    },
};