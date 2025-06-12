import { requireNativeView } from 'expo';

import { LinkPreviewNativePreviewViewProps } from './types';

const NativeView: React.ComponentType<LinkPreviewNativePreviewViewProps> = requireNativeView(
  'ExpoRouterLinkPreviewNative',
  'LinkPreviewNativePreviewView'
);

export default function LinkPreviewNativePreviewNativeView(
  props: LinkPreviewNativePreviewViewProps
) {
  const customStyle = {
    position: 'absolute',
  } as const;
  const style = Array.isArray(props.style)
    ? [...props.style, customStyle]
    : [props.style, customStyle];
  return <NativeView {...props} style={style} />;
}
