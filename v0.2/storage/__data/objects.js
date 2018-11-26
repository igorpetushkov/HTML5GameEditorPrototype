const objects = [];

const components = {
    [3]: {
        data: {
            imageId: 7,
            frame: 0,
            smoothed: true,
        },
        options: [0, 0, 0],
    },
    [9]: {
        data: {
            text: 'text1',
        },
        options: [0, 0, 0],
    },
};

for (let i = 1; i < 41; i++) {
    objects.push({
        id: i,
        name: 'GameObject  ' + i,
        width: 200,
        height: 200,
        position: {x: 200 + (i * 5), y: 200 + (i * 5)},
        anchor: {x: 0.5, y: 0.5},
        scene: i < 20 ? 1 : (i < 30 ? 2 : 3),
        layer: 1,
        scale: {x: 1, y: 1},
        rotate: 0,
        group: i < 4 ? 1 : (i < 9 ? 2 : 0),
        tags: i < 13 ? [1, 2 , 3 , 4 , 5] : [1, 4, 5],
        hidden: i === 4 || i === 7 ? true : false,
        locked: i === 11,
        components: i === 11 || i === 12 ? components : null,
    });
}

export default objects;