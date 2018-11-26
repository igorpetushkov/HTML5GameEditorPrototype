import * as React from 'react';
import { connect } from 'react-redux';

import buildTree from 'lib/buildTree';
import { mapDispatch } from 'lib/redux';
import TreeView from 'views/common/TreeView';
import ExplorerToolbar from 'views/explorer/ExplorerToolbar';
import { INSPECTOR_POINT } from '../../../constants';
import { ScriptsTabActions, InspectorActions } from 'redux/Actions';

class ScriptsTab extends React.Component<any, any> {
    constructor(props) {
        super(props);
    }

    selectScript(scriptId: number) {
        if (scriptId !== this.props.scriptId) {
            this.props.selectScript(scriptId);
            this.props.changePoint(INSPECTOR_POINT.SCRIPTS, scriptId);
        } else {
            this.props.selectScript(0);
            this.props.clearPoint();
        }
    }

    toggleBranch(branchId: string) {
        this.props.toggleBranch(branchId);
    }

    render() {
        const { scripts, scriptId, scriptBranches } = this.props;
        const data = buildTree(scripts);

        return (
            <div className='scripts'>
                <ExplorerToolbar refreshHandler={() => {}} filterHandler={() => {}}/>

                <div className='item-list'>
                    <TreeView
                        data={data}
                        openedBranches={scriptBranches}
                        selectedItemId={scriptId}
                        selectItemHandler={scriptId => this.selectScript(scriptId)}
                        toggleBranchHandler={branchId => this.toggleBranch(branchId)}
                        emptyMsg='No scripts.'
                    />
                </div>
            </div>
        );
    }
}

export default connect(state => {
    return {
        scripts: state.storage.scripts,
        scriptId: state.explorer.scriptId,
        scriptBranches: state.explorer.scriptBranches,
    };
}, dispatch => mapDispatch(dispatch, [ScriptsTabActions, InspectorActions]))
(ScriptsTab);