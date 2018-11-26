import * as _ from 'lodash';
import * as React from 'react';
import * as classNames from 'classnames';

import ExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import ExpandLessIcon from 'material-ui/svg-icons/navigation/expand-less';

export default class TreeView extends React.Component<{
    data: any[],
    openedBranches: string[],
    selectedItemId: number,
    selectItemHandler: Function,
    toggleBranchHandler: Function,
    emptyMsg?: string
}, any> {
    renderTree(tree: any[], level: number = 0, opened: boolean = false) {
        const clNameBranch = classNames({
            'branch': level === 0,
            'branch-opened': opened,
            'branch-close': !opened,
            ['subbranch-' + level]: level > 0,
        });

        if (!tree.length) {
            return (
                <span className='empty-msg'>{this.props.emptyMsg}</span>
            );
        }

        return (
            <ul className={clNameBranch}>
                {_.map(tree, (item: any, index: number) => {
                    const clNameItem = classNames({
                        'li-branch': !!item.items,
                        'li-item': !item.items,
                        'selected': item.id === this.props.selectedItemId,
                    });
                    const branchIconStyle = {
                        width: '15px',
                        height: '13px',
                        marginRight: '3px',
                    };
                    const spanStyle = {
                        paddingTop: '6px',
                        paddingBottom: '6px',
                    };

                    const branchOpened = _.includes(this.props.openedBranches, item.id);
                    const itemHandler = () => this.props.selectItemHandler(item.id);
                    const branchHandler = () => this.props.toggleBranchHandler(item.id);

                    return (
                        <li key={item.id} className={clNameItem} onClick={!item.items && itemHandler}>
                            { item.items &&
                                (branchOpened
                                    ? <ExpandLessIcon onClick={branchHandler} style={branchIconStyle} />
                                    : <ExpandMoreIcon onClick={branchHandler} style={branchIconStyle} /> )}

                            <span onClick={item.items && branchHandler}
                                    className={item.items ? 'item-branch' : 'item-nonbranch'}
                                    style={spanStyle}
                            >
                                {item.name}
                            </span>

                            { item.items && this.renderTree(item.items, level + 1, branchOpened) }
                        </li>
                    );
                })}

                {!tree.length ? <span>{this.props.emptyMsg}</span> : null}
            </ul>
        );
    }

    render() {
        return this.renderTree(this.props.data);
    }
}