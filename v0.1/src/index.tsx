import '../assets/styles/style.scss';

import * as $ from 'jquery';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import * as injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import { injectDisableRipplePatch, injectFlatButtonMod } from 'lib/materialPatches';
injectDisableRipplePatch();
injectFlatButtonMod();

// import phStorage from 'kroppliph/storage';

// import MainView from 'views/MainView';
// import UiStore from 'redux/Store';

// import { DEFAULT_UI_DATA, UI_DOM_ID, CANVAS_DOM_ID} from './constants';
// import { IUiData, IProjectConfig } from 'interfaces';

// // import Game from 'game/index';

// async function loadUiData() {
//     let data = await phStorage.loadData<IUiData>('ui');

//     if (_.isEmpty(data)) {
//         data = DEFAULT_UI_DATA;
//     }

//     return data;
// }

// async function loadProject() {
//     const url = 'build/examples/pr1'; // TODO: fix url

//     const config = await $.getJSON(url + '/config.json', {format: 'json'});

//     const data = await $.getJSON(url + '/data.json', {format: 'json'});
//     const storage = await phStorage.loadData(config.name);

//     return {config, storage};
// }

async function main() {
    // const uiData = await loadUiData();
    // const projectData = await loadProject();

    // const element = ReactDOM.render(
    //     <Provider store={UiStore(_.assign({}, projectData, uiData))}>
    //         <MainView />
    //     </Provider>,
    //     document.getElementById(UI_DOM_ID)
    // );

    // const game = await Game.init(ui.domId, Storage);
};

document.addEventListener('DOMContentLoaded', main);