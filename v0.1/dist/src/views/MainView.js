"use strict";
const React = require('react');
const _ = require('lodash');
const MuiThemeProvider_1 = require('material-ui/styles/MuiThemeProvider');
const getMuiTheme_1 = require('material-ui/styles/getMuiTheme');
const darkBaseTheme_1 = require('material-ui/styles/baseThemes/darkBaseTheme');
darkBaseTheme_1.default.palette.primary1Color = '#333';
darkBaseTheme_1.default.palette.accent1Color = '#9C5F2A';
darkBaseTheme_1.default.palette.textColor = '#e2e2e2';
const Tabs_1 = require('material-ui/Tabs');
const ExplorerView_1 = require('views/explorer/ExplorerView');
const SceneView_1 = require('views/scene/SceneView');
const InspectorView_1 = require('views/inspector/InspectorView');
const ConsoleView_1 = require('views/console/ConsoleView');
const TimelineView_1 = require('views/timeline/TimelineView');
const ProfilerView_1 = require('views/profiler/ProfilerView');
const constants_1 = require('../constants');
const TABS = {
    CONSOLE: constants_1.EXPLORER_TAB[1],
    TIMELINE: constants_1.EXPLORER_TAB[2],
    PROFILER: constants_1.EXPLORER_TAB[3],
};
class MainView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tab: TABS.TIMELINE,
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
        return (React.createElement(MuiThemeProvider_1.default, {muiTheme: getMuiTheme_1.default(darkBaseTheme_1.default)}, 
            React.createElement("div", {className: 'main'}, 
                React.createElement("div", {className: 'left'}, 
                    React.createElement(ExplorerView_1.default, null)
                ), 
                React.createElement("div", {className: 'center'}, 
                    React.createElement(SceneView_1.default, null)
                ), 
                React.createElement("div", {className: 'right'}, 
                    React.createElement(InspectorView_1.default, null)
                ), 
                React.createElement("div", {ref: 'bottom', className: 'bottom'}, 
                    React.createElement(Tabs_1.Tabs, {value: this.state.tab, onChange: this.handleChange, className: 'tabs'}, 
                        React.createElement(Tabs_1.Tab, {label: 'Console', value: TABS.CONSOLE, className: 'tab', disableTouchRipple: true, disableFocusRipple: true}, 
                            React.createElement(ConsoleView_1.default, null)
                        ), 
                        React.createElement(Tabs_1.Tab, {label: 'Timeline', value: TABS.TIMELINE, className: 'tab', disableTouchRipple: true, disableFocusRipple: true}, 
                            React.createElement(TimelineView_1.default, null)
                        ), 
                        React.createElement(Tabs_1.Tab, {label: 'Profiler', value: TABS.PROFILER, className: 'tab', disableTouchRipple: true, disableFocusRipple: true}, 
                            React.createElement(ProfilerView_1.default, null)
                        ))
                ))
        ));
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = MainView;
//# sourceMappingURL=MainView.js.map