"use strict";
const React = require('react');
const react_redux_1 = require('react-redux');
const redux_1 = require('lib/redux');
const Actions_1 = require('redux/Actions');
class TimelineView extends React.Component {
    changePlayTime(playTime) {
        this.props.changePlayTime(playTime);
    }
    render() {
        const { playTime } = this.props;
        return (React.createElement("div", {className: 'timeline'}, 
            React.createElement("table", null, 
                React.createElement("tbody", null, 
                    React.createElement("tr", null, _.range(0, 65, 5).map(value => {
                        const className = playTime === value ? 'selected' : '';
                        return (React.createElement("td", {key: value, className: className, onClick: () => this.changePlayTime(value)}, value));
                    }))
                )
            )
        ));
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = react_redux_1.connect(state => {
    return {
        playTime: state.timeline.playTime,
    };
}, dispatch => redux_1.mapDispatch(dispatch, Actions_1.TimelineActions))(TimelineView);
//# sourceMappingURL=TimelineView.js.map