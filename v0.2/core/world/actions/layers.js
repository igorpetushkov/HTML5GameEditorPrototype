const upd = ['world.layers'];

export default {
    toggleLayersSearch: (none, state) => {
        const { search } = state.world.layers;

        search.mask = !search.mask;

        return upd;
    },

    updateLayersSearch: ({ value }, state) => {
        if (value || value.trim() === '') {
            const { search } = state.world.layers;

            search.value = value;

            return upd;
        }
    },

    selectLayer: ({ key, multi = false }, state) => {
        if (key) {
            const { layers } = state.world;

            if (~layers.selectedLayers.indexOf(key)) {
                if (multi) {
                    layers.selectedLayers = layers.selectedLayers.filter(x => x !== key);
                } else {
                    layers.selectedLayers = [];
                }
            } else {
                if (multi) {
                    layers.selectedLayers.push(key);
                } else {
                    layers.selectedLayers = [key];
                }
            }

            return upd;
        }
    },

    expandScene: ({ key }, state) => {
        if (key) {
            const { layers } = state.world;

            if (~layers.expandedScenes.indexOf(key)) {
                layers.expandedScenes = layers.expandedScenes.filter(x => x !== key);
            } else {
                layers.expandedScenes.push(key);
            }

            return upd;
        }
    },
};