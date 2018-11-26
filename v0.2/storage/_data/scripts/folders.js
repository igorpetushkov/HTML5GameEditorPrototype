import functions from './functions';

export default [
    {
        key: 'root',
        name: 'Root',
        type: 'folder',
        data: {},
        meta: {
            menu: 'scripts.folders',
        },
        _functions: functions.slice(0, 19).map(func => func.key),
        _folder: null,
        _folders: [],
    },
    {
        key: 'folder1',
        name: 'folder1',
        type: 'folder',
        data: {},
        meta: {
            menu: 'scripts.folders',
        },
        _functions: functions.slice(19, 26).map(func => func.key),
        _folder: null,
        _folders: [],
    },
    {
        key: 'folder2',
        name: 'folder2',
        type: 'folder',
        data: {},
        meta: {
            menu: 'scripts.folders',
        },
        _functions: functions.slice(26, 34).map(func => func.key),
        _folder: null,
        _folders: [],
    },
    {
        key: 'folder3',
        name: 'folder3',
        type: 'folder',
        data: {},
        meta: {
            menu: 'scripts.folders',
        },
        _functions: functions.slice(34, 54).map(func => func.key),
        _folder: null,
        _folders: [
            'group11'
        ],
    },
    {
        key: 'folder4',
        name: 'folder4',
        type: 'folder',
        data: {},
        meta: {
            menu: 'scripts.folders',
        },
        _functions: [],
        _folder: null,
        _folders: [
            'group5',
            'group6',
        ]
    },
    {
        key: 'folder5',
        name: 'folder5',
        type: 'folder',
        data: {},
        meta: {
            menu: 'scripts.folders',
        },
        _functions: functions.slice(54, 61).map(func => func.key),
        _folder: 'group4',
        _folders: [],
    },
    {
        key: 'folder6',
        name: 'folder6',
        type: 'folder',
        data: {},
        meta: {
            menu: 'scripts.folders',
        },
        _functions: functions.slice(61, 73).map(func => func.key),
        _folder: 'group4',
        _folders: [],
    },
    {
        key: 'folder7',
        name: 'folder7',
        type: 'folder',
        data: {},
        meta: {
            menu: 'scripts.folders',
        },
        _functions: [],
        _folder: null,
        _folders: [
            'group8',
        ],
    },
    {
        key: 'folder8',
        name: 'folder8',
        type: 'folder',
        data: {},
        meta: {
            menu: 'scripts.folders',
        },
        _functions: functions.slice(73, 78).map(func => func.key),
        _folder: 'group7',
        _folders: [
            'group14'
        ],
    },
    {
        key: 'folder9',
        name: 'folder9',
        type: 'folder',
        data: {},
        meta: {
            menu: 'scripts.folders',
        },
        _functions: [],
        _folder: null,
        _folders: [
            'group10',
        ]
    },
    {
        key: 'folder10',
        name: 'folder10',
        type: 'folder',
        data: {},
        meta: {
            menu: 'scripts.folders',
        },
        _functions: functions.slice(78, 83).map(func => func.key),
        _folder: 'group9',
        _folders: [],
    },
    {
        key: 'folder11',
        name: 'folder11',
        type: 'folder',
        data: {},
        meta: {
            menu: 'scripts.folders',
        },
        _functions: functions.slice(86, 90).map(func => func.key),
        _folder: 'group3',
        _folders: [
            'group12'
        ],
    },
    {
        key: 'folder12',
        name: 'folder12',
        type: 'folder',
        meta: {
            menu: 'scripts.folders',
        },
        data: {},
        _functions: [],
        _folder: 'group11',
        _folders: [
            'group13'
        ],
    },
    {
        key: 'folder13',
        name: 'folder13',
        type: 'folder',
        meta: {
            menu: 'scripts.folders',
        },
        data: {},
        _functions: [],
        _folder: 'group12',
        _folders: [],
    },
    {
        key: 'folder14',
        name: 'folder14',
        type: 'folder',
        meta: {
            menu: 'scripts.folders',
        },
        data: {},
        _functions: [],
        _folder: 'group8',
        _folders: [],
    },
];