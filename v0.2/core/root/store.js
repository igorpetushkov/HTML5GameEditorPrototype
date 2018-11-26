export default storage => ({
    left: {
        dmns: {
            width: 350,
            minWidth: 250,
            maxWidth: 600,
        },
        tabs: {
            selectedTab: 'objects',
        },
    },
    right: {
        dmns: {
            width: 450,
            minWidth: 300,
            maxWidth: 700,
        },
        tabs: {
            selectedTab: 'inspector',
        },
    },
    center: {
        
    },
    bottom: {
        dmns: {
            height: 'calc(100% - 415px)',
            minHeight: 100,
            maxHeight: 400,
        },
        tabs: {
            selectedTab: 'terminal',
        },

        f: {
            scene: store => store.scene,
        }
    },
});