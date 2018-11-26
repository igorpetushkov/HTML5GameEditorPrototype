"use strict";
const React = require('react');
const react_redux_1 = require('react-redux');
const buildTree_1 = require('lib/buildTree');
const redux_1 = require('lib/redux');
const TreeView_1 = require('views/common/TreeView');
const ExplorerToolbar_1 = require('views/explorer/ExplorerToolbar');
const constants_1 = require('../../../constants');
const Actions_1 = require('redux/Actions');
class ScriptsTab extends React.Component {
    constructor(props) {
        super(props);
    }
    selectScript(scriptId) {
        if (scriptId !== this.props.scriptId) {
            this.props.selectScript(scriptId);
            this.props.changePoint(constants_1.INSPECTOR_POINT.SCRIPTS, scriptId);
        }
        else {
            this.props.selectScript(0);
            this.props.clearPoint();
        }
    }
    toggleBranch(branchId) {
        this.props.toggleBranch(branchId);
    }
    render() {
        const { scripts, scriptId, scriptBranches } = this.props;
        const data = buildTree_1.default(scripts);
        return (React.createElement("div", {className: 'scripts'}, 
            React.createElement(ExplorerToolbar_1.default, {refreshHandler: () => { }, filterHandler: () => { }}), 
            React.createElement("div", {className: 'item-list'}, 
                React.createElement(TreeView_1.default, {data: data, openedBranches: scriptBranches, selectedItemId: scriptId, selectItemHandler: scriptId => this.selectScript(scriptId), toggleBranchHandler: branchId => this.toggleBranch(branchId), emptyMsg: 'No scripts.'})
            )));
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = react_redux_1.connect(state => {
    return {
        scripts: state.storage.scripts,
        scriptId: state.explorer.scriptId,
        scriptBranches: state.explorer.scriptBranches,
    };
}, dispatch => redux_1.mapDispatch(dispatch, [Actions_1.ScriptsTabActions, Actions_1.InspectorActions]))(ScriptsTab);
//# sourceMappingURL=ScriptsTab.js.map