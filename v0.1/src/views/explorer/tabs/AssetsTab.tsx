import * as _ from 'lodash';
import * as React from 'react';
import { connect } from 'react-redux';
import * as classNames from 'classnames';

import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import ViewListIcon from 'material-ui/svg-icons/action/view-list';
import ViewModuleIcon from 'material-ui/svg-icons/action/view-module';

import buildTree from 'lib/buildTree';
import { mapDispatch } from 'lib/redux';
import TreeView from 'views/common/TreeView';
import ExplorerToolbar from 'views/explorer/ExplorerToolbar';
import { ASSET_GROUP, INSPECTOR_POINT } from '../../../constants';
import { AssetsTabActions, InspectorActions } from 'redux/Actions';

class AssetsTab extends React.Component<any, any> {
    constructor(props) {
        super(props);

        this.state = {
            group: 'images',
        };
    }

    selectAsset(assetId: number, group: ASSET_GROUP) {
        let point = null;
        switch (group) {
            case ASSET_GROUP.IMAGES:
                point = INSPECTOR_POINT.IMAGES;
                break;
            case ASSET_GROUP.TILEMAPS:
                point = INSPECTOR_POINT.TILEMAPS;
                break;
        }

        if (point && assetId !== this.props.imageId && assetId !== this.props.tilemapsId)  {
            this.props.selectAsset(assetId, group);
            this.props.changePoint(point, assetId);
        } else {
            this.props.selectAsset(0, group);
            this.props.clearPoint();
        }
    }

    toggleBranch(branchId: string, group: ASSET_GROUP) {
        this.props.toggleBranch(branchId, group);
    }

    changegroup(group: string) {
        this.setState({
            group: group,
        });
    }

    render() {
        const { imageId, tilemapId, imageBranches, tilemapBranches } = this.props;
        const assetGroups = _(ASSET_GROUP).values().filter(_.isString).map(_.toLower).value();

        const selectedData = (group: string) => {
            switch (group) {
                case 'images':
                    return [ imageId, imageBranches, ASSET_GROUP.IMAGES ];
                case 'tilemaps':
                    return [ tilemapId, tilemapBranches, ASSET_GROUP.TILEMAPS ];
                default:
                    return [];
            }
        };

        return (
            <div className='assets'>
                <ExplorerToolbar refreshHandler={() => {}} filterHandler={() => {}}/>

                {_.map(assetGroups, (group: string, index: number) => {
                    const clName = classNames({
                        'group-btn': true,
                        'group-btn-selected': this.state.group === group,
                    });
                    const clNameList = classNames({
                        'item-list': true,
                        'hidden': this.state.group !== group,
                    });

                    const [ selectedItemId, openedBranches, selectedgroup ] = selectedData(group);
                    const data = buildTree(this.props[group] ? this.props[group] : []);

                    return (
                        <div key={index}>
                            <RaisedButton
                                label={group}
                                fullWidth={true}
                                className={clName}
                                onClick={() => this.changegroup(group)}
                            />
                            {this.props[group] ?
                                <div className={clNameList}>
                                    <div className='assets-list-header'>
                                        <span className='selected'>loaded</span> / <span>not loaded</span>
                                        <div>
                                            <IconButton className='icon-btn selected'><ViewListIcon /></IconButton>
                                            /
                                            <IconButton className='icon-btn'><ViewModuleIcon /></IconButton>
                                        </div>
                                    </div>
                                    <TreeView
                                        data={data}
                                        openedBranches={openedBranches || []}
                                        selectedItemId={selectedItemId}
                                        selectItemHandler={assetId => this.selectAsset(assetId, selectedgroup)}
                                        toggleBranchHandler={branchId => this.toggleBranch(branchId, selectedgroup)}
                                        emptyMsg={`No ${group}.`}
                                    />
                                </div>
                            : null}
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default connect(state => {
    return {
        images: state.storage.images,
        tilemaps: state.storage.tilemaps,
        imageId: state.explorer.imageId,
        imageBranches: state.explorer.imageBranches,
        tilemapId: state.explorer.tilemapId,
        tilemapBranches: state.explorer.tilemapBranches,
    };
}, dispatch => mapDispatch(dispatch, [AssetsTabActions, InspectorActions]))
(AssetsTab);