const upd = ['world.scenes'];

export default {
    toggleScenesSearch: (none, state) => {
        const { search } = state.world.scenes;

        search.mask = !search.mask;

        return upd;
    },

    updateScenesSearch: ({ value }, state) => {
        if (value || value.trim() === '') {
            const { search } = state.world.scenes;

            search.value = value;

            return upd;
        }
    },

    selectScene: ({ key }, state) => {
        if (key) {
            const { scenes } = state.world;

            if (scenes.selectedScene === key) {
                scenes.selectedScene = '';
            } else {
                scenes.selectedScene = key;
            }

            return upd;
        }
    },
};