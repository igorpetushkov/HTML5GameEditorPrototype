import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';

import icons from '../icons';
import styles, { indicatorColor } from './styles';

const KiTabs = ({ selectedTab, data = [], actions = {}, styles = {}, classes }) => {
    const tab = _.find(data, { key: selectedTab }) || data[0];
    const index = _.indexOf(data, tab);

    return (
        <div className={classes.root} style={styles.root}>
            <AppBar position='static' className={classes.bar} style={styles.bar}>
                <Tabs
                    value={index}
                    indicatorColor={indicatorColor}
                    indicatorClassName={classes.indicator}
                    onChange={(event, value) => actions.handleTabChange({ key: data[value].key })}
                    classes={{
                        flexContainer: classes.flexContainer,
                    }}
                >
                    {data.map((tab, index) => {
                        const TabIcon = icons(tab.icon);
                        const clsTab = classes.tab + (tab.key === selectedTab ? ` ${classes.tabSelected}` : '');
                        return (
                            <Tab 
                                className={clsTab}
                                key={index}
                                label={tab.label}
                                icon={TabIcon && <TabIcon />}
                                style={tab.styles && tab.styles.root}
                                classes={{
                                    labelContainer: classes.tabLabelContainer,
                                    label: classes.tabLabel,
                                }}
                                disableRipple
                            />
                        );
                    })}
                </Tabs>
            </AppBar>
            <div className={classes.content} style={styles.content}>{tab.content || 'Empty'}</div>
        </div>
    );
};

KiTabs.propTypes = {
    selectedTab: PropTypes.string,
    data: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string,
        icon: PropTypes.string,
        content: PropTypes.any,
        styles: PropTypes.shape({
            root: PropTypes.object,
        }),
    })),
    actions: PropTypes.shape({
        handleTabChange: PropTypes.func.isRequired,
    }),
    styles: PropTypes.shape({
        root:  PropTypes.object,
        bar: PropTypes.object,
        content: PropTypes.object,
    }),
    classes: PropTypes.shape({
        root: PropTypes.string,
        bar: PropTypes.string,
        tab: PropTypes.string,
        tabSelected: PropTypes.string,
        content: PropTypes.string,
        indicator: PropTypes.string,
        flexContainer: PropTypes.string,
        tabLabelContainer: PropTypes.string,
        tabLabel: PropTypes.string,
    }),
};

export default withStyles(() => styles.tabs)(KiTabs);