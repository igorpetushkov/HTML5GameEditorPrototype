import React from 'react';

import { KiAccordion } from 'kroppli-ui/accordions';

import { connect } from '../../../helpers';
import styles from '../styles';

import ImagesView from './images/ImagesView';
import TilemapsView from './tilemaps/TilemapsView';

const AssetsView = ({ actions = {}, styles = {}, classes, ...store }) => {
    const itemStyles = {
        content: {
            height: `calc(100vh - ${4 * 39}px)`,
        },
    };
    const data = [
        {
            key: 'images',
            content: <ImagesView />,
            styles: itemStyles,
        },
        {
            key: 'tilemaps',
            content: <TilemapsView />,
            styles: itemStyles,
        },
        {
            key: 'tilemaps2',
            content: <TilemapsView />,
            styles: itemStyles,
        },
        {
            key: 'tilemaps3',
            content: <TilemapsView />,
            styles: itemStyles,
        },
    ];

    return (
        <div className={classes.root}>
            <KiAccordion
                data={data}
                expandedKeys={store.accordion.expanded}
                actions={{
                    handleExpandItem: actions.assets.accordion.expand,
                }}
            />
        </div>
    );
};

export default connect('assets', styles.assets, AssetsView);