import * as _ from 'lodash';
import { wrapAction as wrap, formatTopics } from 'lib/redux';
import { IUiData } from 'interfaces';

export const TOPICS: any = formatTopics('views/explorer/SCRIPTS', {
    TOGGLE_BRANCH: 'TOGGLE_BRANCH',

    SELECT_SCRIPT: 'SELECT_SCRIPT',
    // IMPORT_SCRIPT: 'UI/SCRIPT/IMPORT_SCRIPT',
    // REFRESH_SCRIPTS: 'UI/SCRIPT/REFRESH_SCRIPTS',
    // UNLOAD_SCRIPT: 'UI/SCRIPT/UNLOAD_SCRIPT',
    // UPDATE_SCRIPT: 'UI/SCRIPT/UPDATE_SCRIPT',
    // SORT_SCRIPTS: 'UI/ASSETS/SORT_SCRIPTS',
    // FILTER_SCRIPTS: 'UI/ASSETS/FILTER_SCRIPTS'
});

export class ScriptsTabActions {
    static topics = TOPICS;

    @wrap(TOPICS.SELECT_SCRIPT)
    static selectScript(scriptId: number) {
        return (state: IUiData, payload: any) => {
            return _.set(state, 'explorer.scriptId', payload.scriptId);
        };
    }

    @wrap(TOPICS.TOGGLE_BRANCH)
    static toggleBranch(branchId: string) {
        return (state: IUiData, payload: any) => {
            return _.update(state, 'explorer.scriptBranches', branches => {
                if (_.includes(branches, payload.branchId)) {
                    return _.without(branches, payload.branchId);
                } else {
                    return branches.concat(payload.branchId);
                }
            });
        };
    }
}