import React from 'react';

import { KiFlatButton } from 'kroppli-ui/buttons';

import { connect } from '../../../../helpers';
import styles from '../../styles';

const SceneToolbarSceneLayer = ({ maxListHeight, actions = {}, styles = {}, classes, ...store }) => {
    const btnClasses = {
        root: classes.button,
        icon: classes.buttonIcon,
    };

    return (
        <div className={classes.root}>
            <KiFlatButton
                icon={'layers'}
                label={'All layers'}
                selected={store.list === 'layers'}
                actions={{
                    handleClick: () => actions.scene.sceneLayer.layers({}),
                }}
                classes={btnClasses}
                styles={{
                    root: { width: 140 },
                }}
            />
            <KiFlatButton
                icon={'style'}
                label={'Scene 1'}
                selected={store.list === 'scenes'}
                actions={{
                    handleClick: () => actions.scene.sceneLayer.scenes({}),
                }}
                classes={btnClasses}
                styles={{
                    root: { marginLeft: 4, width: 140 },
                }}
            />
        </div>
    );
};

export default connect('scene.toolbar.sceneLayer', styles.toolbarSceneLayer, SceneToolbarSceneLayer);

