"use strict";
const _ = require('lodash');
const React = require('react');
const classNames = require('classnames');
const expand_more_1 = require('material-ui/svg-icons/navigation/expand-more');
const expand_less_1 = require('material-ui/svg-icons/navigation/expand-less');
class TreeView extends React.Component {
    renderTree(tree, level = 0, opened = false) {
        const clNameBranch = classNames({
            'branch': level === 0,
            'branch-opened': opened,
            'branch-close': !opened,
            ['subbranch-' + level]: level > 0,
        });
        if (!tree.length) {
            return (React.createElement("span", {className: 'empty-msg'}, this.props.emptyMsg));
        }
        return (React.createElement("ul", {className: clNameBranch}, 
            _.map(tree, (item, index) => {
                const clNameItem = classNames({
                    'li-branch': !!item.items,
                    'li-item': !item.items,
                    'selected': item.id === this.props.selectedItemId,
                });
                const branchIconStyle = {
                    width: '15px',
                    height: '13px',
                    marginRight: '3px',
                };
                const spanStyle = {
                    paddingTop: '6px',
                    paddingBottom: '6px',
                };
                const branchOpened = _.includes(this.props.openedBranches, item.id);
                const itemHandler = () => this.props.selectItemHandler(item.id);
                const branchHandler = () => this.props.toggleBranchHandler(item.id);
                return (React.createElement("li", {key: item.id, className: clNameItem, onClick: !item.items && itemHandler}, 
                    item.items &&
                        (branchOpened
                            ? React.createElement(expand_less_1.default, {onClick: branchHandler, style: branchIconStyle})
                            : React.createElement(expand_more_1.default, {onClick: branchHandler, style: branchIconStyle})), 
                    React.createElement("span", {onClick: item.items && branchHandler, className: item.items ? 'item-branch' : 'item-nonbranch', style: spanStyle}, item.name), 
                    item.items && this.renderTree(item.items, level + 1, branchOpened)));
            }), 
            !tree.length ? React.createElement("span", null, this.props.emptyMsg) : null));
    }
    render() {
        return this.renderTree(this.props.data);
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TreeView;
//# sourceMappingURL=TreeView.js.map