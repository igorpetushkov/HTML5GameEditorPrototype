import * as React from 'react';
import { connect } from 'react-redux';

import Paper from 'material-ui/Paper';

import PaperPanel from 'views/inspector/common/PaperPanel';
import HeaderPanel from 'views/inspector/common/HeaderPanel';
import BasePanel from 'views/inspector/panels/BasePanel';
import TexturePanel from 'views/inspector/panels/TexturePanel';
import TransformPanel from 'views/inspector/panels/TransformPanel';
import TextPanel from 'views/inspector/panels/TextPanel';
import { IInspectorPanel } from 'interfaces';
import { INSPECTOR_PANEL_GROUP, INSPECTOR_POINT } from '../../constants';
import { InspectorActions } from 'redux/Actions';
import { parsePoint } from 'lib/inspectorPoints';
import { mapDispatch } from 'lib/redux';

class InspectorView extends React.Component<any, any> {
    constructor(props) {
        super(props);

        _.bindAll(this, [
            'changeObject',
        ]);
    }

    changeObject(data: any) {
        this.props.changeObject(data);
    }

    createObjectComponentList(obj: any, props: any) {
        const list = [];

        if (obj['layer']) {
            const data = _.pick(obj, [
                'id',
                'scene',
                'layer',
                'group',
                'tags',
                'hidden',
                'locked',
            ]) as IInspectorPanel.Base;

            data['scenes'] = props.scenes;
            data['layers'] = props.layers;
            data['groups'] = props.groups;
            data['tags'] = _.filter(props.tags, (tag: any) => _.includes(obj.tags, tag.id));

            list.push({
                label: 'Base',
                element: React.createElement(BasePanel, {data, changeObject: this.changeObject}),
                options: {opened: 1, disconnected: -1, removed: -1},
            });
        }

        if (obj['position']) {
            const data = _.pick(obj, [
                'id',
                'position',
                'anchor',
                'scale',
                'rotate',
            ]) as IInspectorPanel.Transform;

            list.push({
                label: 'Transform',
                element: React.createElement(TransformPanel, {data, changeObject: this.changeObject}),
                options: {opened: 1, disconnected: -1, removed: -1},
            });
        }

        _.forIn(obj.panels, (component, key) => {
            let label = null;
            let element = null;
            let data = _.clone(component.data);
            let options = component.options;

            switch (parseInt(key)) {
                case INSPECTOR_PANEL_GROUP.TEXTURE:
                    label = 'Texture';
                    element = TexturePanel;
                    data['componentId'] = INSPECTOR_PANEL_GROUP.TEXTURE;
                    data['images'] = props.images;
                    break;
                case INSPECTOR_PANEL_GROUP.TEXT:
                    label = 'Text';
                    element = TextPanel;
                    data['componentId'] = INSPECTOR_PANEL_GROUP.TEXT;
                    break;
            }

            data['id'] = obj.id;

            if (label) {
                list.push({
                    label: label,
                    element: React.createElement(element, {data, changeObject: this.changeObject}),
                    options: {
                        opened: 1 || options[0],
                        disconnected: options[1],
                        removed: options[2],
                    },
                });
            }
        });

        return list;

    }

    render() {
        const { point, data } = this.props;

        if (!data) {
            return (
                <div className='inspector empty-msg'>
                    <Paper zDepth={1} children={
                        <span>Empty.</span>
                    } />
                </div>
            );
        }

        let list = [];
        if (_.toUpper(point) === INSPECTOR_POINT[INSPECTOR_POINT.OBJECTS]) {
            list = this.createObjectComponentList(data, this.props);
        }

        return (
            <div className='inspector'>
                <HeaderPanel data={data} changeObject={this.changeObject} />

                {_.map(list, (component, key) => {
                    return (
                        <PaperPanel key={key} component={component} changeObject={this.changeObject} />
                    );
                })}
            </div>
        );
    }
}

export default connect(state => {
    const { point, id } = parsePoint(state.inspector.point);
    const data = point && _.find(state[point], {id: id}) || null;

    return {
        point: point,
        data: data,
        scenes: state.storage.scenes,
        layers: state.storage.layers,
        groups: state.storage.groups,
        tags: state.storage.tags,
        images: state.storage.images,
    };
}, dispatch => mapDispatch(dispatch, InspectorActions))
(InspectorView);