let layers = [];

const names = ['All layers', 'Water', 'Ground', 'Underground', 'Players', 'Destroyable'];

names.forEach((name, index) => {
    layers.push({
        id: index + 1,
        name: name,
        scenes: [1, 2, 3, 4],
    });
});

export default layers;