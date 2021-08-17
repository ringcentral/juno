import React, { forwardRef, memo } from 'react';

const SpeakerMute = memo(
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
        <path d="M19.414 3.414A2 2 0 0120 4.828v22.343a2 2 0 01-3.414 1.414L10 21.999H4a2 2 0 01-2-2v-8a2 2 0 012-2h6l6.586-6.586a2 2 0 012.828 0zM18 4.828l-6.586 6.586A2 2 0 0110 12H5a1 1 0 00-1 1v6a1 1 0 001 1h5a2 2 0 011.414.586L18 27.172V4.829zm5.172 6.929l2.83 2.828 2.827-2.828a.999.999 0 111.414 1.414l-2.827 2.828 2.827 2.828a.999.999 0 11-1.414 1.414l-2.827-2.828-2.83 2.828a.999.999 0 11-1.414-1.414l2.83-2.828-2.83-2.828a.999.999 0 111.414-1.414z" />
      </svg>
    ),
  ),
);
SpeakerMute.displayName = 'SpeakerMute';
SpeakerMute['iconName'] = 'speaker-mute';
export default SpeakerMute;
