import React from 'react';

import { KiFlatButton } from 'kroppli-ui/buttons';

import { connect } from '../../../../helpers';
import styles from '../../styles';

class SceneToolbarSceneLayerPanel extends React.Component {
    componentWillMount = () => {
        const canvasEl = document.getElementById('canvas');

        if (canvasEl) {
            this.maxSceneLayerPanelHeight = window.getComputedStyle(canvasEl, null).height;
            this.maxSceneLayerPanelHeight = +this.maxSceneLayerPanelHeight.replace('px', '');
        }
    }

    maxSceneLayerPanelHeight = 0;

    render() {
        const { actions = {}, styles = {}, classes, ...store } = this.props;

        const btnListClasses = {
            root: `${classes.button} ${classes.buttonList}`,
            selected: classes.buttonListSelected,
        };

        let clsList = classes.root;
        let list = [];
        let selectedListItems = [];
        let action = () => {};

        if (store.sceneLayer.list === 'scenes') {
            clsList += ' ' + classes.scenesList;
            list = store.sceneLayerPanel.scenesList;
            selectedListItems.push(store.f_selectedScene);
            action = actions.world.scenes.selectScene;
        } else if (store.sceneLayer.list === 'layers') {
            clsList += ' ' + classes.layersList;
            list = store.sceneLayerPanel.layersList;
            selectedListItems = store.f_selectedLayers;
            action = actions.world.layers.selectLayer;
        }

        return (
            <div className={clsList} style={{ maxHeight: this.maxSceneLayerPanelHeight / 3 * 2.5 }}>
                {list.map(item => (
                    <KiFlatButton
                        key={item.key}
                        label={item.name}
                        selected={!!~selectedListItems.indexOf(item.key)}
                        actions={{
                            handleClick: () => action({ key: item.key }),
                        }}
                        classes={btnListClasses}
                    />
                ))}
            </div>
        );
    }
}

export default connect('scene.toolbar', styles.toolbarSceneLayerPanel, SceneToolbarSceneLayerPanel);

