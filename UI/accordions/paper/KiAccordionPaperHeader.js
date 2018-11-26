/* eslint-disable react/self-closing-comp */

import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles';

import { KiFlatButton } from '../../buttons';
import styles from './styles';

const KiAccordionPaperHeader = ({ label, expanded, rightIcons = [], actions = {}, styles = {}, classes }) => {
    const clsRoot = classes.root +
        (expanded ? ` ${classes.rootExpanded}` : '');

    const clsButton = classes.button +
        (expanded ? ` ${classes.buttonExpanded}` : '');

    return (
        <div className={clsRoot} style={styles.root}>
            <KiFlatButton
                label={label}
                icon={expanded ? 'keyboard-arrow-up' : 'keyboard-arrow-down'}
                actions={{
                    handleClick: actions.handleExpand,
                }}
                classes={{
                    root: clsButton,
                }}
                styles={{
                    root: { width: `calc(100% - ${rightIcons.length * 27}px)` },
                }}
            />

            {rightIcons.length ?
                <div className={classes.rigthIconsPanel}>
                    {rightIcons.map((rightIcon, index) => {
                        return (
                            <KiFlatButton
                                key={index}
                                icon={rightIcon.active ? rightIcon.icons[1] : rightIcon.icons[0]}
                                size={{
                                    xsmall: true,
                                    smallb0: true,
                                }}
                                actions={{
                                    handleClick: rightIcon.action,
                                }}
                            />
                        );
                    })}
                </div>
                : null}

            {expanded ? <div className={classes.hr}></div> : null}
        </div>
    );
};

KiAccordionPaperHeader.propTypes = {
    label: PropTypes.string,
    expanded: PropTypes.bool,
    rightIcons: PropTypes.arrayOf(PropTypes.shape({
        icons: PropTypes.arrayOf(PropTypes.string),
        active: PropTypes.bool,
        action: PropTypes.func,
    })),
    actions: PropTypes.shape({
        handleExpand: PropTypes.func.isRequired,
    }),
    styles: PropTypes.shape({
        root: PropTypes.object,
    }),
    classes: PropTypes.shape({
        root: PropTypes.string,
        rootExpanded: PropTypes.string,
        button: PropTypes.string,
        buttonExpanded: PropTypes.string,
        hr: PropTypes.string,
    }),
};

export default withStyles(() => styles.header)(KiAccordionPaperHeader);