const upd = ['world.objects'];

export default {
    toggleObjectsSearch: (none, state) => {
        const { search } = state.world.objects;

        search.mask = !search.mask;

        return upd;
    },

    updateObjectsSearch: ({ value }, state) => {
        if (value || value.trim() === '') {
            const { search } = state.world.objects;

            search.value = value;

            return upd;
        }
    },

    selectObject: ({ key, multi = false }, state) => {
        if (key) {
            const { objects, groups } = state.world;

            if (~objects.selectedObjects.indexOf(key)) {
                if (multi) {
                    objects.selectedObjects = objects.selectedObjects.filter(x => x !== key);
                } else {
                    objects.selectedObjects = [];
                }
            } else {
                if (multi) {
                    objects.selectedObjects.push(key);
                } else {
                    objects.selectedObjects = [key];
                }

                groups.selectedGroups = [];
            }

            return upd;
        }
    },

    selectObjectGroup: ({ key, multi = false }, state) => {
        if (key) {
            const { objects, groups } = state.world;

            if (~groups.selectedGroups.indexOf(key)) {
                if (multi) {
                    groups.selectedGroups = groups.selectedGroups.filter(x => x !== key);
                } else {
                    groups.selectedGroups = [];
                }
            } else {
                if (multi) {
                    groups.selectedGroups.push(key);
                } else {
                    groups.selectedGroups = [key];
                }

                objects.selectedObjects = [];
            }

            return upd;
        }
    },

    expandObjectGroup: ({ key }, state) => {
        if (key) {
            const { groups } = state.world;

            if (~groups.expandedGroups.indexOf(key)) {
                groups.expandedGroups = groups.expandedGroups.filter(x => x !== key);
            } else {
                groups.expandedGroups.push(key);
            }

            return upd;
        }
    },
};