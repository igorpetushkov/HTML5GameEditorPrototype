import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

import buildReducer from './reducer';

export default (data, actions, callback) => {
    const store = createStore(buildReducer(data, actions), applyMiddleware(thunk));

    store.subscribe(callback);

    return store;
};