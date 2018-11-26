function getFolder(i) {
    const gg = {
        root: [1, 20],
        folder1: [20, 27],
        folder2: [27, 35],
        folder3: [35, 55],
        folder5: [55, 62],
        folder6: [62, 74],
        folder8: [74, 79],
        folder9: [79, 84],
        folder10: [84, 87],
        folder11: [87, 91],
        folder12: [91, 94],
        folder13: [94, 101],
    };

    for (const ee in gg) {
        if (_.inRange(i, gg[ee][0], gg[ee][1])) {
            return ee;
        }
    }
}

const images = [];

for (let i = 1; i < 100; i++) {
    images.push({
        key: 'image' + i,
        name: 'Image ' + i,
        type: 'image',
        data: {},
        meta: {
            menu: 'assets.images',
        },
        _folder: getFolder(i),
    });
}

export default images;