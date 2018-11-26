import * as cst from '../../constants';

export default {
    accordion: {
        root: {
            
        },
    },
    item: {
        root: {
            padding: '1px 0px',
        },
        content: {
        },
    },
    header: {
        root: {
            borderBottom: '1px solid #5C3D27',
            borderLeft: '2px solid transparent',
            borderRight: '2px solid transparent',
            backgroundColor: cst.btnBackgroundColor100,
            '&:hover': {
                backgroundColor: cst.btnBackgroundColor200,
            },
        },
        rootExpanded: {
            borderLeft: '2px solid #9C6741',
            borderRight: '2px solid #9C6741',
        },
        button: {
            width: '100%',
            border: 0,
            backgroundColor: 'transparent',
            '&:hover': {
                backgroundColor: 'transparent',
            },
        },
        buttonExpanded: {
            color: cst.textColor6,
        }
    },
};