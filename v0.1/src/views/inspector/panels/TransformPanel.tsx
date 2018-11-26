import * as React from 'react';

import TextField from 'material-ui/TextField';
import { IInspectorPanel } from 'interfaces';

export default class TransformPanel extends React.Component<{
    data: IInspectorPanel.Transform;
    changeObject: Function;
}, any> {
    changeScene() {

    }

    render() {
        return (
            <div className='transform-component'>
                <table>
                    <tbody>
                        <tr className='dimensions'>
                            <td>
                                W/H
                            </td>
                            <td>
                                <span>Height</span>
                                <TextField id='height' className='input' />
                            </td>
                            <td>
                                <span>Width</span>
                                <TextField id='width' className='input' />
                            </td>
                        </tr>

                        <tr className='position'>
                            <td>
                                Position
                            </td>
                            <td>
                                <span>Y</span>
                                <TextField id='position-y' className='input' />
                            </td>
                            <td>
                                <span>X</span>
                                <TextField id='position-x' className='input' />
                            </td>
                        </tr>

                        <tr className='anchor'>
                            <td>
                                Anchor
                            </td>
                            <td>
                                <span>Y</span>
                                <TextField id='anchor-y' className='input' />
                            </td>
                            <td>
                                <span>X</span>
                                <TextField id='anchor-x' className='input' />
                            </td>
                        </tr>

                        <tr className='scale'>
                            <td>
                                Scale
                            </td>
                            <td>
                                <span>Y</span>
                                <TextField id='scale-y' className='input' />
                            </td>
                            <td>
                                <span>X</span>
                                <TextField id='scale-x' className='input' />
                            </td>
                        </tr>

                        <tr className='rotation'>
                            <td>
                                Rotation
                            </td>
                            <td>
                            </td>
                            <td>
                                <TextField id='scale-x' className='input' />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}