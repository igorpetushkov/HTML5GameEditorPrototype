let images = [];

for (let i = 1; i < 9; i++) {
    images.push({
        id: i,
        name: 'Asset' + i,
        url: 'build/images/icon.png',
    });
}

for (let i = 9; i < 13; i++) {
    images.push({
        id: i,
        name: 'Asset' + i,
        url: 'build/icon.png',
    });
}

for (let i = 13; i < 17; i++) {
    images.push({
        id: i,
        name: 'Asset' + i,
        url: 'build2/folder1/folder2/icon.png',
    });
}

for (let i = 17; i < 24; i++) {
    images.push({
        id: i,
        name: 'Asset' + i,
        url: 'build2/folder2/icon.png',
    });
}

for (let i = 24; i < 31; i++) {
    images.push({
        id: i,
        name: 'Asset' + i,
        url: 'build2/folder2/folder3/icon.png',
    });
}

for (let i = 31; i < 40; i++) {
    images.push({
        id: i,
        name: 'Asset' + i,
        url: 'build2/folder5/folder6/folder7/icon.png',
    });
}

for (let i = 40; i < 50; i++) {
    images.push({
        id: i,
        name: 'Asset' + i,
        url: 'build2/folder8/folder9/folder10/folder11/icon.png',
    });
}

for (let i = 50; i < 60; i++) {
    images.push({
        id: i,
        name: 'Asset' + i,
        url: 'icon.png',
    });
}

for (let i = 60; i < 64; i++) {
    images.push({
        id: i,
        name: 'Asset' + i,
        url: 'build2/folder8/icon.png',
    });
}

export default images;