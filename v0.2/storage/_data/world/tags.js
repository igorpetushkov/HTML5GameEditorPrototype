import objects from './objects';

const tags = [];

for (let i = 1; i < 3; i++) {
    tags.push({
        key: 'tag' + i,
        name: 'Tag' + i,
        type: 'tag',
        data: {},
        meta: {
            menu: 'world.tag',
        },
        _objects: objects.slice(0, 7).map(obj => obj.key),
    });
}

for (let i = 3; i < 7; i++) {
    tags.push({
        key: 'tag' + i,
        name: 'Tag' + i,
        type: 'tag',
        data: {},
        meta: {
            menu: 'world.tag',
        },
        _objects: objects.slice(2, 17).map(obj => obj.key),
    });
}

for (let i = 7; i < 12; i++) {
    tags.push({
        key: 'tag' + i,
        name: 'Tag' + i,
        type: 'tag',
        data: {},
        meta: {
            menu: 'world.tag',
        },
        _objects: objects.slice(4, 20).map(obj => obj.key),
    });
}

for (let i = 12; i < 23; i++) {
    tags.push({
        key: 'tag' + i,
        name: 'Tag' + i,
        type: 'tag',
        data: {},
        meta: {
            menu: 'world.tag',
        },
        _objects: objects.slice(13, 30).map(obj => obj.key),
    });
}

export default tags;