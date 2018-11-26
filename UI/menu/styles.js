import * as cst from '../constants';

export default {
    contextMenu: {
        root: {
            backgroundColor: cst.darkGrayColor300,
            border: '1px solid ' + cst.btnBackgroundColor200,
        },
        item: {
            fontSize: 13,
            color: cst.textColor,
            padding: '2px 6px',
            '&:focus': {
                backgroundColor: 'transparent',
            },
            '&:hover': {
                backgroundColor: cst.btnBackgroundColor40,
            },
        },
        itemSelected: {
            color: cst.textColor2,
            backgroundColor: 'transparent',
        },
        menuEl: {
            position: 'absolute',
            visibility: 'hidden',
        },
        menu: {
            backgroundColor: '#2d2522',
            borderColor: '#472f1b',
            color: '#efd2bd',
        },
        menuItem: {
            paddingLeft: 10,
            paddingRight: 10,
        }
    },
};