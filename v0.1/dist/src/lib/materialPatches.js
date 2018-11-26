"use strict";
function injectDisableRipplePatch() {
    const EnhancedButton = require('material-ui/internal/EnhancedButton');
    const Checkbox = require('material-ui/Checkbox');
    EnhancedButton.default.defaultProps.disableTouchRipple = true;
    EnhancedButton.default.defaultProps.disableFocusRipple = true;
    Checkbox.default.defaultProps.disableTouchRipple = true;
    Checkbox.default.defaultProps.disableFocusRipple = true;
}
exports.injectDisableRipplePatch = injectDisableRipplePatch;
;
function injectFlatButtonMod() {
    const FlatButton = require('material-ui/FlatButton');
    FlatButton.default.defaultProps.style = { border: null };
}
exports.injectFlatButtonMod = injectFlatButtonMod;
//# sourceMappingURL=materialPatches.js.map