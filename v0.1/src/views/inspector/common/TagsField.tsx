import * as React from 'react';

import Chip from 'material-ui/Chip';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Popover from 'material-ui/Popover';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import AddIcon from 'material-ui/svg-icons/content/add';
import ClearIcon from 'material-ui/svg-icons/content/clear';
import DoneIcon from 'material-ui/svg-icons/action/done';
import SubjectIcon from 'material-ui/svg-icons/action/subject';

import { IUiStorage } from 'interfaces';

export default class ChipExampleArray extends React.Component<{
    tags: IUiStorage.Tag[];
    changeTags: Function;
}, any> {
    constructor(props) {
        super(props);

        this.state = {
            showTagPanel: false,
            showCreateMenu: false,
        };
    }

    showAddTagPanel(show: boolean) {
        this.setState({
            showTagPanel: show,
        });
    }

    addTag() {
        const name = this.refs['add-tag-input']['input']['value'];
        const maxId = _.max(_.map(this.props.tags, 'id')) as number;

        const tag = {
            id: maxId + 1,
            name: name,
        } as IUiStorage.Tag;

        this.props.changeTags(this.props.tags.concat(tag));
    }

    removeTag(tagId: number) {
        const tags = _(this.props.tags).reject({ id: tagId }).map('id').value();

        this.props.changeTags(tags);
    };

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

    render() {
        const actionMenu = this.getActionMenu();

        return (
            <table className='tags-field'>
                <tbody>
                    <tr>
                        <td className='tags'>
                            {_.map(this.props.tags, (tag: any) => {
                                return (
                                    <Chip key={tag.id} onRequestDelete={() => this.removeTag(tag.id)}>
                                        {tag.name}
                                    </Chip>
                                );
                            })}
                        </td>
                        <td className='options' onClick={() => this.showAddTagPanel(true)}>
                            <AddIcon />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className={!this.state.showTagPanel ? 'hidden' : 'add-tag'}>
                                <FlatButton icon={<SubjectIcon />} onClick={(event) => this.actionMenuShow(event)} />
                                <TextField ref='add-tag-input' id='add-tag-input' className='input' /> &nbsp;&nbsp;&nbsp;
                                <FlatButton icon={<DoneIcon />} onClick={() => this.addTag()} />
                                <FlatButton icon={<ClearIcon />} onClick={() => this.showAddTagPanel(false)} />

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
                        </td>
                    </tr>
                </tbody>
            </table>
        );
    }
}