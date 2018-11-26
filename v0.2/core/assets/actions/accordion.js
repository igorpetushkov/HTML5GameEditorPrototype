const upd = ['assets'];

export default {
    expand: ({ key }, state) => {
        const { accordion } = state.assets;

        if (key && !~accordion.expanded.indexOf(key)) {
            accordion.expanded = [key];

            return upd;
        }
    },
};