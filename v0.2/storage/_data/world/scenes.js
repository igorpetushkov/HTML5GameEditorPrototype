import layers from './layers';

const scenes = [];

scenes.push({
    key: 'scene1',
    name: 'Scene1',
    type: 'scene',
    data: {},
    meta: {
        menu: 'world.scene',
    },
    _layers: layers.slice(0, 3).map(obj => obj.key),
});

scenes.push({
    key: 'scene2',
    name: 'Scene2',
    type: 'scene',
    data: {},
    meta: {
        menu: 'world.scene',
    },
    _layers: layers.slice(3, 7).map(obj => obj.key),
});

scenes.push({
    key: 'scene3',
    name: 'Scene3',
    type: 'scene',
    data: {},
    meta: {
        menu: 'world.scene',
    },
    _layers: layers.slice(7, 11).map(obj => obj.key),
});

scenes.push({
    key: 'scene4',
    name: 'Scene4',
    type: 'scene',
    data: {},
    meta: {
        menu: 'world.scene',
    },
    _layers: layers.slice(11, 14).map(obj => obj.key),
});

scenes.push({
    key: 'scene5',
    name: 'Scene5',
    type: 'scene',
    data: {},
    meta: {
        menu: 'world.scene',
    },
    _layers: layers.slice(14, 17).map(obj => obj.key),
});

scenes.push({
    key: 'scene6',
    name: 'Scene6',
    type: 'scene',
    data: {},
    meta: {
        menu: 'world.scene',
    },
    _layers: layers.slice(17, 24).map(obj => obj.key),
});

scenes.push({
    key: 'scene7',
    name: 'Scene7',
    type: 'scene',
    data: {},
    meta: {
        menu: 'world.scene',
    },
    _layers: layers.slice(24, 27).map(obj => obj.key),
});

export default scenes;