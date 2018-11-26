import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles';

import { KiTextInput } from '../../inputs';
import { KiMenuInputField } from '../../fields';
import { KiFlatButton } from '../../buttons';
import styles from './styles';

const KiTreeListSearch = ({ search = {}, actions = {}, styles = {}, classes }) => {
    const clsMask = classes.mask +
        (search.value ? ` ${classes.maskSeached}` : '');

    return (
        <div className={classes.root}>
            {search.mask ?
                <div className={clsMask} onClick={actions.handleToggleSearch}>
                    <div className={classes.maskData}>174 objects with 40 groups</div>
                    <KiFlatButton
                        icon={'filter-list'}
                        size={{
                            xsmall: true,
                            smallb0: true,
                        }}
                        actions={{
                            handleClick: () => { },
                        }}
                        classes={{
                            root: classes.maskButton,
                        }}
                    />
                </div> :
                <KiMenuInputField
                    input={{
                        component: KiTextInput,
                        props: {
                            value: search.value,
                            placeholder: 'Search all',
                            actions: {
                                handleInputChange: () => {},
                                
                            },
                            classes: {
                                root: classes.input,
                                inkbar: classes.inkbar,
                            }
                        },
                    }}
                    icons={{
                        menu: 'format-size',
                        apply: 'check',
                        close: 'close',
                    }}
                    styles={{
                        root: styles.root,
                    }}
                    actions={{
                        handleMenuOpen: () => { },
                        handleMenuClose: () => { },
                        handleApply: actions.handleUpdateSearch,
                        handleClose: actions.handleToggleSearch,
                    }}
                    classes={{
                        root: classes.root,
                    }}
                />
            }
        </div>
    );
};

KiTreeListSearch.propTypes = {
    search: PropTypes.shape({
        value: PropTypes.string,
        mask: PropTypes.bool,
    }),
    actions: PropTypes.shape({
        handleToggleSearch: PropTypes.func,
        handleUpdateSearch: PropTypes.func,
    }),
    styles: PropTypes.shape({
        root: PropTypes.object,
        input: PropTypes.object,
    }),
    classes: PropTypes.shape({
        root: PropTypes.string,
        input: PropTypes.string,
        inkbar: PropTypes.string,
        mask: PropTypes.string,
        maskSeached: PropTypes.string,
        maskData: PropTypes.string,
        maskButton: PropTypes.string,
    }),
};

export default withStyles(() => styles.treeListSearch)(KiTreeListSearch);