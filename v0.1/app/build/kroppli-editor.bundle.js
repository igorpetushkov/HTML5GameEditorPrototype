webpackJsonp([0],{

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	eval("\"use strict\";\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__webpack_require__(1);\nconst injectTapEventPlugin = __webpack_require__(5);\ninjectTapEventPlugin();\nconst materialPatches_1 = __webpack_require__(31);\nmaterialPatches_1.injectDisableRipplePatch();\nmaterialPatches_1.injectFlatButtonMod();\n// import phStorage from 'kroppliph/storage';\n// import MainView from 'views/MainView';\n// import UiStore from 'redux/Store';\n// import { DEFAULT_UI_DATA, UI_DOM_ID, CANVAS_DOM_ID} from './constants';\n// import { IUiData, IProjectConfig } from 'interfaces';\n// // import Game from 'game/index';\n// async function loadUiData() {\n//     let data = await phStorage.loadData<IUiData>('ui');\n//     if (_.isEmpty(data)) {\n//         data = DEFAULT_UI_DATA;\n//     }\n//     return data;\n// }\n// async function loadProject() {\n//     const url = 'build/examples/pr1'; // TODO: fix url\n//     const config = await $.getJSON(url + '/config.json', {format: 'json'});\n//     const data = await $.getJSON(url + '/data.json', {format: 'json'});\n//     const storage = await phStorage.loadData(config.name);\n//     return {config, storage};\n// }\nfunction main() {\n    return __awaiter(this, void 0, void 0, function* () {\n        // const uiData = await loadUiData();\n        // const projectData = await loadProject();\n        // const element = ReactDOM.render(\n        //     <Provider store={UiStore(_.assign({}, projectData, uiData))}>\n        //         <MainView />\n        //     </Provider>,\n        //     document.getElementById(UI_DOM_ID)\n        // );\n        // const game = await Game.init(ui.domId, Storage);\n    });\n}\n;\ndocument.addEventListener('DOMContentLoaded', main);\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbm9ydGhkdWNrcy9aL19rcm9wcGxpLWVkaXRvci9zcmMvaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSx1QkFBcUM7QUFPckMsb0RBQStEO0FBQy9ELG9CQUFvQixFQUFFLENBQUM7QUFFdkIsa0RBQW9GO0FBQ3BGLDBDQUF3QixFQUFFLENBQUM7QUFDM0IscUNBQW1CLEVBQUUsQ0FBQztBQUV0Qiw2Q0FBNkM7QUFFN0MseUNBQXlDO0FBQ3pDLHFDQUFxQztBQUVyQywwRUFBMEU7QUFDMUUsd0RBQXdEO0FBRXhELG9DQUFvQztBQUVwQyxnQ0FBZ0M7QUFDaEMsMERBQTBEO0FBRTFELDZCQUE2QjtBQUM3QixrQ0FBa0M7QUFDbEMsUUFBUTtBQUVSLG1CQUFtQjtBQUNuQixJQUFJO0FBRUosaUNBQWlDO0FBQ2pDLHlEQUF5RDtBQUV6RCw4RUFBOEU7QUFFOUUsMEVBQTBFO0FBQzFFLDZEQUE2RDtBQUU3RCxnQ0FBZ0M7QUFDaEMsSUFBSTtBQUVKOztRQUNJLHFDQUFxQztRQUNyQywyQ0FBMkM7UUFFM0MsbUNBQW1DO1FBQ25DLG9FQUFvRTtRQUNwRSx1QkFBdUI7UUFDdkIsbUJBQW1CO1FBQ25CLHlDQUF5QztRQUN6QyxLQUFLO1FBRUwsbURBQW1EO0lBQ3ZELENBQUM7Q0FBQTtBQUFBLENBQUM7QUFFRixRQUFRLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsSUFBSSxDQUFDLENBQUMiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vYXNzZXRzL3N0eWxlcy9zdHlsZS5zY3NzJztcblxuaW1wb3J0ICogYXMgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0ICogYXMgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQgKiBhcyBpbmplY3RUYXBFdmVudFBsdWdpbiBmcm9tICdyZWFjdC10YXAtZXZlbnQtcGx1Z2luJztcbmluamVjdFRhcEV2ZW50UGx1Z2luKCk7XG5cbmltcG9ydCB7IGluamVjdERpc2FibGVSaXBwbGVQYXRjaCwgaW5qZWN0RmxhdEJ1dHRvbk1vZCB9IGZyb20gJ2xpYi9tYXRlcmlhbFBhdGNoZXMnO1xuaW5qZWN0RGlzYWJsZVJpcHBsZVBhdGNoKCk7XG5pbmplY3RGbGF0QnV0dG9uTW9kKCk7XG5cbi8vIGltcG9ydCBwaFN0b3JhZ2UgZnJvbSAna3JvcHBsaXBoL3N0b3JhZ2UnO1xuXG4vLyBpbXBvcnQgTWFpblZpZXcgZnJvbSAndmlld3MvTWFpblZpZXcnO1xuLy8gaW1wb3J0IFVpU3RvcmUgZnJvbSAncmVkdXgvU3RvcmUnO1xuXG4vLyBpbXBvcnQgeyBERUZBVUxUX1VJX0RBVEEsIFVJX0RPTV9JRCwgQ0FOVkFTX0RPTV9JRH0gZnJvbSAnLi9jb25zdGFudHMnO1xuLy8gaW1wb3J0IHsgSVVpRGF0YSwgSVByb2plY3RDb25maWcgfSBmcm9tICdpbnRlcmZhY2VzJztcblxuLy8gLy8gaW1wb3J0IEdhbWUgZnJvbSAnZ2FtZS9pbmRleCc7XG5cbi8vIGFzeW5jIGZ1bmN0aW9uIGxvYWRVaURhdGEoKSB7XG4vLyAgICAgbGV0IGRhdGEgPSBhd2FpdCBwaFN0b3JhZ2UubG9hZERhdGE8SVVpRGF0YT4oJ3VpJyk7XG5cbi8vICAgICBpZiAoXy5pc0VtcHR5KGRhdGEpKSB7XG4vLyAgICAgICAgIGRhdGEgPSBERUZBVUxUX1VJX0RBVEE7XG4vLyAgICAgfVxuXG4vLyAgICAgcmV0dXJuIGRhdGE7XG4vLyB9XG5cbi8vIGFzeW5jIGZ1bmN0aW9uIGxvYWRQcm9qZWN0KCkge1xuLy8gICAgIGNvbnN0IHVybCA9ICdidWlsZC9leGFtcGxlcy9wcjEnOyAvLyBUT0RPOiBmaXggdXJsXG5cbi8vICAgICBjb25zdCBjb25maWcgPSBhd2FpdCAkLmdldEpTT04odXJsICsgJy9jb25maWcuanNvbicsIHtmb3JtYXQ6ICdqc29uJ30pO1xuXG4vLyAgICAgY29uc3QgZGF0YSA9IGF3YWl0ICQuZ2V0SlNPTih1cmwgKyAnL2RhdGEuanNvbicsIHtmb3JtYXQ6ICdqc29uJ30pO1xuLy8gICAgIGNvbnN0IHN0b3JhZ2UgPSBhd2FpdCBwaFN0b3JhZ2UubG9hZERhdGEoY29uZmlnLm5hbWUpO1xuXG4vLyAgICAgcmV0dXJuIHtjb25maWcsIHN0b3JhZ2V9O1xuLy8gfVxuXG5hc3luYyBmdW5jdGlvbiBtYWluKCkge1xuICAgIC8vIGNvbnN0IHVpRGF0YSA9IGF3YWl0IGxvYWRVaURhdGEoKTtcbiAgICAvLyBjb25zdCBwcm9qZWN0RGF0YSA9IGF3YWl0IGxvYWRQcm9qZWN0KCk7XG5cbiAgICAvLyBjb25zdCBlbGVtZW50ID0gUmVhY3RET00ucmVuZGVyKFxuICAgIC8vICAgICA8UHJvdmlkZXIgc3RvcmU9e1VpU3RvcmUoXy5hc3NpZ24oe30sIHByb2plY3REYXRhLCB1aURhdGEpKX0+XG4gICAgLy8gICAgICAgICA8TWFpblZpZXcgLz5cbiAgICAvLyAgICAgPC9Qcm92aWRlcj4sXG4gICAgLy8gICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFVJX0RPTV9JRClcbiAgICAvLyApO1xuXG4gICAgLy8gY29uc3QgZ2FtZSA9IGF3YWl0IEdhbWUuaW5pdCh1aS5kb21JZCwgU3RvcmFnZSk7XG59O1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgbWFpbik7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2luZGV4LnRzeCJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

	eval("// removed by extract-text-webpack-plugin//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbm9ydGhkdWNrcy9aL19rcm9wcGxpLWVkaXRvci9hc3NldHMvc3R5bGVzL3N0eWxlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiMS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvc3R5bGVzL3N0eWxlLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ }),

/***/ 31:
/***/ (function(module, exports, __webpack_require__) {

	eval("\"use strict\";\nObject.defineProperty(exports, \"__esModule\", { value: true });\nfunction injectDisableRipplePatch() {\n    const EnhancedButton = __webpack_require__(32);\n    const Checkbox = __webpack_require__(209);\n    EnhancedButton.default.defaultProps.disableTouchRipple = true;\n    EnhancedButton.default.defaultProps.disableFocusRipple = true;\n    Checkbox.default.defaultProps.disableTouchRipple = true;\n    Checkbox.default.defaultProps.disableFocusRipple = true;\n}\nexports.injectDisableRipplePatch = injectDisableRipplePatch;\n;\nfunction injectFlatButtonMod() {\n    const FlatButton = __webpack_require__(229);\n    FlatButton.default.defaultProps.style = { border: null };\n}\nexports.injectFlatButtonMod = injectFlatButtonMod;\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbm9ydGhkdWNrcy9aL19rcm9wcGxpLWVkaXRvci9zcmMvbGliL21hdGVyaWFsUGF0Y2hlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBO0lBQ0ksTUFBTSxjQUFjLEdBQUcsbUJBQU8sQ0FBQyxFQUFxQyxDQUFDLENBQUM7SUFDdEUsTUFBTSxRQUFRLEdBQUcsbUJBQU8sQ0FBQyxHQUFzQixDQUFDLENBQUM7SUFFakQsY0FBYyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDO0lBQzlELGNBQWMsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQztJQUU5RCxRQUFRLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUM7SUFDeEQsUUFBUSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDO0FBQzVELENBQUM7QUFURCw0REFTQztBQUFBLENBQUM7QUFFRjtJQUNJLE1BQU0sVUFBVSxHQUFHLG1CQUFPLENBQUMsR0FBd0IsQ0FBQyxDQUFDO0lBRXJELFVBQVUsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLEtBQUssR0FBRyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQztBQUM3RCxDQUFDO0FBSkQsa0RBSUMiLCJmaWxlIjoiMzEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gaW5qZWN0RGlzYWJsZVJpcHBsZVBhdGNoKCkge1xuICAgIGNvbnN0IEVuaGFuY2VkQnV0dG9uID0gcmVxdWlyZSgnbWF0ZXJpYWwtdWkvaW50ZXJuYWwvRW5oYW5jZWRCdXR0b24nKTtcbiAgICBjb25zdCBDaGVja2JveCA9IHJlcXVpcmUoJ21hdGVyaWFsLXVpL0NoZWNrYm94Jyk7XG5cbiAgICBFbmhhbmNlZEJ1dHRvbi5kZWZhdWx0LmRlZmF1bHRQcm9wcy5kaXNhYmxlVG91Y2hSaXBwbGUgPSB0cnVlO1xuICAgIEVuaGFuY2VkQnV0dG9uLmRlZmF1bHQuZGVmYXVsdFByb3BzLmRpc2FibGVGb2N1c1JpcHBsZSA9IHRydWU7XG5cbiAgICBDaGVja2JveC5kZWZhdWx0LmRlZmF1bHRQcm9wcy5kaXNhYmxlVG91Y2hSaXBwbGUgPSB0cnVlO1xuICAgIENoZWNrYm94LmRlZmF1bHQuZGVmYXVsdFByb3BzLmRpc2FibGVGb2N1c1JpcHBsZSA9IHRydWU7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gaW5qZWN0RmxhdEJ1dHRvbk1vZCgpIHtcbiAgICBjb25zdCBGbGF0QnV0dG9uID0gcmVxdWlyZSgnbWF0ZXJpYWwtdWkvRmxhdEJ1dHRvbicpO1xuXG4gICAgRmxhdEJ1dHRvbi5kZWZhdWx0LmRlZmF1bHRQcm9wcy5zdHlsZSA9IHsgYm9yZGVyOiBudWxsIH07XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2xpYi9tYXRlcmlhbFBhdGNoZXMudHMiXSwic291cmNlUm9vdCI6IiJ9");

/***/ })

});