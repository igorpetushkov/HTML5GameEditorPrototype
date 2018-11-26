import React from 'react';

import { KiTabsVertical } from 'kroppli-ui/tabs';

import { connect } from '../../../helpers';
import styles from '../styles';

import ObjectsView from './objects/ObjectsView';
import ScenesView from './scenes/ScenesView';
import LayersView from './layers/LayersView';
import TagsView from './tags/TagsView';

const WorldView = ({ actions = {}, styles = {}, classes, ...store }) => {
    const data = [
        {
            key: 'objects',
            content: <ObjectsView />,
        },
        {
            key: 'scenes',
            content: <ScenesView />,
        },
        {
            key: 'layers',
            content: <LayersView />,
        },
        {
            key: 'tags',
            content: <TagsView />,
        },
    ];
    return (
        <div className={classes.root} style={styles.root}>
            <KiTabsVertical 
                selectedTab={store.tabs.selectedTab}
                data={data}
                actions={{
                    handleTabChange: actions.world.tabs.changeWorldTab,
                }}
                classes={{
                    bar: classes.bar,
                    tab: classes.tab,
                    content: classes.content,
                }}
            />
        </div>
    );
};

export default connect('world', styles.world, WorldView);
