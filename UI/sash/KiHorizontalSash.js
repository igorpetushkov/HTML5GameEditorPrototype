/* eslint-disable react/self-closing-comp */

import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles';

import styles from './styles';

class KiHorizontalSash extends React.Component {
    sashEl = null;

    onMouseDown = (event) => {
        const withPanelEl = document.getElementById(this.props.withPanelId);

        const { top, bottom, minY, maxY, topStartY, bottomEndY } = this.props.position;

        let movedElY = null;
        let typeSash = 'SashX';

        if (top) {
            typeSash = 'top' + typeSash;
        } else if (bottom) {
            typeSash = 'bottom' + typeSash;
        }

        document.onmousemove = event => {
            document.body.style.cursor = 'ns-resize';
            movedElY = event.pageY;

            if (top) {
                //
            } else if (bottom) {
                movedElY = window.innerHeight - movedElY;

                if (minY > movedElY) {
                    movedElY = minY;
                } else if (maxY < movedElY) {
                    movedElY = maxY;
                }

                this.sashEl.style.bottom = movedElY + 'px';
                withPanelEl.style.height = `calc(100% - ${movedElY + topStartY}px)`;
            }
        };

        document.onmouseup = event => {
            document.onmousemove = document.onmouseup = null;
            document.body.style.cursor = 'default';

            // this.props.actions.onChange({ elY: movedElY, type: typeSash });
        };

        return false;
    };

    render() {
        const { withPanelId, styles = {}, classes } = this.props;
        
        if (!withPanelId) {
            return null;
        }

        return (
            <div ref={(el) => { this.sashEl = el; }} className={classes.root} style={styles.root} onMouseDown={this.onMouseDown}></div>
        );
    }
}

KiHorizontalSash.propTypes = {
    withPanelId: PropTypes.string.isRequired,
    position: PropTypes.shape({
        top: PropTypes.bool,
        bottom: PropTypes.bool,
        minY: PropTypes.number,
        maxY: PropTypes.number,
        topStartY: PropTypes.number,
        bottomEndY: PropTypes.number,
    }),
    actions: PropTypes.shape({
        onChange: PropTypes.func.isRequired,
    }),
    styles: PropTypes.shape({
        root: PropTypes.object,
    }),
    classes: PropTypes.shape({
        root: PropTypes.string,
    }),
};

export default withStyles(() => styles.horizontalSash)(KiHorizontalSash);