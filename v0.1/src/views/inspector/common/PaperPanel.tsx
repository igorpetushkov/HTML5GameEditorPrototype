import * as React from 'react';

import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
import Checkbox from 'material-ui/Checkbox';
import ClearIcon from 'material-ui/svg-icons/content/clear';
import ExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import ExpandLessIcon from 'material-ui/svg-icons/navigation/expand-less';
import LabelIcon from 'material-ui/svg-icons/image/hdr-strong';
import LabelOutIcon from 'material-ui/svg-icons/image/hdr-weak';
import VisibilityIcon from 'material-ui/svg-icons/action/visibility';
import VisibilityOffIcon from 'material-ui/svg-icons/action/visibility-off';
import LockOpenIcon from 'material-ui/svg-icons/action/lock-open';
import LockCloseIcon from 'material-ui/svg-icons/action/lock';

export default class PaperPanel extends React.Component<{
    component: any,
    changeObject: Function;
}, any> {
    constructor(props) {
        super(props);

        this.state = {
            opened: this.props.component.options['opened'],
        };
    }

    toggleHidden(hidden: boolean) {
        const data = this.props.component.element.props.data;
        this.props.changeObject(_.assign({}, data, {hidden: hidden}));
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

        return (
            <Paper className='component' zDepth={1} children={
                <div className={label === 'Texture' ? 'hhhh_' : null}>
                    {label &&
                        <div>
                            {this.state.opened
                                ? <ExpandLessIcon onClick={() => this.toggle()} />
                                : <ExpandMoreIcon onClick={() => this.toggle()} />
                            }

                            <span className='label' onClick={() => this.toggle()}>{label}</span>

                            <div className='disconnect-remove'>
                                {label === 'Base' ?
                                    <Checkbox
                                        checkedIcon={<VisibilityIcon />}
                                        uncheckedIcon={<VisibilityOffIcon />}
                                        style={{ marginBottom: 16 }}
                                        onCheck={(event, value) => this.toggleHidden(value)}
                                    />
                                : null}

                                {label === 'Transform' ?
                                    <Checkbox
                                        checkedIcon={<LockOpenIcon />}
                                        uncheckedIcon={<LockCloseIcon />}
                                        style={{ marginBottom: 14 }}
                                        onCheck={() => {}}
                                    />
                                : null}

                                {options.disconnected !== -1 ?
                                    <Checkbox
                                        checkedIcon={<LabelOutIcon />}
                                        uncheckedIcon={<LabelIcon />}
                                        style={{ marginBottom: 16 }}
                                    />
                                : null}

                                {options.removed !== -1 ?
                                    <FlatButton icon={<ClearIcon />} onClick={() => {}} />
                                : null}
                            </div>
                        </div>
                    }

                    {this.state.opened ?
                        <div className='body'>
                            {element}
                        </div>
                    : null}
                </div>
            } />
        );
    }
}