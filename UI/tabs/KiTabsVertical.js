import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles';

import { KiFlatButton } from '../buttons';
import styles from './styles';

const KiTabsVertical = ({ selectedTab, data = [], actions = {}, styles = {}, classes }) => {
    const tab = _.find(data, { key: selectedTab }) || data[0];

    return (
        <div className={classes.root} style={styles.root}>
            <div className={classes.bar}>
                {data.map((tab, index) => {
                    return (
                        <KiFlatButton
                            key={index}
                            label={tab.key.toUpperCase().split('').join(' ')}
                            selected={tab.key === selectedTab}
                            disabled={tab.disabled}
                            actions={{ handleClick: () => actions.handleTabChange({ key: tab.key }) }}
                            styles={{
                                root: tab.style,
                            }}
                            classes={{
                                root: classes.tab + (tab.key === selectedTab ? ` ${classes.tabSelected}` : ''),
                            }}
                        />
                    );
                })}
            </div>
            <div className={classes.content}>
                {tab.content}
            </div>
        </div>
    );
};

KiTabsVertical.propTypes = {
    selectedTab: PropTypes.string,
    data: PropTypes.arrayOf(PropTypes.shape({
        key: PropTypes.string,
        content: PropTypes.any,
        style: PropTypes.object,
    })),
    actions: PropTypes.shape({
        handleTabChange: PropTypes.func.isRequired,
    }).isRequired,
    styles: PropTypes.shape({
        root: PropTypes.object,
    }),
    classes: PropTypes.shape({
        root: PropTypes.string,
        bar: PropTypes.string,
        tab: PropTypes.string,
        tabSelected: PropTypes.string,
        label: PropTypes.string,
        content: PropTypes.string,
    }),
};

export default withStyles(() => styles.tabsVertical)(KiTabsVertical);