import React from 'react';

import { KiTabs } from 'kroppli-ui/tabs';
import { KiVerticalSash } from 'kroppli-ui/sash';

import { connect } from '../../../../helpers';
import styles from '../../styles';

import ProfilerView from '../../../profiler/views/ProfilerView';
import InspectorView from '../../../inspector/views/InspectorView';

const RootRightView = ({ actions = {}, styles = {}, classes, ...store }) => {
    const data = [
        {   
            key: 'inspector',
            label: 'inspector',
            content: <InspectorView />,
        },
        {
            key: 'profiler',
            label: 'profiler',
            content: <ProfilerView />,
        },
    ];

    return (
        <div className={classes.root} style={styles.root} id='right'>
            <KiTabs
                selectedTab={store.tabs.selectedTab}
                data={data}
                actions={{
                    handleTabChange: actions.root.right.changeRightTab,
                }}
                classes={{
                    tab: classes.tab,
                    indicator: classes.tabIndicator,
                }}
            />
            <KiVerticalSash
                withPanelId={'right'}
                position={{
                    right: true,
                    minX: store.dmns.minWidth,
                    maxX: store.dmns.maxWidth,
                }}
                actions={{
                    onChange: actions.root.sash.changeVerticalSashX,
                }}
                styles={{
                    root: { marginRight: -2, top: 0, right: store.dmns.width },
                }}
            />
        </div>
    );
};

export default connect('root.right', styles.right, RootRightView);

