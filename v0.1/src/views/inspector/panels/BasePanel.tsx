import * as React from 'react';

import DropDownField from 'views/inspector/common/DropDownField';
import TagsField from 'views/inspector/common/TagsField';

import { IInspectorPanel } from 'interfaces';

export default class BasePanel extends React.Component<{
    data: IInspectorPanel.Base;
    changeObject: Function;
}, any> {
    constructor(props) {
        super(props);

        _.bindAll(this, [
            'changeScene',
            'changeLayer',
            'changeGroup',
            'changeTags',
        ]);
    }

    private _makeData(obj: any) {
        return _.assign(_.omit(this.props.data, ['scenes', 'layers', 'groups']), obj);
    }

    changeScene(sceneId: number) {
        this.props.changeObject(this._makeData({ scene: sceneId }));
    }

    changeLayer(layerId: number) {
        this.props.changeObject(this._makeData({ layer: layerId }));
    }

    changeGroup(groupId: number) {
        this.props.changeObject(this._makeData({ group: groupId }));
    }

    changeTags(tags: string[]) {
        this.props.changeObject({ id: this.props.data.id, tags: tags });
    }

    render() {
        const data = this.props.data;

        return (
            <div className='base-component'>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                Scene
                            </td>
                            <td>
                                <DropDownField
                                    items={data['scenes']}
                                    changeAction={this.changeScene}
                                    width={'231px'}
                                    className='dropdown-scenes'
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Layer
                            </td>
                            <td>
                                <DropDownField
                                    items={data['layers']}
                                    changeAction={this.changeLayer}
                                    width={'231px'}
                                    className='dropdown-layers'
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Group
                            </td>
                            <td>
                                <DropDownField
                                    items={data['groups']}
                                    changeAction={this.changeGroup}
                                    width={'231px'}
                                    className='dropdown-groups'
                                />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={2}>
                                <div className='tag-label'>
                                    <span>T</span>
                                    <span>a</span>
                                    <span>g</span>
                                    <span>s</span>
                                </div>
                                <div className='tag-body'>
                                    <TagsField tags={data.tags as any} changeTags={this.changeTags} />
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}