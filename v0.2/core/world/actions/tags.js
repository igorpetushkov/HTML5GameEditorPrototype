const upd = ['world.tags'];

export default {
    toggleTagsSearch: (none, state) => {
        const { search } = state.world.tags;

        search.mask = !search.mask;

        return upd;
    },

    updateTagsSearch: ({ value }, state) => {
        if (value || value.trim() === '') {
            const { search } = state.world.tags;

            search.value = value;

            return upd;
        }
    },

    selectTag: ({ key, multi = false }, state) => {
        if (key) {
            const { tags } = state.world;

            if (~tags.selectedTags.indexOf(key)) {
                if (multi) {
                    tags.selectedTags = tags.selectedTags.filter(x => x !== key);
                } else {
                    tags.selectedTags = [];
                }
            } else {
                if (multi) {
                    tags.selectedTags.push(key);
                } else {
                    tags.selectedTags = [key];
                }
            }

            return upd;
        }
    },
};