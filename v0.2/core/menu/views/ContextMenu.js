import React from 'react';

import KiCotextMenu from 'kroppli-ui/menu/KiCotextMenu';

import { connect } from '../../../helpers';
import styles from '../styles';

const ContextMenu = ({ actions = {}, styles = {}, classes, ...store }) => <KiCotextMenu menu={store} styles={styles.root} />;

export default connect('menu.context', styles.contexMenu, ContextMenu);