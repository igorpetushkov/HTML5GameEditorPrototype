import * as React from 'react';

import TextField from 'material-ui/TextField';
import { IInspectorPanel } from 'interfaces';

export default class TransformPanel extends React.Component<{
    data: IInspectorPanel.Button;
    changeObject: Function;
}, any> {
    changeObject() {

    }

    render() {
        return (
            <div className='button-component'>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <span>OverFrame</span>
                                <TextField id='overFrame' className='input' />
                            </td>
                            <td>
                                <span>OutFrame</span>
                                <TextField id='outFrame' className='input' />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <span>DownFrame</span>
                                <TextField id='downFrame' className='input' />
                            </td>
                            <td>
                                <span>UpFrame</span>
                                <TextField id='upFrame' className='input' />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}