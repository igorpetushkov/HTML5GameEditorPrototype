"use strict";
const redux_thunk_1 = require('redux-thunk');
const redux_1 = require('redux');
const Reducer_1 = require('redux/Reducer');
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (data) => {
    const store = redux_1.createStore(Reducer_1.default(data), redux_1.applyMiddleware(redux_thunk_1.default));
    store.subscribe(() => {
        // const state: any = Store.getState();
        // uiStore.persist(state.ui);
    });
    return store;
};
//# sourceMappingURL=Store.js.map