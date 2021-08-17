import React, { forwardRef, memo } from 'react';

const VideoMeeting = memo(
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
        <path d="M21.182 8C22.186 8 23 8.761 23 9.7v13.6c0 .939-.814 1.7-1.818 1.7H4.818C3.814 25 3 24.239 3 23.3V9.7C3 8.761 3.814 8 4.818 8h16.364zm7.104 3c.366 0 .668.333.709.761l.005.101v9.276c0 .134-.026.266-.075.385-.164.395-.545.572-.882.425l-.077-.04-3.571-2.154c-.215-.13-.36-.38-.389-.663L24 18.983v-4.967c0-.29.121-.558.318-.717l.077-.054 3.571-2.154a.615.615 0 01.319-.091z" />
      </svg>
    ),
  ),
);
VideoMeeting.displayName = 'VideoMeeting';
VideoMeeting['iconName'] = 'video_meeting';
export default VideoMeeting;
