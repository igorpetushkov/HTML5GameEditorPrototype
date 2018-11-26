"use strict";
const React = require('react');
const react_redux_1 = require('react-redux');
const Paper_1 = require('material-ui/Paper');
const PaperPanel_1 = require('views/inspector/common/PaperPanel');
const HeaderPanel_1 = require('views/inspector/common/HeaderPanel');
const BasePanel_1 = require('views/inspector/panels/BasePanel');
const TexturePanel_1 = require('views/inspector/panels/TexturePanel');
const TransformPanel_1 = require('views/inspector/panels/TransformPanel');
const TextPanel_1 = require('views/inspector/panels/TextPanel');
const constants_1 = require('../../constants');
const Actions_1 = require('redux/Actions');
const inspectorPoints_1 = require('lib/inspectorPoints');
const redux_1 = require('lib/redux');
class InspectorView extends React.Component {
    constructor(props) {
        super(props);
        _.bindAll(this, [
            'changeObject',
        ]);
    }
    changeObject(data) {
        this.props.changeObject(data);
    }
    createObjectComponentList(obj, props) {
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
            ]);
            data['scenes'] = props.scenes;
            data['layers'] = props.layers;
            data['groups'] = props.groups;
            data['tags'] = _.filter(props.tags, (tag) => _.includes(obj.tags, tag.id));
            list.push({
                label: 'Base',
                element: React.createElement(BasePanel_1.default, { data, changeObject: this.changeObject }),
                options: { opened: 1, disconnected: -1, removed: -1 },
            });
        }
        if (obj['position']) {
            const data = _.pick(obj, [
                'id',
                'position',
                'anchor',
                'scale',
                'rotate',
            ]);
            list.push({
                label: 'Transform',
                element: React.createElement(TransformPanel_1.default, { data, changeObject: this.changeObject }),
                options: { opened: 1, disconnected: -1, removed: -1 },
            });
        }
        _.forIn(obj.panels, (component, key) => {
            let label = null;
            let element = null;
            let data = _.clone(component.data);
            let options = component.options;
            switch (parseInt(key)) {
                case constants_1.INSPECTOR_PANEL_GROUP.TEXTURE:
                    label = 'Texture';
                    element = TexturePanel_1.default;
                    data['componentId'] = constants_1.INSPECTOR_PANEL_GROUP.TEXTURE;
                    data['images'] = props.images;
                    break;
                case constants_1.INSPECTOR_PANEL_GROUP.TEXT:
                    label = 'Text';
                    element = TextPanel_1.default;
                    data['componentId'] = constants_1.INSPECTOR_PANEL_GROUP.TEXT;
                    break;
            }
            data['id'] = obj.id;
            if (label) {
                list.push({
                    label: label,
                    element: React.createElement(element, { data, changeObject: this.changeObject }),
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
            return (React.createElement("div", {className: 'inspector empty-msg'}, 
                React.createElement(Paper_1.default, {zDepth: 1, children: React.createElement("span", null, "Empty.")})
            ));
        }
        let list = [];
        if (_.toUpper(point) === constants_1.INSPECTOR_POINT[constants_1.INSPECTOR_POINT.OBJECTS]) {
            list = this.createObjectComponentList(data, this.props);
        }
        return (React.createElement("div", {className: 'inspector'}, 
            React.createElement(HeaderPanel_1.default, {data: data, changeObject: this.changeObject}), 
            _.map(list, (component, key) => {
                return (React.createElement(PaperPanel_1.default, {key: key, component: component, changeObject: this.changeObject}));
            })));
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = react_redux_1.connect(state => {
    const { point, id } = inspectorPoints_1.parsePoint(state.inspector.point);
    const data = point && _.find(state[point], { id: id }) || null;
    return {
        point: point,
        data: data,
        scenes: state.storage.scenes,
        layers: state.storage.layers,
        groups: state.storage.groups,
        tags: state.storage.tags,
        images: state.storage.images,
    };
}, dispatch => redux_1.mapDispatch(dispatch, Actions_1.InspectorActions))(InspectorView);
//# sourceMappingURL=InspectorView.js.map