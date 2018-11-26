const upd = ['terminal'];

export default {
    input: ({ value }, state) => {
        const { terminal } = state;

        terminal.input = value;

        return upd;
    },
};