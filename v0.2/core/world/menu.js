const objects = actions => ([
    {
        label: 'Itemmmmmmm1',
        action: () => {
            debugger;
            actions.selectObject('12');
        },
    },
    {
        label: 'Itemmmmmmm2',
        action: () => {
            debugger;
        },
    },
    {
        label: 'Itemmmmmmm3',
        action: () => {
            debugger;
        },
    }
]);

const groups = actions => ([
    {
        label: 'Item111',
        action: () => {
            debugger;
            actions.selectGroup('12');
        },
    },
    {
        label: 'Item222',
        action: () => {
            debugger;
        },
    },
    {
        label: 'Item333',
        action: () => {
            debugger;
        },
    }
]);

export default {
    objects,
    groups,
};