import * as cst from '../constants';

export const indicatorColor = cst.textColor3;

export default {
    tabs: {
        root: {

        },
        bar: {
            height: 30,
            backgroundColor: cst.darkGrayColor100,
        },
        tab: {
            height: 30,
            backgroundColor: cst.darkGrayColor100,
        },
        tabSelected: {},
        content: {
            width: '100%',
            height: '100%',
        },
        indicator: {},
        flexContainer: {
            display: 'block',
        },
        tabLabelContainer: {},
        tabLabel: {},
    },
    tabsVertical: {
        root: {

        },
        bar: {
            position: 'absolute',
            width: 20,
        },
        tab: {
            marginTop: 2,
            marginBottom: 5,
            color: cst.textColor,
            width: 20,
            minWidth: 20,
            display: 'block',
            border: '1px solid ' + cst.btnBackgroundColor500,
        },
        tabSelected: {
            border: '1px solid ' + cst.btnBackgroundColor600,
        },
        label: {
            width: 12,
            minWidth: 12,
        },
        content: {
            height: '100%',
        },
    }
};