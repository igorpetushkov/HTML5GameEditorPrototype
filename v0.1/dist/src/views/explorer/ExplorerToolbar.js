"use strict";
const React = require('react');
const FlatButton_1 = require('material-ui/FlatButton');
const TextField_1 = require('material-ui/TextField');
const Menu_1 = require('material-ui/Menu');
const MenuItem_1 = require('material-ui/MenuItem');
const Popover_1 = require('material-ui/Popover');
const refresh_1 = require('material-ui/svg-icons/navigation/refresh');
const sort_by_alpha_1 = require('material-ui/svg-icons/av/sort-by-alpha');
const search_1 = require('material-ui/svg-icons/action/search');
class ExplorerToolbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showSearchMenu: false,
            showSortMenu: false,
        };
    }
    render() {
        const styleBtn = {
            minWidth: '35px',
            height: '20px',
            lineHeight: '17px',
            border: '1px solid #3E474A',
            marginRight: '5px',
        };
        const handleSortMenuClose = () => {
            this.setState({
                showSortMenu: false,
            });
        };
        const handleSortMenuShow = (event) => {
            event.preventDefault();
            this.setState({
                showSortMenu: true,
                anchorEl: event.currentTarget,
            });
        };
        const handleSearchMenuClose = () => {
            this.setState({
                showSearchMenu: false,
            });
        };
        const handleSearchMenuShow = (event) => {
            event.preventDefault();
            this.setState({
                showSearchMenu: true,
                anchorEl: event.currentTarget,
            });
        };
        const isSortBtn = !!this.props.sortHandler;
        const isRefreshBtn = !!this.props.refreshHandler;
        return (React.createElement("div", {className: 'toolbar'}, 
            isSortBtn ?
                React.createElement(FlatButton_1.default, {style: styleBtn, icon: React.createElement(sort_by_alpha_1.default, null), onClick: (event) => handleSortMenuShow(event)})
                : null, 
            isRefreshBtn ?
                React.createElement(FlatButton_1.default, {style: styleBtn, icon: React.createElement(refresh_1.default, null), onClick: () => this.props.refreshHandler()})
                : null, 
            React.createElement(FlatButton_1.default, {style: styleBtn, icon: React.createElement(search_1.default, null), onClick: (event) => handleSearchMenuShow(event)}), 
            React.createElement(Popover_1.default, {open: this.state.showSortMenu, anchorEl: this.state.anchorEl, anchorOrigin: { horizontal: 'left', vertical: 'bottom' }, targetOrigin: { horizontal: 'left', vertical: 'top' }, onRequestClose: () => handleSortMenuClose()}, 
                React.createElement(Menu_1.default, null, 
                    React.createElement(MenuItem_1.default, {primaryText: 'Example1 ttt', onClick: () => handleSortMenuClose()}), 
                    React.createElement(MenuItem_1.default, {primaryText: 'Example2 tt'}), 
                    React.createElement(MenuItem_1.default, {primaryText: 'Example3 tt'}), 
                    React.createElement(MenuItem_1.default, {primaryText: 'Example4 ttt'}))
            ), 
            React.createElement(Popover_1.default, {open: this.state.showSearchMenu, anchorEl: this.state.anchorEl, anchorOrigin: { horizontal: 'left', vertical: 'bottom' }, targetOrigin: { horizontal: 'left', vertical: 'top' }, onRequestClose: () => handleSearchMenuClose()}, 
                React.createElement(Menu_1.default, null, 
                    React.createElement(MenuItem_1.default, {primaryText: 'Example1 ert', onClick: () => handleSearchMenuClose()}), 
                    React.createElement(MenuItem_1.default, {primaryText: 'Example2 ert'}), 
                    React.createElement(MenuItem_1.default, {primaryText: 'Example3 ert'}), 
                    React.createElement(MenuItem_1.default, {primaryText: 'Example4 ert'}))
            ), 
            React.createElement(TextField_1.default, {id: 'search-input', className: 'input'})));
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ExplorerToolbar;
//# sourceMappingURL=ExplorerToolbar.js.map