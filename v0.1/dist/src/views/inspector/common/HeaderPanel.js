"use strict";
const React = require('react');
const Menu_1 = require('material-ui/Menu');
const MenuItem_1 = require('material-ui/MenuItem');
const Popover_1 = require('material-ui/Popover');
const FlatButton_1 = require('material-ui/FlatButton');
const TextField_1 = require('material-ui/TextField');
const clear_1 = require('material-ui/svg-icons/content/clear');
const subject_1 = require('material-ui/svg-icons/action/subject');
class HeaderPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editName: false,
            showCreateMenu: false,
            showTip: false,
        };
    }
    changeName(name) {
        this.props.changeObject(_.assign({}, this.props.data, { name: name }));
    }
    toggleEditName() {
        this.setState({
            editName: !this.state.editName,
        });
    }
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
            showTip: false,
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
    toggleTip(show) {
        this.setState({
            showTip: show,
        });
    }
    render() {
        const name = this.props.data.name;
        const editName = this.state.editName;
        const showTip = this.state.showTip;
        const actionMenu = this.getActionMenu();
        return (React.createElement("div", {className: 'header'}, 
            React.createElement("div", {className: !editName ? 'view' : 'view hidden'}, 
                React.createElement("div", {className: 'name', title: name, onClick: () => this.toggleEditName(), onMouseEnter: () => this.toggleTip(true), onMouseLeave: () => this.toggleTip(false)}, name), 
                React.createElement("span", {className: showTip ? 'tip' : 'tip hidden'}, "edit"), 
                React.createElement(FlatButton_1.default, {icon: React.createElement(subject_1.default, null), onClick: (event) => this.actionMenuShow(event)}), 
                React.createElement(FlatButton_1.default, {label: 'Add component', onClick: () => { }}), 
                React.createElement(Popover_1.default, {open: this.state.showCreateMenu, anchorEl: this.state.anchorEl, anchorOrigin: { horizontal: 'left', vertical: 'bottom' }, targetOrigin: { horizontal: 'left', vertical: 'top' }, onRequestClose: () => this.actionMenuClose()}, 
                    React.createElement(Menu_1.default, null, _.map(actionMenu, (item, index) => {
                        return (React.createElement(MenuItem_1.default, {key: index, primaryText: item.label, onClick: item.handler}));
                    }))
                )), 
            React.createElement("div", {className: editName ? 'edit' : 'edit hidden'}, 
                React.createElement(TextField_1.default, {id: 'edit-name-input', className: 'input'}), 
                React.createElement(FlatButton_1.default, {icon: React.createElement(clear_1.default, null), onClick: () => this.toggleEditName()}), 
                React.createElement(FlatButton_1.default, {label: 'Save', onClick: () => { }}))));
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = HeaderPanel;
//# sourceMappingURL=HeaderPanel.js.map