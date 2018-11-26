import * as cst from '../constants';

export default {
    inputBox: {
        root: {
            display: 'inline-block',
            border: '1px solid ' + cst.btnBackgroundColor200,
        },
        input: {
            color: cst.textColor,
            fontSize: 13,
            position: 'relative',
        },
        disabled: {
            '&:before': {
                backgroundImage: 'none !important',
            },
        },
        underline: {
            '&:before': {
                backgroundColor: 'transparent',
                bottom: -3,
            },
            '&:hover:not($disabled):before': {
                backgroundColor: 'transparent',
                height: 1,
            },

            // '&:before': {
            //     backgroundColor: '#686868',
            //     bottom: -3,
            // },
            // '&:hover:not($disabled):before': {
            //     backgroundColor: '#686868',
            //     height: 1,
            // }
        },
        inkbar: {
            padding: 4,
            '&:after': {
                backgroundColor: 'transparent',
                height: 1,
                bottom: -3,
            },

            // '&:after': {
            //     backgroundColor: '#878787',
            //     height: 1,
            //     bottom: -3,
            // }
        },
        inputLeftEl: {
            display: 'inline-block',
            position: 'relative',
            left: 4,
        },
        inputRightEl: {
            display: 'inline-block',
            position: 'relative',
            right: 4,
        },
        leftEl: {
            display: 'inline-block',
            position: 'relative',
            borderRight: '1px solid ' + cst.btnBackgroundColor600,
            padding: '2px 4px',
            fontSize: '12px',
            color: '#776661',
        },
        rightEl: {
            display: 'inline-block',
            position: 'relative',
            borderLeft: '1px solid ' + cst.btnBackgroundColor600,
            padding: '2px 4px',
            fontSize: '12px',
            color: '#776661',
        },
    },
    textInput: {
        root: {
            display: 'inline-block',
        },
        input: {
            color: cst.textColor,
        },
        disabled: {},
        underline: {},
        inkbar: {},
        inputLeftEl: {},
        inputRightEl: {},
        leftEl: {},
        rightEl: {},

    },
    numberInput: {
        root: {
            display: 'inline-block',
        },
        input: {
            color: cst.textColor,
        },
        disabled: {},
        underline: {},
        inkbar: {},
        inputLeftEl: {},
        inputRightEl: {},
        leftEl: {},
        rightEl: {},
        plusMinusButton: {
            display: 'grid',
            height: 14,
            position: 'relative',
            top: 1,
            marginTop: -1,
            marginLeft: 4,
            color: cst.textColor,
        },
        plusMinusButtonEl: {
            height: 5,
        },
        plusButtonIcon: {
            width: 9,
            height: 9,
            position: 'relative',
            top: -5,
            '&:hover': {
                backgroundColor: cst.btnBackgroundColor200,
                borderRadius: 1,
                cursor: 'pointer',
            },
        },
        minusButtonIcon: {
            width: 9,
            height: 9,
            position: 'relative',
            top: -2,
            '&:hover': {
                backgroundColor: cst.btnBackgroundColor200,
                borderRadius: 1,
                cursor: 'pointer',
            },
        }
    },
};