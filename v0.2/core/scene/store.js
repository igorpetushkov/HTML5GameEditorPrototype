export default storage => ({
    toolbar: {
        dmns: {
            height: 29,
        },
        positions: {
            move: false,
            scale: false,
            rotate: false,
            rotateLeft: false,
            rotateRight: false,
            rotate90: false,
        },
        player: {
            pre: false,
            play: true,
            pause: false,
            stop: false,
            next: false,
        },
        sceneLayer: {
            list: null,
        },
        sceneLayerPanel: {
            scenesList: storage.scenes.map(scene => _.pick(scene, ['key', 'name'])),
            layersList: storage.layers.map(layer => _.pick(layer, ['key', 'name'])),
        },

        f: {
            selectedLayers: store => store.world.layers.selectedLayers,
            selectedScene: store => store.world.scenes.selectedScene,
        },
    },
    canvas: {
        dmns: {
            height: 'calc(100% - 300px)',
        },
        playMode: 'play', // pause, stop
    },
});