import React from 'react';

import { KiAccordionPaper } from 'kroppli-ui/accordions';

import { connect } from '../../../helpers';
import styles from '../styles';

import DetailsPanel from './DetailsPanel';

const InspectorView = ({ actions = {}, styles = {}, classes, ...store }) => {
    const imagesRightIcons = [
        {
            icons: ['lock', 'lock-open'],
            active: false,
            action: () => { },
        },
        {
            icons: ['close', 'check'],
            active: true,
            action: () => { },
        },
    ];

    const data = [
        {
            key: 'details',
            content: <DetailsPanel />,
            rightIcons: imagesRightIcons,
        },
        {
            key: 'images2',
            content: <div> images2</div>,
        },
        {
            key: 'images3',
            content: <div> images3</div>,
        },
        {
            key: 'images4',
            content: <div> images4</div>,
        },
    ];

    return (
        <div className={classes.root}>
            <KiAccordionPaper
                data={data}
                expandedKeys={store.accordion.expanded}
                actions={{
                    handleExpandItem: actions.inspector.accordion.expand,
                }}
            />
        </div>
    );
};

export default connect('inspector', styles.inspector, InspectorView);
