import * as cst from '../constants';

export default {
    labelInputField: {
        root: {
            userSelect: 'none',
        },
        label: {
            display: 'inline-block',
            marginRight: 10,
            position: 'relative',
        },
    },
    menuInputField: {
        root: {
            border: '1px solid #44332e',
        },
        button: {
            border: 0,
            padding: '0 4px',
            margin: 2,
            '&:hover': {
                backgroundColor: cst.btnBackgroundColor100,
                color: cst.textColor,
            }
        },
        buttonApplyEnable: {
            color: cst.textColor5,
            '&:hover': {
                color: cst.textColor5,
            }
        },
        input: {

        },
    },
};
