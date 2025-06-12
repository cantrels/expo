"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = LinkPreviewNativePreviewNativeView;
const expo_1 = require("expo");
const NativeView = (0, expo_1.requireNativeView)('ExpoRouterLinkPreviewNative', 'LinkPreviewNativePreviewView');
function LinkPreviewNativePreviewNativeView(props) {
    const customStyle = {
        position: 'absolute',
    };
    const style = Array.isArray(props.style)
        ? [...props.style, customStyle]
        : [props.style, customStyle];
    return <NativeView {...props} style={style}/>;
}
//# sourceMappingURL=LinkPreviewNativePreviewView.js.map