import images from './images';

export default [
    {
        key: 'root',
        name: 'Root',
        type: 'folder',
        data: {},
        meta: {
            menu: 'assets.folders',
        },
        _images: images.slice(0, 19).map(img => img.key),
        _folder: null,
        _folders: [],
    },
    {
        key: 'folder1',
        name: 'folder1',
        type: 'folder',
        data: {},
        meta: {
            menu: 'assets.folders',
        },
        _images: images.slice(19, 26).map(img => img.key),
        _folder: null,
        _folders: [],
    },
    {
        key: 'folder2',
        name: 'folder2',
        type: 'folder',
        data: {},
        meta: {
            menu: 'assets.folders',
        },
        _images: images.slice(26, 34).map(img => img.key),
        _folder: null,
        _folders: [],
    },
    {
        key: 'folder3',
        name: 'folder3',
        type: 'folder',
        data: {},
        meta: {
            menu: 'assets.folders',
        },
        _images: images.slice(34, 54).map(img => img.key),
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
            menu: 'assets.folders',
        },
        _images: [],
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
            menu: 'assets.folders',
        },
        _images: images.slice(54, 61).map(img => img.key),
        _folder: 'group4',
        _folders: [],
    },
    {
        key: 'folder6',
        name: 'folder6',
        type: 'folder',
        data: {},
        meta: {
            menu: 'assets.folders',
        },
        _images: images.slice(61, 73).map(img => img.key),
        _folder: 'group4',
        _folders: [],
    },
    {
        key: 'folder7',
        name: 'folder7',
        type: 'folder',
        data: {},
        meta: {
            menu: 'assets.folders',
        },
        _images: [],
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
            menu: 'assets.folders',
        },
        _images: images.slice(73, 78).map(img => img.key),
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
            menu: 'assets.folders',
        },
        _images: [],
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
            menu: 'assets.folders',
        },
        _images: images.slice(78, 83).map(img => img.key),
        _folder: 'group9',
        _folders: [],
    },
    {
        key: 'folder11',
        name: 'folder11',
        type: 'folder',
        data: {},
        meta: {
            menu: 'assets.folders',
        },
        _images: images.slice(86, 90).map(img => img.key),
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
            menu: 'assets.folders',
        },
        data: {},
        _images: [],
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
            menu: 'assets.folders',
        },
        data: {},
        _images: [],
        _folder: 'group12',
        _folders: [],
    },
    {
        key: 'folder14',
        name: 'folder14',
        type: 'folder',
        meta: {
            menu: 'assets.folders',
        },
        data: {},
        _images: [],
        _folder: 'group8',
        _folders: [],
    },
];