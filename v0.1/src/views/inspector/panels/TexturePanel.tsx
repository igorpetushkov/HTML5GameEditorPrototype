import * as React from 'react';

import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';
import DropDownField from 'views/inspector/common/DropDownField';
import { IInspectorPanel } from 'interfaces';

export default class TexturePanel extends React.Component<{
    data: IInspectorPanel.Texture;
    changeObject?: Function;
}, any> {
    changeScene(sceneId: number) {
        // this.props.changeObject(_.assign(this.props.data, {
        //     imageId: '',
        //     frame: 0,
        //     smoothed: true, 
        // }));
    }

    render() {
        const data = this.props.data;

        return (
            <div className='texture-component'>
                 <table>
                    <tbody>
                        <tr>
                            <td>
                                Image
                            </td>
                            <td>
                                <DropDownField
                                    items={data['images']}
                                    changeAction={this.changeScene}
                                    width={'231px'}
                                    className='dropdown-images'
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Frame
                            </td>
                            <td>
                                <Checkbox label='Smoothed' className='checkbox' />
                                <TextField id='frame-id' className='input' />
                            </td>
                        </tr>
                    </tbody>
                 </table>
            </div>
        );
    }
}