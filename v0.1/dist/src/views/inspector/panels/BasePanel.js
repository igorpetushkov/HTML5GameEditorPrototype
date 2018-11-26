"use strict";
const React = require('react');
const DropDownField_1 = require('views/inspector/common/DropDownField');
const TagsField_1 = require('views/inspector/common/TagsField');
class BasePanel extends React.Component {
    constructor(props) {
        super(props);
        _.bindAll(this, [
            'changeScene',
            'changeLayer',
            'changeGroup',
            'changeTags',
        ]);
    }
    _makeData(obj) {
        return _.assign(_.omit(this.props.data, ['scenes', 'layers', 'groups']), obj);
    }
    changeScene(sceneId) {
        this.props.changeObject(this._makeData({ scene: sceneId }));
    }
    changeLayer(layerId) {
        this.props.changeObject(this._makeData({ layer: layerId }));
    }
    changeGroup(groupId) {
        this.props.changeObject(this._makeData({ group: groupId }));
    }
    changeTags(tags) {
        this.props.changeObject({ id: this.props.data.id, tags: tags });
    }
    render() {
        const data = this.props.data;
        return (React.createElement("div", {className: 'base-component'}, 
            React.createElement("table", null, 
                React.createElement("tbody", null, 
                    React.createElement("tr", null, 
                        React.createElement("td", null, "Scene"), 
                        React.createElement("td", null, 
                            React.createElement(DropDownField_1.default, {items: data['scenes'], changeAction: this.changeScene, width: '231px', className: 'dropdown-scenes'})
                        )), 
                    React.createElement("tr", null, 
                        React.createElement("td", null, "Layer"), 
                        React.createElement("td", null, 
                            React.createElement(DropDownField_1.default, {items: data['layers'], changeAction: this.changeLayer, width: '231px', className: 'dropdown-layers'})
                        )), 
                    React.createElement("tr", null, 
                        React.createElement("td", null, "Group"), 
                        React.createElement("td", null, 
                            React.createElement(DropDownField_1.default, {items: data['groups'], changeAction: this.changeGroup, width: '231px', className: 'dropdown-groups'})
                        )), 
                    React.createElement("tr", null, 
                        React.createElement("td", {colSpan: 2}, 
                            React.createElement("div", {className: 'tag-label'}, 
                                React.createElement("span", null, "T"), 
                                React.createElement("span", null, "a"), 
                                React.createElement("span", null, "g"), 
                                React.createElement("span", null, "s")), 
                            React.createElement("div", {className: 'tag-body'}, 
                                React.createElement(TagsField_1.default, {tags: data.tags, changeTags: this.changeTags})
                            ))
                    ))
            )
        ));
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = BasePanel;
//# sourceMappingURL=BasePanel.js.map