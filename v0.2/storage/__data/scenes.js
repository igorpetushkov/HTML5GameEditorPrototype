let scenes = [];

for (let i = 1; i < 6; i++) {
    scenes.push({
        id: i,
        name: 'Scene ' + i,
        layer: i,
        image: './app/images/' + (i < 3 ? 'FalloutTactics.jpg' : '1234.png'),
    });
}

export default scenes;