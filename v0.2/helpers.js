import { withStyles } from 'material-ui/styles';

import { connect as connect_ } from './lib/redux/helpers';

import actions from './actions';

export const connect = (fpstr, styles = {}, view) => connect_(fpstr, styles, actions, view);

export const mapTheme = stylePath => withStyles(theme => ({ ...(_.get(theme.root, stylePath)) }));