import * as cst from '../../constants';

export default {
    accordion: {
        root: {

        },
    },
    item: {
        root: {
            margin: 2,
            padding: '1px 0px',
        },
        content: {
            padding: 5,
            backgroundColor: cst.darkGrayColor100,
            borderBottomLeftRadius: 2,
            borderBottomRightRadius: 2,
        },
    },
    header: {
        root: {
            borderRadius: 2,

            backgroundColor: cst.darkGrayColor100,
            '&:hover': {
                backgroundColor: cst.darkGrayColor100,
            },
        },
        rootExpanded: {
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
        },
        button: {
            // width: '100%',
            height: 30,
            border: 0,
            backgroundColor: 'transparent',
            textAlign: 'left',
            paddingLeft: 5,
            textTransform: 'capitalize',
            fontSize: 14,
            '&:hover': {
                backgroundColor: 'transparent',
                color: cst.textColor4,
            },
        },
        buttonExpanded: {
            // color: cst.textColor6,
        },
        hr: {
            height: 1,
            backgroundColor: cst.btnBackgroundColor300,
            margin: '0 5px',
        },
        rigthIconsPanel: {
            display: 'inline-block',
        },
    },
};