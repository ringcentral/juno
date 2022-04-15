import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const VideoAndMessage = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M21 6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4.586a.997.997 0 0 0-.707.293l-3.141 3.141a.8.8 0 0 1-1.131 0l-3.141-3.141A1 1 0 0 0 7.587 24H3.001a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h18zm-1 2H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h4a2 2 0 0 1 1.414.586L12 25.172l2.586-2.586A2 2 0 0 1 16 22h4a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1zm10 .618a1 1 0 0 1 .993.883l.007.117v10.764a1 1 0 0 1-1.34.94l-.107-.046-5-2.5a1 1 0 0 1-.545-.77L24 17.881v-5.764a1 1 0 0 1 .445-.832l.108-.063 5-2.5c.139-.069.292-.106.447-.106zm-1 2.618-3 1.5v4.528l3 1.5v-7.528zM13 16a1 1 0 0 1 0 2H6a1 1 0 0 1 0-2h7zm5-4a1 1 0 0 1 0 2H6a1 1 0 0 1 0-2h12z" />
    </svg>
  )),
);
VideoAndMessage.displayName = 'VideoAndMessage';
VideoAndMessage['iconName'] = 'video_and_message';
export default VideoAndMessage;
