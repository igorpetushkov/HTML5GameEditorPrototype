"use strict";
const React = require('react');
const Paper_1 = require('material-ui/Paper');
const FlatButton_1 = require('material-ui/FlatButton');
const Checkbox_1 = require('material-ui/Checkbox');
const clear_1 = require('material-ui/svg-icons/content/clear');
const expand_more_1 = require('material-ui/svg-icons/navigation/expand-more');
const expand_less_1 = require('material-ui/svg-icons/navigation/expand-less');
const hdr_strong_1 = require('material-ui/svg-icons/image/hdr-strong');
const hdr_weak_1 = require('material-ui/svg-icons/image/hdr-weak');
const visibility_1 = require('material-ui/svg-icons/action/visibility');
const visibility_off_1 = require('material-ui/svg-icons/action/visibility-off');
const lock_open_1 = require('material-ui/svg-icons/action/lock-open');
const lock_1 = require('material-ui/svg-icons/action/lock');
class PaperPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            opened: this.props.component.options['opened'],
        };
    }
    toggleHidden(hidden) {
        const data = this.props.component.element.props.data;
        this.props.changeObject(_.assign({}, data, { hidden: hidden }));
    }
    toggle() {
        this.setState({
            opened: !this.state.opened,
        });
    }
    render() {
        const options = this.props.component.options;
        const label = this.props.component.label;
        const element = this.props.component.element;
        return (React.createElement(Paper_1.default, {className: 'component', zDepth: 1, children: React.createElement("div", {className: label === 'Texture' ? 'hhhh_' : null}, 
            label &&
                React.createElement("div", null, 
                    this.state.opened
                        ? React.createElement(expand_less_1.default, {onClick: () => this.toggle()})
                        : React.createElement(expand_more_1.default, {onClick: () => this.toggle()}), 
                    React.createElement("span", {className: 'label', onClick: () => this.toggle()}, label), 
                    React.createElement("div", {className: 'disconnect-remove'}, 
                        label === 'Base' ?
                            React.createElement(Checkbox_1.default, {checkedIcon: React.createElement(visibility_1.default, null), uncheckedIcon: React.createElement(visibility_off_1.default, null), style: { marginBottom: 16 }, onCheck: (event, value) => this.toggleHidden(value)})
                            : null, 
                        label === 'Transform' ?
                            React.createElement(Checkbox_1.default, {checkedIcon: React.createElement(lock_open_1.default, null), uncheckedIcon: React.createElement(lock_1.default, null), style: { marginBottom: 14 }, onCheck: () => { }})
                            : null, 
                        options.disconnected !== -1 ?
                            React.createElement(Checkbox_1.default, {checkedIcon: React.createElement(hdr_weak_1.default, null), uncheckedIcon: React.createElement(hdr_strong_1.default, null), style: { marginBottom: 16 }})
                            : null, 
                        options.removed !== -1 ?
                            React.createElement(FlatButton_1.default, {icon: React.createElement(clear_1.default, null), onClick: () => { }})
                            : null)), 
            this.state.opened ?
                React.createElement("div", {className: 'body'}, element)
                : null)}));
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = PaperPanel;
//# sourceMappingURL=PaperPanel.js.map