export default {
    changeBottomTab: ({ key }, state) => {
        if (state.root.bottom.tabs.selectedTab !== key) {
            state.root.bottom.tabs.selectedTab = key;

            return ['root.bottom'];
        }
    },
};