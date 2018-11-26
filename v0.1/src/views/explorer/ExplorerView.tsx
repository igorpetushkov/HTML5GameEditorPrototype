import * as React from 'react';
import { connect } from 'react-redux';

import { Tabs, Tab } from 'material-ui/Tabs';
import ScenesTabIcon from 'material-ui/svg-icons/hardware/videogame-asset';
import AssetsTabIcon from 'material-ui/svg-icons/hardware/developer-board';
import ScriptsTabIcon from 'material-ui/svg-icons/editor/functions';
import GameTabIcon from 'material-ui/svg-icons/image/tune';

import AssetsTab from 'views/explorer/tabs/AssetsTab';
import ObjectsTab from 'views/explorer/tabs/ObjectsTab';
import ScriptsTab from 'views/explorer/tabs/ScriptsTab';
import SystemTab from 'views/explorer/tabs/SystemTab';

import { EXPLORER_TAB } from '../../constants';

const TABS = {
    OBJECTS: EXPLORER_TAB[1],
    ASSETS: EXPLORER_TAB[2],
    SCRIPTS: EXPLORER_TAB[3],
    SYSTEM: EXPLORER_TAB[4],
};

class ExplorerView extends React.Component<any, any> {
    constructor(props, state) {
        super(props, state);

        this.state = {
            tab: TABS.ASSETS,
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
            <div className='explorer'>
                <Tabs value={this.state.tab} onChange={this.handleChange} className='tabs'>
                    <Tab value={TABS.OBJECTS} className='tab' icon={<ScenesTabIcon />}>
                        <ObjectsTab />
                    </Tab>
                    <Tab value={TABS.ASSETS} className='tab' icon={<AssetsTabIcon />}>
                        <AssetsTab />
                    </Tab>
                    <Tab value={TABS.SCRIPTS} className='tab' icon={<ScriptsTabIcon />}>
                        <ScriptsTab />
                    </Tab>
                    <Tab value={TABS.SYSTEM} className='tab' icon={<GameTabIcon />}>
                        <SystemTab />
                    </Tab>
                </Tabs>
            </div>
        );
    }
}

export default connect(state => { return {}; })(ExplorerView);