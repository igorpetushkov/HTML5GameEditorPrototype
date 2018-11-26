// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';

// import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';

// import { buildStore } from 'kroppli-sdk/redux';

// import stores from './stores';
// import actions from './actions';

// import { ROOT_DOM_ID } from './core/root/constants';
// import RootView from './core/root/views/RootView';

// ///// TODO
// import storage from './storage';
// /////////////

// // import Game1 from './Game1';

// function init() {
//     const subscribe = () => { };
//     const store = buildStore(stores(storage), actions, subscribe);

//     ReactDOM.render(
//         <Provider store={store}>
//             <MuiThemeProvider theme={createMuiTheme({
//                 palette: {
//                     type: 'dark',
//                 },
//                 spacing: {
//                     unit: 0,
//                 },
//             })}>
//                 <RootView />
//             </MuiThemeProvider>
//         </Provider>,
//         document.getElementById(ROOT_DOM_ID)
//     );
// }

// import * as ph3 from 'ph3';

// import * as uiii from 'kroppli-ui';


// function init() {
//     console.log(uiii);
// }

document.addEventListener('DOMContentLoaded', init);