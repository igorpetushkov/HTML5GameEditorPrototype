import * as React from 'react';
import { connect } from 'react-redux';

class ProfilerView extends React.Component<any, void> {
    render() {
        return (
            <div className='profiler'>
                ProfilerView
            </div>
        );
    }
}

export default connect(state => { return {}; })(ProfilerView);