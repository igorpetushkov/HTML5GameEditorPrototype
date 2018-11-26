let groups = [];

for (let i = 1; i < 7; i++) {
    groups.push({
        id: i,
        key: 'GroupObject ' + ( i < 7 ? 'A' : 'B' ) + i,
        scene: i < 3 ? 1 : 2,
        hidden: false,
    });
}

export default groups;