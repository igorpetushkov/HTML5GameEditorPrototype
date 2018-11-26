"use strict";
const _ = require('lodash');
const React = require('react');
const react_redux_1 = require('react-redux');
const classNames = require('classnames');
const MenuItem_1 = require('material-ui/MenuItem');
const IconButton_1 = require('material-ui/IconButton');
const IconMenu_1 = require('material-ui/IconMenu');
const Divider_1 = require('material-ui/Divider');
const DropDownMenu_1 = require('material-ui/DropDownMenu');
const FlatButton_1 = require('material-ui/FlatButton');
const subject_1 = require('material-ui/svg-icons/action/subject');
const library_books_1 = require('material-ui/svg-icons/av/library-books');
const content_copy_1 = require('material-ui/svg-icons/content/content-copy');
const filter_hdr_1 = require('material-ui/svg-icons/image/filter-hdr');
const redux_1 = require('lib/redux');
const Actions_1 = require('redux/Actions');
const ExplorerToolbar_1 = require('views/explorer/ExplorerToolbar');
const constants_1 = require('../../../constants');
class ObjectsTab extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            groupOpenedIds: [],
        };
    }
    selectObject(objectId, groupId) {
        if (objectId !== this.props.objectId) {
            this.props.selectObject(objectId);
            this.props.changePoint(constants_1.INSPECTOR_POINT.OBJECTS, objectId);
            this.toggleExtraBtn(`object${objectId}`, true);
            this.toggleExtraBtn(`group${groupId}`, false);
        }
        else {
            let opened = this.isExtraBtnOpened(`object${objectId}`);
            if (!opened) {
                this.props.selectObject(0);
                this.props.clearPoint();
                this.toggleExtraBtn(`object${objectId}`, false);
                this.toggleExtraBtn(`group${groupId}`, false);
            }
        }
    }
    selectGroup(groupId) {
        if (groupId !== this.props.groupId) {
            this.props.selectGroup(groupId);
            this.props.changePoint(constants_1.INSPECTOR_POINT.GROUPS, groupId);
            this.toggleExtraBtn(`group${groupId}`, true);
        }
        else {
            this.props.selectGroup(0);
            this.props.clearPoint();
            this.toggleExtraBtn(`group${groupId}`, false);
        }
    }
    openedGroup(groupId) {
        let { groupOpenedIds } = this.state;
        groupOpenedIds.push(groupId);
        this.setState({
            groupOpenedIds: groupOpenedIds,
        });
    }
    closeGroup(groupId) {
        this.setState({
            groupOpenedIds: _.without(this.state.groupOpenedIds, groupId),
        });
    }
    toggleExtraBtn(key, show) {
        const el = this.refs[`item-extra-btn-${key}`];
        if (el) {
            el['style'].display = show ? 'inline-block' : 'none';
        }
    }
    isExtraBtnOpened(key) {
        return _.get(this.refs[`item-extra-btn-menu-${key}`], 'state.open');
    }
    renderObject(object, level) {
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
        return (React.createElement("li", {key: key, className: clName, onClick: () => this.selectObject(object.id, object.group), onMouseEnter: selected && (() => this.toggleExtraBtn(key, true)), onMouseLeave: selected && (() => this.toggleExtraBtn(key, false))}, 
            React.createElement("div", {className: clNameLabel}, object.name), 
            this.renderExtraBtn(key)));
    }
    renderGroup(group, objects) {
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
        return (React.createElement("li", {key: key, className: clName, onMouseEnter: selected && (() => this.toggleExtraBtn(key, true)), onMouseLeave: selected && (() => this.toggleExtraBtn(key, false))}, 
            opened ?
                React.createElement(content_copy_1.default, {className: clNameIcon, onClick: () => this.closeGroup(group.id)}) :
                React.createElement(library_books_1.default, {className: clNameIcon, onClick: () => this.openedGroup(group.id)}), 
            React.createElement("span", {className: clNameLabel, onClick: () => this.selectGroup(group.id)}, 
                group.name, 
                this.renderExtraBtn(key)), 
            React.createElement("ul", {className: clNameGroupBranch}, _.map(objects, object => {
                return this.renderObject(object, 2);
            }))));
    }
    renderExtraBtn(key) {
        const ref = `item-extra-btn-${key}`;
        const refMenu = `item-extra-btn-menu-${key}`;
        return (React.createElement("div", {ref: ref, className: 'item-extra-btn icon-btn'}, 
            React.createElement(IconMenu_1.default, {ref: refMenu, iconButtonElement: React.createElement(IconButton_1.default, null, 
                React.createElement(subject_1.default, null)
            )}, 
                React.createElement(MenuItem_1.default, {primaryText: 'Remove'}), 
                React.createElement(Divider_1.default, null), 
                React.createElement(MenuItem_1.default, {primaryText: 'Move to group...'}), 
                React.createElement(Divider_1.default, null), 
                React.createElement(MenuItem_1.default, {primaryText: 'Move up'}), 
                React.createElement(MenuItem_1.default, {primaryText: 'Move down'}))
        ));
    }
    render() {
        let { sceneId, objects, groups, tags } = this.props;
        objects = _.filter(objects, { scene: sceneId });
        groups = _.filter(groups, { scene: sceneId });
        if (objects.length && !groups.length) {
            return (React.createElement("div", {className: 'objects'}, 
                React.createElement("div", {className: 'empty-msg'}, "No objects.")
            ));
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
        return (React.createElement("div", {className: 'objects'}, 
            React.createElement(ExplorerToolbar_1.default, {sortHandler: () => { }, filterHandler: () => { }}), 
            React.createElement("div", {className: 'tags'}, 
                React.createElement(DropDownMenu_1.default, {value: sceneId, onChange: () => { }, className: 'tags-dropdown', menuStyle: { width: '200px', maxWidth: '200px' }}, _.map(tags, (tag) => React.createElement(MenuItem_1.default, {value: tag.id, key: tag.id, primaryText: tag.name}))), 
                React.createElement(FlatButton_1.default, {icon: React.createElement(filter_hdr_1.default, null), onClick: () => { }}), 
                React.createElement(FlatButton_1.default, {label: 'Add Object', onClick: () => { }})), 
            objects.length || groups.length ?
                React.createElement("div", {className: 'item-list'}, 
                    React.createElement("ul", {className: 'branch'}, 
                        _.map(groups, (group) => {
                            return this.renderGroup(group, _.filter(objects, { group: group.id }));
                        }), 
                        _.map(objects, (object) => {
                            return !object.group && this.renderObject(object, 1);
                        }))
                )
                : null));
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = react_redux_1.connect(state => {
    return {
        sceneId: state.scene.sceneId,
        objectId: state.explorer.objectId,
        groupId: state.explorer.groupId,
        objects: state.storage.objects,
        groups: state.storage.groups,
        tags: state.storage.tags,
    };
}, dispatch => redux_1.mapDispatch(dispatch, [Actions_1.ObjectsTabActions, Actions_1.InspectorActions]))(ObjectsTab);
//# sourceMappingURL=ObjectsTab.js.map