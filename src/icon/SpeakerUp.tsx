import React, { forwardRef, memo } from 'react';

const SpeakerUp = memo(
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
        <path d="M19.414 3.414A2 2 0 0120 4.828v22.343a2 2 0 01-3.414 1.414L10 21.999H4a2 2 0 01-2-2v-8a2 2 0 012-2h6l6.586-6.586a2 2 0 012.828 0zM18 4.828l-6.586 6.586A2 2 0 0110 12H5a1 1 0 00-1 1v6a1 1 0 001 1h5a2 2 0 011.414.586L18 27.172V4.829zm8.003 2.809a1 1 0 011.395.232C29.081 10.224 30 13.044 30 16s-.919 5.776-2.602 8.131a1 1 0 01-1.627-1.163C27.213 20.95 28 18.535 28 16s-.787-4.95-2.229-6.968a1 1 0 01.232-1.395zm-3.521 3.568a1 1 0 011.362.38A8.963 8.963 0 0125 16.001a8.953 8.953 0 01-1.171 4.441 1 1 0 11-1.738-.988A6.965 6.965 0 0023 16.001a6.962 6.962 0 00-.898-3.433 1 1 0 01.38-1.362z" />
      </svg>
    ),
  ),
);
SpeakerUp.displayName = 'SpeakerUp';
SpeakerUp['iconName'] = 'speaker-up';
export default SpeakerUp;
