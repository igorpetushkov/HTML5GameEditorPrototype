const upd = ['scene.toolbar'];

export default {
    layers: (args, state) => {
        const { sceneLayer } = state.scene.toolbar;

        if (sceneLayer.list === 'layers') {
            sceneLayer.list = null;
        } else {
            sceneLayer.list = 'layers';
        }

        return upd;
    },

    scenes: (args, state) => {
        const { sceneLayer } = state.scene.toolbar;

        if (sceneLayer.list === 'scenes') {
            sceneLayer.list = null;
        } else {
            sceneLayer.list = 'scenes';
        }
        
        return upd;
    },
};