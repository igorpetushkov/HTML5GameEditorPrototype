import * as cst from '../constants';
import menu from '../menu/styles';

export default {
    select: {
        root: {
            border: '1px solid ' + cst.btnBorderColor,
            minWidth: 40,
            margin: 0,
            padding: '0 2px',
            '&:hover': {
                backgroundColor: cst.btnBackgroundColor100,
            }
        },
        select: {
            height: 15,
            fontSize: 13,
            backgroundColor: 'transparent',
            '&:focus': {
                backgroundColor: 'transparent',
            },
        },
        selectRoot: {
            color: cst.textColor,
            backgroundColor: 'transparent',
        },
        selectMenu: {
            top: 1,
            position: 'relative',
            padding: '5px 6px',
            lineHeight: 'calc(1em + 0px)',
        },
        selectMultiple: {
            padding: '3px 2px',
            height: 'auto',
            whiteSpace: 'inherit',
            textOverflow: 'unset',
            lineHeight: 'calc(1em + 6px)',
        },
        selectIcon: {
            top: 0,
            right: -4,
            height: 25,
            width: 20,
        },
        disabled: {},
        inputRoot: {
            padding: '0 4px',
        },
        inputUnderline: {
            '&:before': {
                display: 'none',
            },
            '&:hover:not($disabled):before': {
                display: 'none',
            }
        },
        inputInkbar: {
            '&:after': {
                display: 'none',
            }
        },
        menuRoot: menu.contextMenu.root,
        menuItem: menu.contextMenu.item,
        menuItemSelected: menu.contextMenu.itemSelected,
    },
};