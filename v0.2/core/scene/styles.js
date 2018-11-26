import * as cst from 'kroppli-ui/constants';

const toolbarButton = {
    width: 48,
    minHeight: 22,
    position: 'relative',
    top: 4,
};

const toolbarButtonIcon = {
    width: 16,
    height: 16,
};

export default {
    scene: {
        root: {
            display: 'table',
            width: '100%',
            minWidth: 870,
            backgroundColor: cst.darkGrayColor300,
            color: cst.textColor,
            height: window.innerHeight,
        },
    },
    canvas: {
        root: {
            width: 'calc(100% - 0px)',
            backgroundColor: 'black',
        },
    },
    toolbar: {
        root: {
            width: '100%',
            borderBottom: '2px solid ' + cst.btnBackgroundColor200,
            backgroundColor: '#241B16',
        },
    },
    toolbarPositions: {
        root: {
            height: '100%',
            display: 'inline-block',
            marginLeft: 5,
        },
        button: toolbarButton,
        buttonIcon: toolbarButtonIcon,
        rotate: {
            '&:hover ~ $extra': {
                visibility: 'visible',
            },
        },
        extra: {
            height: '100%',
            visibility: 'hidden',
            display: 'inline-block',
            paddingLeft: 4,
            '&:hover': {
                visibility: 'visible',
            },
        },
    },
    toolbarPlayer: {
        root: {
            display: 'inline-block',
            position: 'absolute',
            left: 'calc(50% - 120px)',
        },
        button: toolbarButton,
        buttonIcon: toolbarButtonIcon,
    },
    toolbarSceneLayer: {
        root: {
            display: 'inline-block',
            position: 'absolute',
            right: 5,
        },
        button: toolbarButton,
        buttonIcon: toolbarButtonIcon,
    },
    toolbarSceneLayerPanel: {
        root: {
            paddingTop: 2,
            paddingBottom: 3,
            borderBottomLeftRadius: 2,
            backgroundColor: '#241B16',
            position: 'absolute',
            right: 0,
            top: 31,
            textAlign: 'center',
            overflow: 'auto',
        },
        layersList: {
            width: 190,
        },
        scenesList: {
            width: 190,
        },
        button: toolbarButton,
        buttonList: {
            width: 'calc(100% - 10px)',
            marginBottom: 3,
            marginLeft: 5,
            marginRight: 5,
            top: 2,
            minHeight: 20,
            '&:hover': {
                backgroundColor: cst.btnBackgroundColor200,
            },
        },
        buttonListSelected: {
            borderColor: '#938773',
            backgroundColor: 'transparent',
            opacity: 1,
            '&:hover': {
                backgroundColor: cst.btnBackgroundColor200,
            },
        },
    }
};