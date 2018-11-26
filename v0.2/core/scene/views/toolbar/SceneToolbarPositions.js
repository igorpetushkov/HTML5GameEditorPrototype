import React from 'react';

import { KiFlatButton } from 'kroppli-ui/buttons';

import { connect } from '../../../../helpers';
import styles from '../../styles';

const SceneToolbarPositions = ({ actions = {}, styles = {}, classes, ...store }) => {
    const btnClasses = {
        root: classes.button,
        icon: classes.buttonIcon,
    };

    return (
        <div className={classes.root}>
            <KiFlatButton
                icon={'open-with'}
                selected={store.move}
                actions={{
                    handleClick: () => actions.scene.positions.move({}),
                }}
                classes={btnClasses}
            />
            <KiFlatButton
                icon={'settings-ethernet'}
                selected={store.scale}
                actions={{
                    handleClick: () => actions.scene.positions.scale({}),
                }}
                classes={btnClasses}
                styles={{
                    root: { marginLeft: 4 },
                }}
            />
            <KiFlatButton
                label={store.rotateLeft || store.rotateRight || store.rotate90 ? '+' : null}
                icon={'cached'}
                selected={store.rotate}
                actions={{
                    handleClick: () => actions.scene.positions.rotate({}),
                }}
                classes={{
                    root: `${btnClasses.root} ${classes.rotate}`,
                    icon: btnClasses.icon,
                }}
                styles={{
                    root: { marginLeft: 4 },
                }}
            />
            <div className={classes.extra}>
                <KiFlatButton
                    icon={'rotate-left'}
                    selected={store.rotateLeft}
                    actions={{
                        handleClick: () => actions.scene.positions.rotateLeft({}),
                    }}
                    classes={btnClasses}
                    styles={{
                        root: { width: 36 },
                    }}
                />
                <KiFlatButton
                    icon={'rotate-right'}
                    selected={store.rotateRight}
                    actions={{
                        handleClick: () => actions.scene.positions.rotateRight({}),
                    }}
                    classes={btnClasses}
                    styles={{
                        root: { marginLeft: 4, width: 36 },
                    }}
                />
                <KiFlatButton
                    icon={'rotate-90-degrees-ccw'}
                    selected={store.rotate90}
                    actions={{
                        handleClick: () => actions.scene.positions.rotate90({}),
                    }}
                    classes={btnClasses}
                    styles={{
                        root: { marginLeft: 4, width: 36 },
                    }}
                />
            </div>
        </div>
    );
};

export default connect('scene.toolbar.positions', styles.toolbarPositions, SceneToolbarPositions);

