"use strict";
const React = require('react');
const react_redux_1 = require('react-redux');
const Tabs_1 = require('material-ui/Tabs');
const videogame_asset_1 = require('material-ui/svg-icons/hardware/videogame-asset');
const developer_board_1 = require('material-ui/svg-icons/hardware/developer-board');
const functions_1 = require('material-ui/svg-icons/editor/functions');
const tune_1 = require('material-ui/svg-icons/image/tune');
const AssetsTab_1 = require('views/explorer/tabs/AssetsTab');
const ObjectsTab_1 = require('views/explorer/tabs/ObjectsTab');
const ScriptsTab_1 = require('views/explorer/tabs/ScriptsTab');
const SystemTab_1 = require('views/explorer/tabs/SystemTab');
const constants_1 = require('../../constants');
const TABS = {
    OBJECTS: constants_1.EXPLORER_TAB[1],
    ASSETS: constants_1.EXPLORER_TAB[2],
    SCRIPTS: constants_1.EXPLORER_TAB[3],
    SYSTEM: constants_1.EXPLORER_TAB[4],
};
class ExplorerView extends React.Component {
    constructor(props, state) {
        super(props, state);
        this.state = {
            tab: TABS.ASSETS,
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(key) {
        if (_.isString(key)) {
            this.setState({
                tab: key,
            });
        }
    }
    render() {
        return (React.createElement("div", {className: 'explorer'}, 
            React.createElement(Tabs_1.Tabs, {value: this.state.tab, onChange: this.handleChange, className: 'tabs'}, 
                React.createElement(Tabs_1.Tab, {value: TABS.OBJECTS, className: 'tab', icon: React.createElement(videogame_asset_1.default, null)}, 
                    React.createElement(ObjectsTab_1.default, null)
                ), 
                React.createElement(Tabs_1.Tab, {value: TABS.ASSETS, className: 'tab', icon: React.createElement(developer_board_1.default, null)}, 
                    React.createElement(AssetsTab_1.default, null)
                ), 
                React.createElement(Tabs_1.Tab, {value: TABS.SCRIPTS, className: 'tab', icon: React.createElement(functions_1.default, null)}, 
                    React.createElement(ScriptsTab_1.default, null)
                ), 
                React.createElement(Tabs_1.Tab, {value: TABS.SYSTEM, className: 'tab', icon: React.createElement(tune_1.default, null)}, 
                    React.createElement(SystemTab_1.default, null)
                ))
        ));
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = react_redux_1.connect(state => { return {}; })(ExplorerView);
//# sourceMappingURL=ExplorerView.js.map