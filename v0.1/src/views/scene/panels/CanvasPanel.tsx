import * as React from 'react';
import { connect } from 'react-redux';

class CanvasPanel extends React.Component<any, void> {
    render() {
        return (
            <div className='game'>
            </div>
        );
    }
}

export default connect(state => {
    return {};
})(CanvasPanel);