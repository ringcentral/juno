import React, { forwardRef, memo } from 'react';

const VideoAndMessage = memo(
  forwardRef(
    (
      props: React.SVGProps<SVGSVGElement>,
      svgRef?: React.Ref<SVGSVGElement>,
    ) => (
      <svg
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
        ref={svgRef}
        {...props}
      >
        <path d="M21 6a2 2 0 012 2v14a2 2 0 01-2 2h-4.586a.997.997 0 00-.707.293l-3.141 3.141a.8.8 0 01-1.131 0l-3.141-3.141A1 1 0 007.587 24H3.001a2 2 0 01-2-2V8a2 2 0 012-2h18zm-1 2H4a1 1 0 00-1 1v12a1 1 0 001 1h4a2 2 0 011.414.586L12 25.172l2.586-2.586A2 2 0 0116 22h4a1 1 0 001-1V9a1 1 0 00-1-1zm10 .618a1 1 0 01.993.883l.007.117v10.764a1 1 0 01-1.34.94l-.107-.046-5-2.5a1 1 0 01-.545-.77L24 17.881v-5.764a1 1 0 01.445-.832l.108-.063 5-2.5c.139-.069.292-.106.447-.106zm-1 2.618l-3 1.5v4.528l3 1.5v-7.528zM13 16a1 1 0 010 2H6a1 1 0 010-2h7zm5-4a1 1 0 010 2H6a1 1 0 010-2h12z" />
      </svg>
    ),
  ),
);
VideoAndMessage.displayName = 'VideoAndMessage';
VideoAndMessage['iconName'] = 'video_and_message';
export default VideoAndMessage;
