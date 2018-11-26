export default {
    changeRightTab: ({ key }, state) => {
        if (state.root.right.tabs.selectedTab !== key) {
            state.root.right.tabs.selectedTab = key;

            return ['root.right'];
        }
    },
};