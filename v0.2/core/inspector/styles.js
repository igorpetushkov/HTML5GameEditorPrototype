import * as cst from 'kroppli-ui/constants';

export default {
    inspector: {
        root: {
            height: 'calc(100vh - 35px)',
            overflow: 'auto',
        },
    },
    details: {
        root: {
            
        },
        field: {
            margin: '2px 0px',
        },
        input: {
            backgroundColor: cst.darkGrayColor40,
        },
        inkbarInTwo: {
            width: 100,
        },
        dropdown: {
            // height: 23,
            width: 200,
            backgroundColor: cst.darkGrayColor40,
            borderColor: cst.btnBackgroundColor200,
            '&:hover': {
                backgroundColor: cst.btnBackgroundColor10,
            },
        },
    }
};