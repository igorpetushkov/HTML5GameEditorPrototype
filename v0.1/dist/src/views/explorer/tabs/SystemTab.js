"use strict";
const React = require('react');
const react_redux_1 = require('react-redux');
const classNames = require('classnames');
const MenuItem_1 = require('material-ui/MenuItem');
const IconButton_1 = require('material-ui/IconButton');
const IconMenu_1 = require('material-ui/IconMenu');
const Divider_1 = require('material-ui/Divider');
const FlatButton_1 = require('material-ui/FlatButton');
const subject_1 = require('material-ui/svg-icons/action/subject');
const library_books_1 = require('material-ui/svg-icons/av/library-books');
const content_copy_1 = require('material-ui/svg-icons/content/content-copy');
const redux_1 = require('lib/redux');
const Actions_1 = require('redux/Actions');
const constants_1 = require('../../../constants');
class GameTab extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            groupOpenedIds: [],
        };
    }
    selectGroupItem(itemId, groupId) {
        const systemItemId = groupId === constants_1.SYSTEM_GROUP.SCENES ? this.props.systemSceneId : this.props.systemLayerId;
        const btnRef = `item${itemId}_${groupId}`;
        if (itemId !== systemItemId) {
            this.props.selectGroupItem(itemId, groupId);
            this.props.changePoint(groupId, itemId);
            this.toggleExtraBtn(btnRef, true);
        }
        else {
            if (groupId === constants_1.SYSTEM_GROUP.SCENES && this.isExtraBtnOpened(btnRef)) {
                return;
            }
            this.props.selectGroupItem(0, groupId);
            this.props.clearPoint();
            this.toggleExtraBtn(btnRef, false);
        }
    }
    selectGroup(groupId) {
        let grScenes = groupId === constants_1.SYSTEM_GROUP.SCENES && !this.props.systemSceneGroupSelected && constants_1.SYSTEM_GROUP.SCENES;
        let grLayers = groupId === constants_1.SYSTEM_GROUP.LAYERS && !this.props.systemLayerGroupSelected && constants_1.SYSTEM_GROUP.LAYERS;
        if (grScenes || grLayers) {
            this.props.selectGroup(groupId);
            this.props.changePoint(grScenes || grLayers, -1);
        }
        else {
            this.props.selectGroup(0);
            this.props.clearPoint();
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
    renderItem(item, groupId, selected) {
        const key = `item${item.id}_${groupId}`;
        const clName = classNames({
            'objects-file': true,
            'selected': selected,
        });
        const clNameLabel = classNames({
            'objects-file-label-level2': true,
        });
        const isSceneGroup = groupId === constants_1.SYSTEM_GROUP.SCENES;
        return (React.createElement("li", {key: key, className: clName, onClick: () => this.selectGroupItem(item.id, groupId), onMouseEnter: isSceneGroup && selected && (() => this.toggleExtraBtn(key, true)), onMouseLeave: isSceneGroup && selected && (() => this.toggleExtraBtn(key, false))}, 
            React.createElement("div", {className: clNameLabel}, item.name), 
            isSceneGroup && this.renderExtraBtn(key)));
    }
    renderGroup(groupId, items, systemItemId, selected) {
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
        return (React.createElement("li", {key: key, className: clName}, 
            opened ?
                React.createElement(content_copy_1.default, {className: clNameIcon, onClick: () => this.closeGroup(groupId)}) :
                React.createElement(library_books_1.default, {className: clNameIcon, onClick: () => this.openedGroup(groupId)}), 
            React.createElement("span", {className: clNameLabel, onClick: () => this.selectGroup(groupId)}, _.upperFirst(_.toLower(constants_1.SYSTEM_GROUP[groupId]))), 
            React.createElement("div", {className: 'create-btn'}, opened && React.createElement(FlatButton_1.default, {label: 'Create', onClick: (event) => { }})), 
            React.createElement("ul", {className: clNameGroupBranch}, _.map(items, item => {
                return this.renderItem(item, groupId, item.id === systemItemId);
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
        const { scenes, layers, systemSceneId, systemLayerId, systemSceneGroupSelected, systemLayerGroupSelected, } = this.props;
        return (React.createElement("div", {className: 'system'}, 
            React.createElement("div", {className: 'item-list'}, 
                React.createElement("ul", {className: 'branch'}, 
                    this.renderGroup(constants_1.SYSTEM_GROUP.SCENES, scenes, systemSceneId, systemSceneGroupSelected), 
                    this.renderGroup(constants_1.SYSTEM_GROUP.LAYERS, layers, systemLayerId, systemLayerGroupSelected))
            )
        ));
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = react_redux_1.connect(state => {
    return {
        scenes: state.storage.scenes,
        layers: state.storage.layers,
        systemSceneId: state.explorer.systemSceneId,
        systemLayerId: state.explorer.systemLayerId,
        systemSceneGroupSelected: state.explorer.systemSceneGroupSelected,
        systemLayerGroupSelected: state.explorer.systemLayerGroupSelected,
    };
}, dispatch => redux_1.mapDispatch(dispatch, [Actions_1.SystemTabActions, Actions_1.InspectorActions]))(GameTab);
//# sourceMappingURL=SystemTab.js.map