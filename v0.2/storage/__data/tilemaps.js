let tilemaps = [];

for (let i = 1; i < 6; i++) {
    tilemaps.push({
        id: i,
        name: 'tilemap' + i,
        url: 'url1/url2/tilemap' + i,
    });
}

for (let i = 6; i < 14; i++) {
    tilemaps.push({
        id: i,
        name: 'tilemap' + i,
        url: 'url1/url3/tilemap' + i,
    });
}

for (let i = 14; i < 21; i++) {
    tilemaps.push({
        id: i,
        name: 'tilemap' + i,
        url: 'tilemap' + i,
    });
}

export default tilemaps;