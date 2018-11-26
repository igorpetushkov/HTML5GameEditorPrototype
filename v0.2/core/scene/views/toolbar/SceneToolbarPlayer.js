import React from 'react';

import { KiFlatButton } from 'kroppli-ui/buttons';

import { connect } from '../../../../helpers';
import styles from '../../styles';

const SceneToolbarPlayer = ({ actions = {}, styles = {}, classes, ...store }) => {
    const btnClasses = {
        root: classes.button,
        icon: classes.buttonIcon,
    };

    return (
        <div className={classes.root}>
            <KiFlatButton
                icon={'skip-previous'}
                disabled={!store.pre}
                actions={{
                    handleClick: () => actions.scene.player.skipPrevious({}),
                }}
                classes={btnClasses}
            />
            {store.play ?
                <KiFlatButton
                    icon={'play-arrow'}
                    actions={{
                        handleClick: () => actions.scene.player.play({}),
                    }}
                    classes={btnClasses}
                    styles={{
                        root: { marginLeft: 4, color: '#DEA57E' },
                    }}
                /> : null}
            {store.pause ?
                <KiFlatButton
                    icon={'pause'}
                    actions={{
                        handleClick: () => actions.scene.player.pause({}),
                    }}
                    classes={btnClasses}
                    styles={{
                        root: { marginLeft: 4, color: '#DEA57E' },
                    }}
                /> : null}
            <KiFlatButton
                icon={'stop'}
                disabled={!store.stop}
                actions={{
                    handleClick: () => actions.scene.player.stop({}),
                }}
                classes={btnClasses}
                styles={{
                    root: { marginLeft: 4, color: '#D94C4A' },
                }}
            />
            <KiFlatButton
                icon={'skip-next'}
                disabled={!store.next}
                actions={{
                    handleClick: () => actions.scene.player.skipNext({}),
                }}
                classes={btnClasses}
                styles={{
                    root: { marginLeft: 4 },
                }}
            />
        </div>
    );
};

export default connect('scene.toolbar.player', styles.toolbarPlayer, SceneToolbarPlayer);

