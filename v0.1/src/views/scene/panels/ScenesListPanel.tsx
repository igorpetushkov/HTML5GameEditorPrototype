import * as React from 'react';
import { connect } from 'react-redux';

import { mapDispatch } from 'lib/redux';
import { IUiStorage } from 'interfaces';
import { SceneActions } from 'redux/Actions';

class ScenesListPanel extends React.Component<any, void> {
    changeScene(sceneId: number) {
        if (sceneId !== this.props.sceneId) {
            this.props.changeScene(sceneId);
        } else {
            this.props.toggleSceneListShow();
        }
    }

    render() {
        const { scenes, sceneId } = this.props;

        return (
            <div className='scenes-list'>
                <ul>
                    {_.map(scenes, (scene: IUiStorage.Scene) => {
                        return (
                            <li key={scene.id}>
                                <img title={scene.name}
                                        src={scene.image}
                                        style={{
                                            borderColor: scene.id === sceneId ? '#d1b19a' : '',
                                            opacity: scene.id === sceneId ? 0.9 : 0.7,
                                        }}
                                        onClick={() => this.changeScene(scene.id)}
                                />
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

export default connect(state => {

    return {
        scenes: state.storage.scenes,
        sceneId: state.scene.sceneId,
    };
}, dispatch => mapDispatch(dispatch, SceneActions))
(ScenesListPanel);