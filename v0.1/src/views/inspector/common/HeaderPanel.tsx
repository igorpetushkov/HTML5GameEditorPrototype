import * as React from 'react';

import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Popover from 'material-ui/Popover';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import ClearIcon from 'material-ui/svg-icons/content/clear';
import SubjectIcon from 'material-ui/svg-icons/action/subject';

import { IInspectorPanel } from 'interfaces';

export default class HeaderPanel extends React.Component<{
    data: IInspectorPanel.Base;
    changeObject: Function;
}, any> {
    constructor(props) {
        super(props);

        this.state = {
            editName: false,
            showCreateMenu: false,
            showTip: false,
        };
    }

    changeName(name: string) {
        this.props.changeObject(_.assign({}, this.props.data, {name: name}));
    }

    toggleEditName() {
        this.setState({
            editName: !this.state.editName,
        });
    }

    actionMenuShow(event) {
        event.preventDefault();

        this.setState({
            showCreateMenu: true,
            anchorEl: event.currentTarget,
        });
    }

    actionMenuClose() {
        this.setState({
            showCreateMenu: false,
            showTip: false,
        });
    }

    getActionMenu() {
        const menu = [
            {
                label: 'Example1',
                handler: () => {},
            },
            {
                label: 'Example2',
                handler: () => {},
            },
            {
                label: 'Example3',
                handler: () => {},
            },
        ];

        return menu;
    }

    toggleTip(show: boolean) {
        this.setState({
            showTip: show,
        });
    }

    render() {
        const name = this.props.data.name;
        const editName = this.state.editName;
        const showTip = this.state.showTip;
        const actionMenu = this.getActionMenu();

        return (
            <div className='header'>
                <div className={!editName ? 'view' : 'view hidden'}>
                    <div className='name'
                        title={name}
                        onClick={() => this.toggleEditName()}
                        onMouseEnter={() => this.toggleTip(true)}
                        onMouseLeave={() => this.toggleTip(false)}
                    >
                        {name}
                    </div>
                    <span className={showTip ? 'tip' : 'tip hidden'}>edit</span>
                    <FlatButton icon={<SubjectIcon />} onClick={(event) => this.actionMenuShow(event)} />
                    <FlatButton label='Add component' onClick={() => {}} />

                    <Popover
                        open={this.state.showCreateMenu}
                        anchorEl={this.state.anchorEl}
                        anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
                        targetOrigin={{horizontal: 'left', vertical: 'top'}}
                        onRequestClose={() => this.actionMenuClose()} >
                        <Menu>
                            {_.map(actionMenu, (item, index) => {
                                return (
                                    <MenuItem key={index} primaryText={item.label} onClick={item.handler} />
                                );
                            })}
                        </Menu>
                    </Popover>
                </div>
                <div className={editName ? 'edit' : 'edit hidden'}>
                    <TextField id='edit-name-input' className='input' />
                    <FlatButton icon={<ClearIcon />} onClick={() => this.toggleEditName()} />
                    <FlatButton label='Save' onClick={() => {}} />
                </div>
            </div>
        );
    }
}