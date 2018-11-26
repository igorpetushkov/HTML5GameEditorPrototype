import { default as thunk } from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

import { IUiData } from 'interfaces';
import Reducer from 'redux/Reducer';

export default (data: IUiData) => {
    const store = createStore(Reducer(data), applyMiddleware(thunk));

    store.subscribe(() => {
        // const state: any = Store.getState();
        // uiStore.persist(state.ui);
    });

    return store;
};