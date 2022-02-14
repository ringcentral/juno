import React, { forwardRef, memo } from 'react';

const SpeakerDown = memo(
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
        <path d="M21.414 3.414A2 2 0 0122 4.828v22.343a2 2 0 01-3.414 1.414L12 21.999H6a2 2 0 01-2-2v-8a2 2 0 012-2h6l6.586-6.586a2 2 0 012.828 0zM20 4.828l-6.586 6.586A2 2 0 0112 12H7a1 1 0 00-1 1v6a1 1 0 001 1h5a2 2 0 011.414.586L20 27.172V4.829zm5.511 5.551a1 1 0 011.332.474A11.959 11.959 0 0128 16c0 1.839-.415 3.621-1.202 5.24a1 1 0 11-1.799-.875 9.958 9.958 0 001-4.366 9.96 9.96 0 00-.963-4.288 1 1 0 01.474-1.332z" />
      </svg>
    ),
  ),
);
SpeakerDown.displayName = 'SpeakerDown';
SpeakerDown['iconName'] = 'speaker-down';
export default SpeakerDown;
