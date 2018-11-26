"use strict";
const React = require('react');
const Chip_1 = require('material-ui/Chip');
const Menu_1 = require('material-ui/Menu');
const MenuItem_1 = require('material-ui/MenuItem');
const Popover_1 = require('material-ui/Popover');
const TextField_1 = require('material-ui/TextField');
const FlatButton_1 = require('material-ui/FlatButton');
const add_1 = require('material-ui/svg-icons/content/add');
const clear_1 = require('material-ui/svg-icons/content/clear');
const done_1 = require('material-ui/svg-icons/action/done');
const subject_1 = require('material-ui/svg-icons/action/subject');
class ChipExampleArray extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showTagPanel: false,
            showCreateMenu: false,
        };
    }
    showAddTagPanel(show) {
        this.setState({
            showTagPanel: show,
        });
    }
    addTag() {
        const name = this.refs['add-tag-input']['input']['value'];
        const maxId = _.max(_.map(this.props.tags, 'id'));
        const tag = {
            id: maxId + 1,
            name: name,
        };
        this.props.changeTags(this.props.tags.concat(tag));
    }
    removeTag(tagId) {
        const tags = _(this.props.tags).reject({ id: tagId }).map('id').value();
        this.props.changeTags(tags);
    }
    ;
    actionMenuShow(event) {
        event.preventDefault();
        this.setState({
            showCreateMenu: true,
            anchorEl: event.currentTarget,
        });
    }
    actionMenuClose() {
        this.setState({
            showCreateMenu: false,
        });
    }
    getActionMenu() {
        const menu = [
            {
                label: 'Example1',
                handler: () => { },
            },
            {
                label: 'Example2',
                handler: () => { },
            },
            {
                label: 'Example3',
                handler: () => { },
            },
        ];
        return menu;
    }
    render() {
        const actionMenu = this.getActionMenu();
        return (React.createElement("table", {className: 'tags-field'}, 
            React.createElement("tbody", null, 
                React.createElement("tr", null, 
                    React.createElement("td", {className: 'tags'}, _.map(this.props.tags, (tag) => {
                        return (React.createElement(Chip_1.default, {key: tag.id, onRequestDelete: () => this.removeTag(tag.id)}, tag.name));
                    })), 
                    React.createElement("td", {className: 'options', onClick: () => this.showAddTagPanel(true)}, 
                        React.createElement(add_1.default, null)
                    )), 
                React.createElement("tr", null, 
                    React.createElement("td", null, 
                        React.createElement("div", {className: !this.state.showTagPanel ? 'hidden' : 'add-tag'}, 
                            React.createElement(FlatButton_1.default, {icon: React.createElement(subject_1.default, null), onClick: (event) => this.actionMenuShow(event)}), 
                            React.createElement(TextField_1.default, {ref: 'add-tag-input', id: 'add-tag-input', className: 'input'}), 
                            "    ", 
                            React.createElement(FlatButton_1.default, {icon: React.createElement(done_1.default, null), onClick: () => this.addTag()}), 
                            React.createElement(FlatButton_1.default, {icon: React.createElement(clear_1.default, null), onClick: () => this.showAddTagPanel(false)}), 
                            React.createElement(Popover_1.default, {open: this.state.showCreateMenu, anchorEl: this.state.anchorEl, anchorOrigin: { horizontal: 'left', vertical: 'bottom' }, targetOrigin: { horizontal: 'left', vertical: 'top' }, onRequestClose: () => this.actionMenuClose()}, 
                                React.createElement(Menu_1.default, null, _.map(actionMenu, (item, index) => {
                                    return (React.createElement(MenuItem_1.default, {key: index, primaryText: item.label, onClick: item.handler}));
                                }))
                            ))
                    )
                ))
        ));
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ChipExampleArray;
//# sourceMappingURL=TagsField.js.map