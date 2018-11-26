import * as React from 'react';
import * as _ from 'lodash';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
darkBaseTheme.palette.primary1Color = '#333';
darkBaseTheme.palette.accent1Color = '#9C5F2A';
darkBaseTheme.palette.textColor = '#e2e2e2';

import { Tabs, Tab } from 'material-ui/Tabs';

import ExplorerView from 'views/explorer/ExplorerView';
import SceneView from 'views/scene/SceneView';
import InspectorView from 'views/inspector/InspectorView';
import ConsoleView from 'views/console/ConsoleView';
import TimelineView from 'views/timeline/TimelineView';
import ProfilerView from 'views/profiler/ProfilerView';

import { EXPLORER_TAB } from '../constants';

const TABS = {
    CONSOLE: EXPLORER_TAB[1],
    TIMELINE: EXPLORER_TAB[2],
    PROFILER: EXPLORER_TAB[3],
};

export default class MainView extends React.Component<any, any> {
    constructor(props) {
        super(props);

        this.state = {
            tab: TABS.TIMELINE,
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(key: string) {
        if (_.isString(key)) {
            this.setState({
                tab: key,
            });
        }
    }

    render() {
        return (
            <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
                <div className='main'>
                    <div className='left'>
                        <ExplorerView />
                    </div>
                    <div className='center'>
                        <SceneView />
                    </div>
                    <div className='right'>
                        <InspectorView />
                    </div>
                    <div ref='bottom' className='bottom'>
                        <Tabs value={this.state.tab} onChange={this.handleChange} className='tabs'>
                            <Tab label='Console' value={TABS.CONSOLE} className='tab'
                                disableTouchRipple={true} disableFocusRipple={true}>
                                <ConsoleView />
                            </Tab>
                            <Tab label='Timeline' value={TABS.TIMELINE} className='tab'
                                disableTouchRipple={true} disableFocusRipple={true}>
                                <TimelineView />
                            </Tab>
                            <Tab label='Profiler' value={TABS.PROFILER} className='tab'
                                disableTouchRipple={true} disableFocusRipple={true}>
                                <ProfilerView />
                            </Tab>
                        </Tabs>
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}