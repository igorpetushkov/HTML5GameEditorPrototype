import * as React from 'react';
import { connect } from 'react-redux';

import { mapDispatch } from 'lib/redux';
import { TimelineActions } from 'redux/Actions';

class TimelineView extends React.Component<any, void> {
    changePlayTime(playTime: number) {
        this.props.changePlayTime(playTime);
    }

    render() {
        const { playTime } = this.props;

        return (
            <div className='timeline'>
                <table>
                    <tbody>
                        <tr>
                            {_.range(0, 65, 5).map(value => {
                                const className = playTime === value ? 'selected' : '';

                                return (
                                    <td key={value} className={className} onClick={() => this.changePlayTime(value)}>
                                        {value}
                                    </td>
                                );
                            })}
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default connect(state => {
    return {
        playTime: state.timeline.playTime,
    };
}, dispatch => mapDispatch(dispatch, TimelineActions))
(TimelineView);