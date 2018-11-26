/* eslint-disable react/self-closing-comp */

import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles';

import styles from './styles';

class KiVerticalSash extends React.Component {
    sashEl = null;

    onMouseDown = (event) => {
        const withPanelEl = document.getElementById(this.props.withPanelId);

        const { left, right, minX, maxX } = this.props.position;

        let movedElX = null;
        let typeSash = 'SashX';

        if (left) {
            typeSash = 'left' + typeSash;
        } else if (right) {
            typeSash = 'right' + typeSash;
        }

        document.onmousemove = event => {
            document.body.style.cursor = 'ew-resize';
            movedElX = event.pageX;

            if (left) {
                if (minX > movedElX) {
                    movedElX = minX;
                } else if (maxX < movedElX) {
                    movedElX = maxX;
                }

                this.sashEl.style.left = movedElX + 'px';
            } else if (right) {
                movedElX = window.innerWidth - movedElX;
                if (minX > movedElX) {
                    movedElX = minX;
                } else if (maxX < movedElX) {
                    movedElX = maxX;
                }

                this.sashEl.style.right = movedElX + 'px';
            }

            withPanelEl.style.width = movedElX + 'px';
        };

        document.onmouseup = event => {
            document.onmousemove = document.onmouseup = null;
            document.body.style.cursor = 'default';

            // this.props.actions.onChange({ elX: movedElX, type: typeSash });
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

KiVerticalSash.propTypes = {
    withPanelId: PropTypes.string.isRequired,
    position: PropTypes.shape({
        left: PropTypes.bool,
        right: PropTypes.bool,
        minX: PropTypes.number,
        maxX: PropTypes.number,
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

export default withStyles(() => styles.verticalSash)(KiVerticalSash);