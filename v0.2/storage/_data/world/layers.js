const layers = [];

function getScene(i) {
    const gg = {
        scene1: [1, 4],
        scene2: [4, 8],
        scene3: [8, 12],
        scene4: [12, 15],
        scene5: [15, 18],
        scene6: [18, 25],
        scene7: [25, 28],
    };

    for (const ee in gg) {
        if (_.inRange(i, gg[ee][0], gg[ee][1])) {
            return ee;
        }
    }
}

for (let i = 1; i < 28; i++) {
    layers.push({
        key: 'layer' + i,
        name: 'Layer' + i,
        type: 'layer',
        data: {},
        meta: {
            menu: 'world.layer',
        },
        _scene: getScene(i),
    });
}

export default layers;