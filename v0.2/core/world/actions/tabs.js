export default {
    changeWorldTab: ({ key }, state) => {
        const { tabs } = state.world;

        if (tabs.selectedTab !== key) {
            tabs.selectedTab = key;

            return ['world'];
        }
    },
};