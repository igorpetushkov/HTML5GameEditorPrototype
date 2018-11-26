import React from 'react';

import { KiTabs } from 'kroppli-ui/tabs';
import { KiVerticalSash } from 'kroppli-ui/sash';

import { connect } from '../../../../helpers';
import styles from '../../styles';

import WorldView from '../../../world/views/WorldView';
import ScriptsView from '../../../scripts/views/ScriptsView';
import AssetsView from '../../../assets/views/AssetsView';

const RootLeftView = ({ actions = {}, styles = {}, classes, ...store }) => {
    const data = [
        {   
            key: 'world',
            icon: 'videogame-asset',
            content: <WorldView />,
        },
        {
            key: 'scripts',
            icon: 'functions',
            content: <ScriptsView />,
        },
        {
            key: 'assets',
            icon: 'developer-board',
            content: <AssetsView />,
        },
        {
            key: 'system',
            icon: 'tune',
            content: <span>system</span>,
        }
    ];

    return (
        <div className={classes.root} style={styles.root} id='left'>
            <KiTabs
                selectedTab={store.tabs.selectedTab}
                data={data}
                actions={{
                    handleTabChange: actions.root.left.changeLeftTab,
                }}
                classes={{
                    tab: classes.tab,
                    indicator: classes.tabIndicator,
                }}
            />
            <KiVerticalSash
                withPanelId={'left'}
                position={{
                    left: true,
                    minX: store.dmns.minWidth,
                    maxX: store.dmns.maxWidth,
                }}
                actions={{
                    onChange: actions.root.sash.changeVerticalSashX,
                }}
                styles={{
                    root: { marginLeft: -2, top: 0, left: store.dmns.width },
                }}
            />
        </div>
    );
};

export default connect('root.left', styles.left, RootLeftView);

