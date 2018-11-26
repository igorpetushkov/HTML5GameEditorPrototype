export default {
    changeLeftTab: ({ key }, state) => {
        if (state.root.left.tabs.selectedTab !== key) {
            state.root.left.tabs.selectedTab = key;

            return ['root.left'];
        }
    },
};