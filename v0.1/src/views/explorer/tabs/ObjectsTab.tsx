import * as _ from 'lodash';
import * as React from 'react';
import { connect } from 'react-redux';
import * as classNames from 'classnames';

import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import Divider from 'material-ui/Divider';
import DropDownMenu from 'material-ui/DropDownMenu';
import FlatButton from 'material-ui/FlatButton';
import SubjectIcon from 'material-ui/svg-icons/action/subject';
import LibraryBooksIcon from 'material-ui/svg-icons/av/library-books';
import ContentCopyIcon from 'material-ui/svg-icons/content/content-copy';

import SortIcon from 'material-ui/svg-icons/image/filter-hdr';

import { mapDispatch } from 'lib/redux';
import { ObjectsTabActions, InspectorActions } from 'redux/Actions';
import ExplorerToolbar from 'views/explorer/ExplorerToolbar';
import { IUiStorage } from 'interfaces';
import { INSPECTOR_POINT } from '../../../constants';

class ObjectsTab extends React.Component<any, any> {
    constructor(props) {
        super(props);

        this.state = {
            groupOpenedIds: [],
        };
    }

    selectObject(objectId: number, groupId: number) {
        if (objectId !== this.props.objectId) {
            this.props.selectObject(objectId);
            this.props.changePoint(INSPECTOR_POINT.OBJECTS, objectId);

            this.toggleExtraBtn(`object${objectId}`, true);
            this.toggleExtraBtn(`group${groupId}`, false);
        } else {
            let opened = this.isExtraBtnOpened(`object${objectId}`);

            if (!opened) {
                this.props.selectObject(0);
                this.props.clearPoint();

                this.toggleExtraBtn(`object${objectId}`, false);
                this.toggleExtraBtn(`group${groupId}`, false);
            }
        }
    }

    selectGroup(groupId: number) {
        if (groupId !== this.props.groupId) {
            this.props.selectGroup(groupId);
            this.props.changePoint(INSPECTOR_POINT.GROUPS, groupId);

            this.toggleExtraBtn(`group${groupId}`, true);
        } else {
            this.props.selectGroup(0);
            this.props.clearPoint();

            this.toggleExtraBtn(`group${groupId}`, false);
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

    renderObject(object: IUiStorage.Object, level: number) {
        const selected = object.id === this.props.objectId;
        const key = `object${object.id}`;
        const clName = classNames({
            'objects-file': true,
            'selected': selected,
        });
        const clNameLabel = classNames({
            'objects-file-label-level1': level === 1,
            'objects-file-label-level2': level === 2,
        });

        return (
            <li key={key}
                className={clName}
                onClick={() => this.selectObject(object.id, object.group)}
                onMouseEnter={selected && (() => this.toggleExtraBtn(key, true))}
                onMouseLeave={selected && (() => this.toggleExtraBtn(key, false))}
            >
                <div className={clNameLabel}>
                    {object.name}
                </div>

                { this.renderExtraBtn(key) }
            </li>
        );
    }

    renderGroup(group: IUiStorage.Group, objects: IUiStorage.Object[]) {
        const selected = group.id === this.props.groupId;
        const opened = _.includes(this.state.groupOpenedIds, group.id);
        const key = `group${group.id}`;
        const clName = classNames({
            'selected': selected,
            'group-opened': opened,
        });
        const clNameIcon = classNames({
            'group-icon icon-btn': true,
            'group-icon-selected-objs': objects.some(obj => obj.id === this.props.objectId),
        });
        const clNameLabel = 'group-label';
        const clNameGroupBranch = classNames({
            'subbranch-1 branch-opened': opened,
            'branch branch-close': !opened,
        });

        return (
            <li key={key}
                className={clName}
                onMouseEnter={selected && (() => this.toggleExtraBtn(key, true))}
                onMouseLeave={selected && (() => this.toggleExtraBtn(key, false))}
            >
                { opened ?
                    <ContentCopyIcon className={clNameIcon} onClick={() => this.closeGroup(group.id)} /> :
                    <LibraryBooksIcon className={clNameIcon} onClick={() => this.openedGroup(group.id)} /> }

                <span className={clNameLabel}
                    onClick={() => this.selectGroup(group.id)}
                >
                    {group.name}

                    { this.renderExtraBtn(key) }
                </span>

                <ul className={clNameGroupBranch}>
                    {_.map(objects, object => {
                        return this.renderObject(object, 2);
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
        let { sceneId, objects, groups, tags } = this.props;

        objects = _.filter(objects, { scene: sceneId }) as IUiStorage.Object[];
        groups = _.filter(groups, { scene: sceneId }) as IUiStorage.Group[];

        if (objects.length && !groups.length) {
            return (
                <div className='objects'>
                    <div className='empty-msg'>No objects.</div>
                </div>
            );
        }

        // const actionMenu = [
        //     {
        //         label: 'Example1',
        //         handler: () => {},
        //     },
        //     {
        //         label: 'Example2',
        //         handler: () => {},
        //     },
        //     {
        //         label: 'Example3',
        //         handler: () => {},
        //     },
        // ];

        return (
            <div className='objects'>
                <ExplorerToolbar sortHandler={() => {}} filterHandler={() => {}}/>

                <div className='tags'>
                    <DropDownMenu
                        value={sceneId}
                        onChange={() => {}}
                        className='tags-dropdown'
                        menuStyle={{ width: '200px', maxWidth: '200px' }}
                    >
                        {_.map(tags, (tag: any) => <MenuItem value={tag.id} key={tag.id} primaryText={tag.name} />)}
                    </DropDownMenu>
                    <FlatButton icon={<SortIcon />} onClick={() => {}} />
                    <FlatButton label={'Add Object'} onClick={() => {}} />
                </div>

                {objects.length || groups.length ?
                    <div className='item-list'>
                        <ul className='branch'>
                            {_.map(groups, (group: IUiStorage.Group) => {
                                return this.renderGroup(group, _.filter(objects, { group: group.id }) as IUiStorage.Object[]);
                            })}

                            {_.map(objects, (object: IUiStorage.Object) => {
                                return !object.group && this.renderObject(object, 1);
                            })}
                        </ul>
                    </div>
                : null}
            </div>
        );
    }
}

export default connect(state => {
    return {
        sceneId: state.scene.sceneId,
        objectId: state.explorer.objectId,
        groupId: state.explorer.groupId,
        objects: state.storage.objects,
        groups: state.storage.groups,
        tags: state.storage.tags,
    };
}, dispatch => mapDispatch(dispatch, [ObjectsTabActions, InspectorActions]))
(ObjectsTab);