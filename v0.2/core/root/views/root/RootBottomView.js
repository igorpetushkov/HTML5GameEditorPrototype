import React from 'react';

import { KiTabs } from 'kroppli-ui/tabs';
import { KiHorizontalSash } from 'kroppli-ui/sash';

import TerminalView from '../../../terminal/views/TerminalView';

import { connect } from '../../../../helpers';
import styles from '../../styles';

const RootBottomView = ({ actions = {}, styles = {}, classes, ...store }) => {
    const data = [
        {
            key: 'terminal',
            label: 'terminal',
            content: <TerminalView />,
        },
        {
            key: 'timeline',
            label: 'timeline',
            content: <span>Timeline</span>,
        },
    ];

    return (
        <div className={classes.root} style={styles.root}>
            <KiHorizontalSash
                withPanelId={'canvas'}
                position={{
                    bottom: true,
                    minY: store.dmns.minHeight,
                    maxY: store.dmns.maxHeight,
                    topStartY: store.f_scene.toolbar.dmns.height + 3,
                }}
                actions={{
                    onChange: actions.root.sash.changeHorizontalSashX,
                }}
                styles={{
                    root: { marginTop: -2 },
                }}
            />
            <KiTabs
                selectedTab={store.tabs.selectedTab}
                data={data}
                actions={{
                    handleTabChange: actions.root.bottom.changeBottomTab,
                }}
                styles={{
                    content: { height: store.dmns.height },
                }}
                classes={{
                    root: classes.tabs,
                    tab: classes.tab,
                    bar: classes.bar,
                    content: classes.content,
                    indicator: classes.tabIndicator,
                    tabSelected: classes.tabSelected,
                    tabLabelContainer: classes.tabLabelContainer,
                    tabLabel: classes.tabLabel,
                }}
            />
        </div>
    );
};

export default connect('root.bottom', styles.bottom, RootBottomView);

