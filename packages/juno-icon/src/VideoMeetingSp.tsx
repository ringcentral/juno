import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const VideoMeetingSp = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M26.286 10.427v12.049l-4.36-2.732c.079-.826.119-1.773.119-2.853v-.64c0-1.107-.04-2.079-.132-2.92l4.372-2.905zM13.09 9.143c-6.616 0-7.376.764-7.376 7.429s.76 7.429 7.376 7.429c6.533 0 7.36-.797 7.374-7.109v-.64c-.013-6.312-.841-7.109-7.374-7.109z" />
    </svg>
  )),
);
VideoMeetingSp.displayName = 'VideoMeetingSp';
VideoMeetingSp['iconName'] = 'video_meeting_sp';
export default VideoMeetingSp;
