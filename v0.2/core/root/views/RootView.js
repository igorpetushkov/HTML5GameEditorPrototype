import React from 'react';

import { connect } from '../../../helpers';
import styles from '../styles';

import ContextMenu from '../../menu/views/ContextMenu';
import RootLeftView from './root/RootLeftView';
import RootCenterView from './root/RootCenterView';
import RootRightView from './root/RootRightView';

const RootView = ({ actions = {}, styles = {}, classes, ...store }) => {
    return (
        <div className={classes.root} style={styles.root}>
            <RootLeftView
                styles={{
                    root: store.left.dmns,
                }}
            />
            <RootCenterView/>
            <RootRightView
                styles={{
                    root: store.right.dmns,
                }}
            />
            <ContextMenu />
        </div>
    );
};

export default connect('root', styles.root, RootView);