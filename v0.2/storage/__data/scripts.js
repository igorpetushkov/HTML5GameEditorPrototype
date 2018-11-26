let scripts = [];

for (let i = 1; i < 9; i++) {
    scripts.push({
        id: i,
        name: 'Script' + i,
        url: 'test1/test2/script' + i,
    });
}

for (let i = 9; i < 13; i++) {
    scripts.push({
        id: i,
        name: 'Script' + i,
        url: 'test1/test3/script' + i,
    });
}

for (let i = 13; i < 17; i++) {
    scripts.push({
        id: i,
        name: 'Script' + i,
        url: 'script' + i,
    });
}

export default scripts;