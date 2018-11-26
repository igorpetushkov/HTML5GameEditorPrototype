import * as React from 'react';
import { connect } from 'react-redux';

class ConsoleView extends React.Component<any, void> {
    render() {
        return (
            <div className='console'>
                ConsoleView
            </div>
        );
    }
}

export default connect(state => { return {}; })(ConsoleView);