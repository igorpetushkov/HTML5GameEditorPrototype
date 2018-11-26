"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
require('../assets/styles/style.scss');
const injectTapEventPlugin = require('react-tap-event-plugin');
injectTapEventPlugin();
const materialPatches_1 = require('lib/materialPatches');
materialPatches_1.injectDisableRipplePatch();
materialPatches_1.injectFlatButtonMod();
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
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        // const uiData = await loadUiData();
        // const projectData = await loadProject();
        // const element = ReactDOM.render(
        //     <Provider store={UiStore(_.assign({}, projectData, uiData))}>
        //         <MainView />
        //     </Provider>,
        //     document.getElementById(UI_DOM_ID)
        // );
        // const game = await Game.init(ui.domId, Storage);
    });
}
;
document.addEventListener('DOMContentLoaded', main);
//# sourceMappingURL=index.js.map