import objects from './objects';

export default [
    {
        key: 'world',
        name: 'World',
        type: 'group',
        data: {},
        meta: {
            menu: 'world.groups',
        },
        _objects: objects.slice(0, 19).map(obj => obj.key),
        _group: null,
        _groups: [],
    },
    {
        key: 'group1',
        name: 'Group1',
        type: 'group',
        data: {},
        meta: {
            menu: 'world.groups',
        },
        _objects: objects.slice(19, 26).map(obj => obj.key),
        _group: null,
        _groups: [],
    },
    {
        key: 'group2',
        name: 'Group2',
        type: 'group',
        data: {},
        meta: {
            menu: 'world.groups',
        },
        _objects: objects.slice(26, 34).map(obj => obj.key),
        _group: null,
        _groups: [],
    },
    {
        key: 'group3',
        name: 'Group3',
        type: 'group',
        data: {},
        meta: {
            menu: 'world.groups',
        },
        _objects: objects.slice(34, 54).map(obj => obj.key),
        _group: null,
        _groups: [
            'group11'
        ],
    },
    {
        key: 'group4',
        name: 'Group4',
        type: 'group',
        data: {},
        meta: {
            menu: 'world.groups',
        },
        _objects: [],
        _group: null,
        _groups: [
            'group5',
            'group6',
        ]
    },
    {
        key: 'group5',
        name: 'Group5',
        type: 'group',
        data: {},
        meta: {
            menu: 'world.groups',
        },
        _objects: objects.slice(54, 61).map(obj => obj.key),
        _group: 'group4',
        _groups: [],
    },
    {
        key: 'group6',
        name: 'Group6',
        type: 'group',
        data: {},
        meta: {
            menu: 'world.groups',
        },
        _objects: objects.slice(61, 73).map(obj => obj.key),
        _group: 'group4',
        _groups: [],
    },
    {
        key: 'group7',
        name: 'Group7',
        type: 'group',
        data: {},
        meta: {
            menu: 'world.groups',
        },
        _objects: [],
        _group: null,
        _groups: [
            'group8',
        ],
    },
    {
        key: 'group8',
        name: 'Group8',
        type: 'group',
        data: {},
        meta: {
            menu: 'world.groups',
        },
        _objects: objects.slice(73, 78).map(obj => obj.key),
        _group: 'group7',
        _groups: [
            'group14'
        ],
    },
    {
        key: 'group9',
        name: 'Group9',
        type: 'group',
        data: {},
        meta: {
            menu: 'world.groups',
        },
        _objects: [],
        _group: null,
        _groups: [
            'group10',
        ]
    },
    {
        key: 'group10',
        name: 'Group10',
        type: 'group',
        data: {},
        meta: {
            menu: 'world.groups',
        },
        _objects: objects.slice(78, 83).map(obj => obj.key),
        _group: 'group9',
        _groups: [],
    },
    {
        key: 'group11',
        name: 'Group11',
        type: 'group',
        data: {},
        meta: {
            menu: 'world.groups',
        },
        _objects: objects.slice(86, 90).map(obj => obj.key),
        _group: 'group3',
        _groups: [
            'group12'
        ],
    },
    {
        key: 'group12',
        name: 'Group12',
        type: 'group',
        meta: {
            menu: 'world.groups',
        },
        data: {},
        _objects: [],
        _group: 'group11',
        _groups: [
            'group13'
        ],
    },
    {
        key: 'group13',
        name: 'Group13',
        type: 'group',
        meta: {
            menu: 'world.groups',
        },
        data: {},
        _objects: [],
        _group: 'group12',
        _groups: [],
    },
    {
        key: 'group14',
        name: 'Group14',
        type: 'group',
        meta: {
            menu: 'world.groups',
        },
        data: {},
        _objects: [],
        _group: 'group8',
        _groups: [],
    },
];