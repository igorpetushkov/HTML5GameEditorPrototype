import * as cst from 'kroppli-ui/constants';

export default {
    root: {
        root: {
            display: 'table',
            backgroundColor: cst.darkGrayColor300,
            color: cst.textColor,
            height: window.innerHeight,
        },
    },
    left: {
        root: {
            flexBasis: 'auto',
            height: '100%',
            borderRight: '2px solid ' + cst.btnBackgroundColor200,
        },
        tab: {
            minWidth: '25%',
        },
        tabIndicator: {
            width: '25% !important',
        },
    },
    right: {
        root: {
            flexBasis: 'auto',
            height: '100%',
            borderLeft: '2px solid ' + cst.btnBackgroundColor200,
        },
        tab: {
            minWidth: '50%',
        },
        tabIndicator: {
            backgroundColor: '#605f5d !important',
            width: '50% !important',
        },
    },
    center: {
        root: {
            display: 'table-cell',
            position: 'relative',
            verticalAlign: 'top',
            width: '100%',
            height: '100%',
        },
    },
    bottom: {
        root: {
            borderTop: '2px solid ' + cst.btnBackgroundColor200,
            width: '100%',
            height: '100%',
        },
        tabs: {
            height: '100%',
        },
        tab: {
            minWidth: '50%',
            height: 22,
            backgroundColor: cst.darkGrayColor30,
            borderBottom: '2px solid ' + cst.btnBackgroundColor200,
            '&:hover': {
                backgroundColor: cst.darkGrayColor40,
            }
        },
        bar: {
            height: 22,
        },
        content: {
            overflow: 'auto',
        },
        tabSelected: {
            backgroundColor: cst.darkGrayColor45,
            borderBottom: '2px solid transparent',
            '&:hover': {
                backgroundColor: cst.darkGrayColor45,
            }
        },
        tabIndicator: {
            backgroundColor: 'transparent !important',
            width: '50% !important',
        },
        tabLabelContainer: {
            paddingTop: 2,
        },
        tabLabel: {
            fontSize: 12,
        },
    },
};