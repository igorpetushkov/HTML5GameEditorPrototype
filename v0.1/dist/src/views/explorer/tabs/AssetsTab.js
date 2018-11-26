"use strict";
const _ = require('lodash');
const React = require('react');
const react_redux_1 = require('react-redux');
const classNames = require('classnames');
const RaisedButton_1 = require('material-ui/RaisedButton');
const IconButton_1 = require('material-ui/IconButton');
const view_list_1 = require('material-ui/svg-icons/action/view-list');
const view_module_1 = require('material-ui/svg-icons/action/view-module');
const buildTree_1 = require('lib/buildTree');
const redux_1 = require('lib/redux');
const TreeView_1 = require('views/common/TreeView');
const ExplorerToolbar_1 = require('views/explorer/ExplorerToolbar');
const constants_1 = require('../../../constants');
const Actions_1 = require('redux/Actions');
class AssetsTab extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            group: 'images',
        };
    }
    selectAsset(assetId, group) {
        let point = null;
        switch (group) {
            case constants_1.ASSET_GROUP.IMAGES:
                point = constants_1.INSPECTOR_POINT.IMAGES;
                break;
            case constants_1.ASSET_GROUP.TILEMAPS:
                point = constants_1.INSPECTOR_POINT.TILEMAPS;
                break;
        }
        if (point && assetId !== this.props.imageId && assetId !== this.props.tilemapsId) {
            this.props.selectAsset(assetId, group);
            this.props.changePoint(point, assetId);
        }
        else {
            this.props.selectAsset(0, group);
            this.props.clearPoint();
        }
    }
    toggleBranch(branchId, group) {
        this.props.toggleBranch(branchId, group);
    }
    changegroup(group) {
        this.setState({
            group: group,
        });
    }
    render() {
        const { imageId, tilemapId, imageBranches, tilemapBranches } = this.props;
        const assetGroups = _(constants_1.ASSET_GROUP).values().filter(_.isString).map(_.toLower).value();
        const selectedData = (group) => {
            switch (group) {
                case 'images':
                    return [imageId, imageBranches, constants_1.ASSET_GROUP.IMAGES];
                case 'tilemaps':
                    return [tilemapId, tilemapBranches, constants_1.ASSET_GROUP.TILEMAPS];
                default:
                    return [];
            }
        };
        return (React.createElement("div", {className: 'assets'}, 
            React.createElement(ExplorerToolbar_1.default, {refreshHandler: () => { }, filterHandler: () => { }}), 
            _.map(assetGroups, (group, index) => {
                const clName = classNames({
                    'group-btn': true,
                    'group-btn-selected': this.state.group === group,
                });
                const clNameList = classNames({
                    'item-list': true,
                    'hidden': this.state.group !== group,
                });
                const [selectedItemId, openedBranches, selectedgroup] = selectedData(group);
                const data = buildTree_1.default(this.props[group] ? this.props[group] : []);
                return (React.createElement("div", {key: index}, 
                    React.createElement(RaisedButton_1.default, {label: group, fullWidth: true, className: clName, onClick: () => this.changegroup(group)}), 
                    this.props[group] ?
                        React.createElement("div", {className: clNameList}, 
                            React.createElement("div", {className: 'assets-list-header'}, 
                                React.createElement("span", {className: 'selected'}, "loaded"), 
                                " / ", 
                                React.createElement("span", null, "not loaded"), 
                                React.createElement("div", null, 
                                    React.createElement(IconButton_1.default, {className: 'icon-btn selected'}, 
                                        React.createElement(view_list_1.default, null)
                                    ), 
                                    "/", 
                                    React.createElement(IconButton_1.default, {className: 'icon-btn'}, 
                                        React.createElement(view_module_1.default, null)
                                    ))), 
                            React.createElement(TreeView_1.default, {data: data, openedBranches: openedBranches || [], selectedItemId: selectedItemId, selectItemHandler: assetId => this.selectAsset(assetId, selectedgroup), toggleBranchHandler: branchId => this.toggleBranch(branchId, selectedgroup), emptyMsg: `No ${group}.`}))
                        : null));
            })));
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = react_redux_1.connect(state => {
    return {
        images: state.storage.images,
        tilemaps: state.storage.tilemaps,
        imageId: state.explorer.imageId,
        imageBranches: state.explorer.imageBranches,
        tilemapId: state.explorer.tilemapId,
        tilemapBranches: state.explorer.tilemapBranches,
    };
}, dispatch => redux_1.mapDispatch(dispatch, [Actions_1.AssetsTabActions, Actions_1.InspectorActions]))(AssetsTab);
//# sourceMappingURL=AssetsTab.js.map