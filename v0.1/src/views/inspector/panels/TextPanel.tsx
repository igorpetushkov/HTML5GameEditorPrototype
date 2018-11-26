import * as React from 'react';

import TextField from 'material-ui/TextField';
import { IInspectorPanel } from 'interfaces';

export default class TextPanel extends React.Component<{
    data: IInspectorPanel.Text;
    changeObject: Function;
}, any> {
    changeObject() {

    }

    render() {
        return (
            <div className='text-component'>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <span>Text</span>
                                <TextField id='text' className='input' />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}