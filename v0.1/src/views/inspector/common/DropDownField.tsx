import * as React from 'react';

import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';

export default function (props) {
    return (
        <DropDownMenu
            value={1}
            onChange={(event, index, value) => props.changeAction(_.toInteger(value))}
            className={`dropdown ${props.className}`}
            menuStyle={{ width: props.width, maxWidth: props.width, maxHeight: props.maxHeight || 300 }}
        >
            {_.map(props.items, (item: any) => {
                return <MenuItem value={item.id} key={item.id} primaryText={item.name} />;
            })}
        </DropDownMenu>
    );
}