import * as React from 'react';
import { connect } from 'react-redux';

import FlatButton from 'material-ui/FlatButton';
import RotateLeftIcon from 'material-ui/svg-icons/image/rotate-left';
import RotateRightIcon from 'material-ui/svg-icons/image/rotate-right';
import Rotate90Icon from 'material-ui/svg-icons/image/rotate-90-degrees-ccw';
import RotateIcon from 'material-ui/svg-icons/action/cached';
import MoveIcon from 'material-ui/svg-icons/action/open-with';
import ScaleIcon from 'material-ui/svg-icons/action/settings-ethernet';
import StepNextIcon from 'material-ui/svg-icons/av/skip-next';
import StepPreviousIcon from 'material-ui/svg-icons/av/skip-previous';
import PlayIcon from 'material-ui/svg-icons/av/play-arrow';
import PauseIcon from 'material-ui/svg-icons/av/pause';
import StopIcon from 'material-ui/svg-icons/av/stop';
import LayerIcon from 'material-ui/svg-icons/maps/layers';
import ScenesIcon from 'material-ui/svg-icons/image/style';

import { mapDispatch } from 'lib/redux';
import { SceneActions } from 'redux/Actions';
import { IUiStorage } from 'interfaces';
import { IUiData } from 'interfaces';

class SceneToolbarPanel extends React.Component<any, any> {
    toggleModeMoveHandler() {
        this.props.toggleModeMove();
    }

    toggleModeScaleHandler() {
        this.props.toggleModeScale();
    }

    toggleModeRotateHandler() {
        this.props.toggleModeRotate();
    }

    toggleRotateExtraHandler(show: boolean) {
        this.refs['object-rotate-extra']['style']['display'] = show ? 'inline-block' : 'none';
    }

    rotateLeft() {
        this.props.rotateLeft();
    }

    rotateRight() {
        this.props.rotateRight();
    }

    rotate90() {
        this.props.rotate90();
    }

    playHandler() {
        this.props.playScene();
    }

    stopHandler() {
        this.props.stopScene();
    }

    pauseHandler() {
        this.props.pauseScene();
    }

    stepPrevHandler() {
        this.props.stepPrev();
    }

    stepNextHandler() {
        this.props.stepNext();
    }

    toggleLayerListHandler() {
        this.props.toggleLayerListShow();
    }

    toggleSceneListHandler() {
        this.props.toggleSceneListShow();
    }

    render() {
        const {
            layerName,
            sceneName,
            layerListShow,
            sceneListShow,
            moveMode,
            scaleMode,
            rotateMode,
            isPlayedScene,
            isStoppedScene,
            isPausedScene,
        } = this.props;

        const btnStyle = (isActive: boolean = false) => {
            return {
                border: isActive ? '1px solid #695E56' : '1px solid #3E474A',
                [isActive && 'backgroundColor']: '#472519',
            };
        };

        return (
            <div className='toolbar'>
                <div className='object-transform'>
                    <FlatButton
                        style={btnStyle(moveMode)}
                        icon={<MoveIcon />}
                        onClick={() => this.toggleModeMoveHandler()}
                    />
                    <FlatButton
                        style={btnStyle(scaleMode)}
                        icon={<ScaleIcon />}
                        onClick={() => this.toggleModeScaleHandler()}
                    />
                    <FlatButton
                        style={btnStyle(rotateMode)}
                        icon={<RotateIcon />}
                        onClick={() => this.toggleModeRotateHandler()}
                        onMouseEnter={() => this.toggleRotateExtraHandler(true)}
                        onMouseLeave={() => this.toggleRotateExtraHandler(false)}
                    />
                    <div ref='object-rotate-extra'
                        className='object-rotate-extra'
                        onMouseOver={() => this.toggleRotateExtraHandler(true)}
                        onMouseOut={() => this.toggleRotateExtraHandler(false)}
                    >
                        <FlatButton
                            style={btnStyle()}
                            icon={<RotateLeftIcon />}
                            onClick={() => this.rotateLeft()}
                            onMouseLeave={() => this.toggleRotateExtraHandler(false)}
                        />
                        <FlatButton
                            style={btnStyle()}
                            icon={<RotateRightIcon />}
                            onClick={(event) => this.rotateRight()}
                            onMouseLeave={() => this.toggleRotateExtraHandler(false)}
                        />
                        <FlatButton
                            style={btnStyle()}
                            icon={<Rotate90Icon />}
                            onClick={() => this.rotate90()}
                            onMouseLeave={() => this.toggleRotateExtraHandler(false)}
                        />
                    </div>
                </div>
                <div className='player-panel'>
                    <FlatButton
                        style={btnStyle(false)}
                        icon={<StepPreviousIcon />}
                        disabled={!isPlayedScene && !isPausedScene}
                        onClick={() => this.stepPrevHandler()}
                    />
                    {isPausedScene || isStoppedScene ?
                        <FlatButton
                            style={btnStyle()}
                            icon={<PlayIcon />}
                            onClick={() => this.playHandler()}
                        />
                    : null}
                    {isPlayedScene ?
                        <FlatButton
                            style={btnStyle(isPausedScene)}
                            icon={<PauseIcon />}
                            disabled={!isPlayedScene}
                            onClick={() => this.pauseHandler()}
                        />
                    : null}
                    <FlatButton
                        style={btnStyle(false)}
                        icon={<StopIcon />}
                        disabled={!isPlayedScene && !isPausedScene}
                        onClick={() => this.stopHandler()}
                    />
                    <FlatButton
                        style={btnStyle(false)}
                        icon={<StepNextIcon />}
                        disabled={!isPlayedScene && !isPausedScene}
                        onClick={() => this.stepNextHandler()}
                    />
                </div>
                <div className='layers-scenes'>
                    <FlatButton
                        style={btnStyle(layerListShow)}
                        label={layerName}
                        icon={<LayerIcon />}
                        onClick={() => this.toggleLayerListHandler()}
                    />
                    <FlatButton
                        style={btnStyle(sceneListShow)}
                        label={sceneName}
                        icon={<ScenesIcon />}
                        onClick={() => this.toggleSceneListHandler()}
                    />
                </div>
            </div>
        );
    }
}

export default connect(state => {
    const sceneUi = state.scene;
    const sceneId = state.scene.sceneId;
    const scene = _.find(state.storage.scenes, {id: sceneId}) as IUiStorage.Scene;
    let layerName = 'notfound';

    if (scene) {
        layerName = _.get(_.find(state.storage.layers, {id: scene.layer}), 'name') as string;
    }

    return {
        layerName: layerName,
        sceneName: scene ? scene.name : 'notfound',
        layerListShow: state.scene.layerListShow,
        sceneListShow: state.scene.sceneListShow,
        moveMode: sceneUi.moveMode,
        scaleMode: sceneUi.scaleMode,
        rotateMode: sceneUi.rotateMode,
        isPlayedScene: sceneUi.playScene,
        isStoppedScene: sceneUi.stopScene,
        isPausedScene: sceneUi.pauseScene,
    };
}, dispatch => mapDispatch(dispatch, SceneActions))
(SceneToolbarPanel);