function getGroup(i) {
    const gg = {
        world: [1, 20],
        group1: [20, 27],
        group2: [27, 35],
        group3: [35, 55],
        group5: [55, 62],
        group6: [62, 74],
        group8: [74, 79],
        group9: [79, 84],
        group10: [84, 87],
        group11: [87, 91],
        group12: [91, 94],
        group13: [94, 101],
    };

    for (const ee in gg) {
        if (_.inRange(i, gg[ee][0], gg[ee][1])) {
            return ee;
        }
    }
}

function getTags(i) {
    const tt = {
        tag1: [0, 7],
        tag2: [0, 7],
        
        tag3: [2, 17],
        tag4: [2, 17],
        tag5: [2, 17],
        tag6: [2, 17],

        tag7: [4, 20],
        tag8: [4, 20],
        tag9: [4, 20],
        tag10: [4, 20],
        tag11: [4, 20],

        tag12: [13, 30],
        tag13: [13, 30],
        tag14: [13, 30],
        tag15: [13, 30],
        tag16: [13, 30],
        tag17: [13, 30],
        tag18: [13, 30],
        tag19: [13, 30],
    };

    const rr = [];
    
    for (const ee in tt) {
        if (_.inRange(i, tt[ee][0], tt[ee][1])) {
            rr.push(ee);
        }
    }

    return rr;
}


const objects = [];

for (let i = 1; i < 100; i++) {
    objects.push({
        key: 'gameobject' + i,
        name: 'GameObject ' + i,
        type: 'object',
        data: {
            width: 200,
            height: 200,
            position: {x: 200 + (i * 5), y: 200 + (i * 5)},
            anchor: {x: 0.5, y: 0.5},
            scale: {x: 1, y: 1},
            rotate: 0,
            // scene: i < 20 ? 1 : (i < 30 ? 2 : 3),
            // layer: 1,
            // group: i < 4 ? 1 : (i < 9 ? 2 : 0),
            // tags: i < 13 ? [1, 2 , 3 , 4 , 5] : [1, 4, 5],
            // hidden: i === 4 || i === 7 ? true : false,
            // locked: i === 11,
            // components: i === 11 || i === 12 ? components : null,
        },
        meta: {
            menu: 'world.objects',
        },
        _group: getGroup(i),
        _tags: getTags(i),
    });
}

export default objects;