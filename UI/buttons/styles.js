import * as cst from '../constants';
import menu from '../menu/styles';

export default {
    flatButton: {
        root: {
            display: 'inline',
            border: '1px solid ' + cst.btnBorderColor,
            padding: '0 5px',
            fontWeight: 'normal',
            color: cst.textColor,
            fontSize: 11,
            minWidth: 36,
            minHeight: 27,
            '&:hover': {
                backgroundColor: cst.btnBackgroundColor100,
            },
            '&:active': {
                backgroundColor: cst.btnBackgroundColor100,
            }
        },
        icon: {
            width: 14,
            height: 14,
        },
        iconEl: {
            display: 'inline-block',
            position: 'relative',
            top: 1,
        },
        iconElWithLabel: {

        },
        labelEl: {
    
        },
        labelWithIcon: {
            display: 'inline-block',
            position: 'relative',
            top: -3,
            margin: '0 5px',
        },
        small: {
            minWidth: 26,
        },
        xsmall: {
            fontSize: 14,
            border: 1,
            color: cst.textColor,
            minWidth: 16,
            minHeight: 20,
            '&:hover': {
                backgroundColor: 'transparent',
                color: cst.textColor2,
            }
        },
        smallb0: {
            border: 0,
            padding: '0 4px',
            margin: 2,
            '&:hover': {
                backgroundColor: cst.btnBackgroundColor100,
                color: cst.textColor,
            }
        },
        selected: {
            border: '1px solid ' + cst.btnBackgroundColor800,
            backgroundColor: cst.btnBackgroundColorSelected,
            '&:hover': {
                backgroundColor: cst.btnBackgroundColorSelected,
            }
        },
        disabled: {
            borderColor: cst.btnBackgroundColor300 + ' !important',
            color: cst.btnBackgroundColor1200 + ' !important',
        },
    },
    flatButtonMenu: {
        root: {
            display: 'inline'
        },
        button: {

        },
        list: menu.contextMenu.root,
        item: menu.contextMenu.item,
    },
};