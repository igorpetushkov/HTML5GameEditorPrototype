import * as React from 'react';

import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Popover from 'material-ui/Popover';
import RefreshIcon from 'material-ui/svg-icons/navigation/refresh';
import SortIcon from 'material-ui/svg-icons/av/sort-by-alpha';
import SearchIcon from 'material-ui/svg-icons/action/search';

export default class ExplorerToolbar extends React.Component<{
    refreshHandler?: Function,
    sortHandler?: Function
    filterHandler: Function,
}, any> {
    constructor(props) {
        super(props);

        this.state = {
            showSearchMenu: false,
            showSortMenu: false,
        };
    }

    render() {
        const styleBtn = {
            minWidth: '35px',
            height: '20px',
            lineHeight: '17px',
            border: '1px solid #3E474A',
            marginRight: '5px',
        };

        const handleSortMenuClose = () => {
            this.setState({
                showSortMenu: false,
            });
        };

        const handleSortMenuShow = (event) => {
            event.preventDefault();

            this.setState({
                showSortMenu: true,
                anchorEl: event.currentTarget,
            });
        };

        const handleSearchMenuClose = () => {
            this.setState({
                showSearchMenu: false,
            });
        };

        const handleSearchMenuShow = (event) => {
            event.preventDefault();

            this.setState({
                showSearchMenu: true,
                anchorEl: event.currentTarget,
            });
        };

        const isSortBtn = !!this.props.sortHandler;
        const isRefreshBtn = !!this.props.refreshHandler;

        return (
           <div className='toolbar'>
                {isSortBtn ?
                    <FlatButton style={styleBtn} icon={<SortIcon />} onClick={(event) => handleSortMenuShow(event)} />
                : null}
                {isRefreshBtn ?
                    <FlatButton style={styleBtn} icon={<RefreshIcon />} onClick={() => this.props.refreshHandler()} />
                : null}
                <FlatButton style={styleBtn} icon={<SearchIcon />} onClick={(event) => handleSearchMenuShow(event)} />

                <Popover
                    open={this.state.showSortMenu}
                    anchorEl={this.state.anchorEl}
                    anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
                    targetOrigin={{horizontal: 'left', vertical: 'top'}}
                    onRequestClose={() => handleSortMenuClose()} >
                    <Menu>
                        <MenuItem primaryText='Example1 ttt' onClick={() => handleSortMenuClose()} />
                        <MenuItem primaryText='Example2 tt' />
                        <MenuItem primaryText='Example3 tt' />
                        <MenuItem primaryText='Example4 ttt' />
                    </Menu>
                </Popover>

                <Popover
                    open={this.state.showSearchMenu}
                    anchorEl={this.state.anchorEl}
                    anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
                    targetOrigin={{horizontal: 'left', vertical: 'top'}}
                    onRequestClose={() => handleSearchMenuClose()} >
                    <Menu>
                        <MenuItem primaryText='Example1 ert' onClick={() => handleSearchMenuClose()} />
                        <MenuItem primaryText='Example2 ert' />
                        <MenuItem primaryText='Example3 ert' />
                        <MenuItem primaryText='Example4 ert' />
                    </Menu>
                </Popover>

                <TextField id='search-input' className='input' />
            </div>
        );
    }
}