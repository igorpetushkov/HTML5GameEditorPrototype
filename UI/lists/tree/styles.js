import * as cst from '../../constants';

export default {
    treeList: {
        root: {
            userSelect: 'none',  
            '-webkit-user-select': 'none',
            marginTop: 3,
            marginLeft: 2,
            marginRight: 0,
            height: 'calc(100% - 28px)',
        },

        rootList: {
            overflow: 'auto',
            marginTop: 3,
            height: '100%',
        },
        list: {
            border: '1px solid transparent',
            cursor: 'pointer',
            margin: '2px 0px',
            marginRight: 3,
            paddingLeft: 2,
            color: cst.textColor,
            '&:hover': {
                color: cst.textColor4,
                borderColor: cst.btnBackgroundColor300,
            }
        },
        empty: {
            border: '1px solid transparent',
            margin: '2px 5px',
            padding: '5px 5px',
            color: cst.textColor,
            cursor: 'default',
        },
        selected: {
            borderColor: cst.listBorderSelected + ' !important',
            '&:hover': {
                borderColor: cst.listBorderSelected + ' !important',
            }
        },
        expanded: {
            borderColor: cst.btnBackgroundColor300,
        }, 
        label: {
            cursor: 'pointer',
            padding: '2px 4px',
            display: 'inline',
            position: 'relative',
            top: -5,
            left: 2,
        },
        labelSelected: {
            color: cst.textColor5,
        },
        labelIcon: {
            width: 13,
            height: 22,
            
            color: cst.textColor,
            '&:hover': {
                color: cst.textColor4,
            }
        },
        labelIconDiv: {
            display: 'inline',
            position: 'relative',
            top: 1,
            left: 1,
        },
        labelAndIcon: {
    
        },
        labelIconSelected: {
            color: cst.textColor5,
        },
        labelHasSelectedItem: {
            color: '#efc8ac',
        },
    },

    treeListItem: {
        root: {
            border: '1px solid transparent',
            cursor: 'pointer',
            margin: '2px 1px',
            marginRight: 3,
            padding: '4px 5px',
            color: cst.textColor,
            '&:hover': {
                borderColor: cst.btnBackgroundColor400,
            }
        },
        selected: {
            color: cst.textColor5,
            borderColor: cst.listBorderSelected,
            '&:hover': {
                borderColor: cst.listBorderSelected,
            }
        },
        borderDotted: {
            border: '1px dotted ' + cst.btnBackgroundColor400,
        },
    },

    treeListSearch: {
        root: {
            marginRight: 1,
            height: 25,
        },
        input: {
            width: 'calc(100% - 78px)',
            position: 'relative',
            bottom: 1,
            border: 0,
        },
        inkbar: {
            width: 'calc(100% - 12px)',
            padding: '2px 4px',
            borderLeft: '1px solid ' + cst.btnBackgroundColor200,
            borderRight: '1px solid ' + cst.btnBackgroundColor200,
        },
        mask: {
            display: 'inline-block',
            width: '100%',
            textAlign: 'center',
            position: 'relative',
            top: 3,
            fontSize: 12,
            '&:hover': {
                color: cst.textColor4,
                cursor: 'pointer',
            },
            '&:hover $maskButton': {
                visibility: 'visible',
            }
        },
        maskSeached: {
            color: cst.textColor_1,
            '&:hover': {
                color: cst.textColor_1,
            }
        },
        maskData: {
            display: 'inline-block',
            position: 'relative',
            top: -3,
            left: '3%',
            width: 'calc(100% - 30px)',
        },
        maskButton: {
            visibility: 'hidden',
        },
    }
};