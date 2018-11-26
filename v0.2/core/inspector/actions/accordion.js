const upd = ['inspector'];

export default {
    expand: ({ key }, state) => {
        if (key) {
            const { accordion } = state.inspector;

            if (~accordion.expanded.indexOf(key)) {
                accordion.expanded = accordion.expanded.filter(x => x !== key);
            } else {
                accordion.expanded.push(key);
            }

            return upd;
        }
    },
};