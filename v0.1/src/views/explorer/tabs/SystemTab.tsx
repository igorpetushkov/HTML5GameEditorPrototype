import * as React from 'react';
import { connect } from 'react-redux';
import * as classNames from 'classnames';

import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import Divider from 'material-ui/Divider';
import FlatButton from 'material-ui/FlatButton';

import SubjectIcon from 'material-ui/svg-icons/action/subject';
import LibraryBooksIcon from 'material-ui/svg-icons/av/library-books';
import ContentCopyIcon from 'material-ui/svg-icons/content/content-copy';

import { mapDispatch } from 'lib/redux';
import { SystemTabActions, InspectorActions } from 'redux/Actions';
import { SYSTEM_GROUP } from '../../../constants';

class GameTab extends React.Component<any, any> {
    constructor(props) {
        super(props);

        this.state = {
            groupOpenedIds: [],
        };
    }

    selectGroupItem(itemId: number, groupId: number) {
        const systemItemId = groupId === SYSTEM_GROUP.SCENES ? this.props.systemSceneId : this.props.systemLayerId;
        const btnRef = `item${itemId}_${groupId}`;

        if (itemId !== systemItemId) {
            this.props.selectGroupItem(itemId, groupId);
            this.props.changePoint(groupId, itemId);

            this.toggleExtraBtn(btnRef, true);
        } else {
            if (groupId === SYSTEM_GROUP.SCENES && this.isExtraBtnOpened(btnRef)) {
                return;
            }

            this.props.selectGroupItem(0, groupId);
            this.props.clearPoint();

            this.toggleExtraBtn(btnRef, false);
        }
    }

    selectGroup(groupId: number) {
        let grScenes = groupId === SYSTEM_GROUP.SCENES && !this.props.systemSceneGroupSelected && SYSTEM_GROUP.SCENES;
        let grLayers = groupId === SYSTEM_GROUP.LAYERS && !this.props.systemLayerGroupSelected && SYSTEM_GROUP.LAYERS;

        if (grScenes || grLayers) {
            this.props.selectGroup(groupId);
            this.props.changePoint(grScenes || grLayers, -1);
        } else {
            this.props.selectGroup(0);
            this.props.clearPoint();
        }
    }

    openedGroup(groupId: number) {
        let { groupOpenedIds } = this.state;
        groupOpenedIds.push(groupId);

        this.setState({
            groupOpenedIds: groupOpenedIds,
        });
    }

    closeGroup(groupId: number) {
        this.setState({
            groupOpenedIds: _.without(this.state.groupOpenedIds, groupId),
        });
    }

    toggleExtraBtn(key: string, show: boolean) {
        const el = this.refs[`item-extra-btn-${key}`];

        if (el) {
            el['style'].display = show ? 'inline-block' : 'none';
        }
    }

    isExtraBtnOpened(key: string) {
        return _.get(this.refs[`item-extra-btn-menu-${key}`], 'state.open');
    }

    renderItem(item: any, groupId: number, selected: boolean) {
        const key = `item${item.id}_${groupId}`;
        const clName = classNames({
            'objects-file': true,
            'selected': selected,
        });
        const clNameLabel = classNames({
            'objects-file-label-level2': true,
        });
        const isSceneGroup = groupId === SYSTEM_GROUP.SCENES;

        return (
            <li key={key}
                className={clName}
                onClick={() => this.selectGroupItem(item.id, groupId)}
                onMouseEnter={isSceneGroup && selected && (() => this.toggleExtraBtn(key, true))}
                onMouseLeave={isSceneGroup && selected && (() => this.toggleExtraBtn(key, false))}
            >
                <div className={clNameLabel}>
                    {item.name}
                </div>

                { isSceneGroup && this.renderExtraBtn(key) }
            </li>
        );
    }

    renderGroup(groupId: number, items: any[], systemItemId: number, selected: boolean) {
        const opened = _.includes(this.state.groupOpenedIds, groupId);
        const key = `group${groupId}`;
        const clName = classNames({
            'selected': selected,
            'group-opened': opened,
        });
        const clNameIcon = classNames({
            'group-icon icon-btn': true,
            'group-icon-selected-objs': items.some(item => item.id === systemItemId),
        });
        const clNameLabel = 'group-label';
        const clNameGroupBranch = classNames({
            'subbranch-1 branch-open': opened,
            'branch branch-close': !opened,
        });

        return (
            <li key={key} className={clName} >
                { opened ?
                    <ContentCopyIcon className={clNameIcon} onClick={() => this.closeGroup(groupId)} /> :
                    <LibraryBooksIcon className={clNameIcon} onClick={() => this.openedGroup(groupId)} /> }

                <span className={clNameLabel} onClick={() => this.selectGroup(groupId)}>
                    {_.upperFirst(_.toLower(SYSTEM_GROUP[groupId]))}
                </span>

                <div className='create-btn'>
                    { opened && <FlatButton label='Create' onClick={(event) => {}} /> }
                </div>

                <ul className={clNameGroupBranch}>
                    {_.map(items, item => {
                        return this.renderItem(item, groupId, item.id === systemItemId);
                    })}
                </ul>
            </li>
        );
    }

    renderExtraBtn(key: string) {
        const ref = `item-extra-btn-${key}`;
        const refMenu = `item-extra-btn-menu-${key}`;

        return (
            <div ref={ref} className='item-extra-btn icon-btn'>
                <IconMenu
                    ref={refMenu}
                    iconButtonElement={ <IconButton><SubjectIcon /></IconButton> }
                >
                    <MenuItem primaryText='Remove' />
                    <Divider />
                    <MenuItem primaryText='Move to group...' />
                    <Divider />
                    <MenuItem primaryText='Move up' />
                    <MenuItem primaryText='Move down' />
                </IconMenu>
            </div>
        );
    }

    render() {
        const {
            scenes,
            layers,
            systemSceneId,
            systemLayerId,
            systemSceneGroupSelected,
            systemLayerGroupSelected,
        } = this.props;

        return (
            <div className='system'>
                <div className='item-list'>
                    <ul className='branch'>
                        {this.renderGroup(SYSTEM_GROUP.SCENES, scenes, systemSceneId, systemSceneGroupSelected)}
                        {this.renderGroup(SYSTEM_GROUP.LAYERS, layers, systemLayerId, systemLayerGroupSelected)}
                    </ul>
                </div>
            </div>
        );
    }
}

export default connect(state => {

    return {
        scenes: state.storage.scenes,
        layers: state.storage.layers,
        systemSceneId: state.explorer.systemSceneId,
        systemLayerId: state.explorer.systemLayerId,
        systemSceneGroupSelected: state.explorer.systemSceneGroupSelected,
        systemLayerGroupSelected: state.explorer.systemLayerGroupSelected,
    };
}, dispatch => mapDispatch(dispatch, [SystemTabActions, InspectorActions]))
(GameTab);