let tags = [];

for (let i = 1; i < 30; i++) {
    tags.push({
        id: i,
        name: 'Tadafa ' + ( i < 7 ? 'A' : 'B' ) + i,
    });
}

export default tags;