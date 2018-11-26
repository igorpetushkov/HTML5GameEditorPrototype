import { handleActions } from 'redux-actions';

import { parseTopics } from './helpers';

export default (data, actions) => handleActions(parseTopics(actions), data);