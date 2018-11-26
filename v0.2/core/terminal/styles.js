import * as cst from 'kroppli-ui/constants';

export default {
    terminal: {
        root: {
            fontFamily: 'monospace',
            height: '100%',
            width: '100%',
        },
    },
    input: {
        root: {
            border: 0,
            fontSize: 13,
            width: '100%',
            cursor: 'text',
        },
        disabled: {},
        underline: {},
        inkbar: {
            padding: '1px 4px',
            fontFamily: 'monospace',

            // backgroundColor: 'green',
            width: '93%',
        },
        input: {
            cursor: 'text',
        },
        leftEl: {
            fontSize: 13,
            color: 'darkgrey',
            borderRight: 0,
        },
    },
    output: {
        root: {
            fontSize: 13,
        },
        message: {
            padding: '1px 4px',
        },
    },
};