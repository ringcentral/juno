import React, { forwardRef, memo } from 'react';

const Audio = memo(
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
        <path d="M18.479 4.534c.333.342.521.805.521 1.288v20.356C19 27.184 18.204 28 17.222 28c-.471 0-.924-.192-1.257-.534l-6.854-6H3.778C2.796 21.466 2 20.65 2 19.644v-7.288c0-1.006.796-1.822 1.778-1.822h5.333l6.854-6a1.746 1.746 0 012.514 0zm8.919 3.335C29.081 10.224 30 13.044 30 16s-.919 5.776-2.602 8.131a1 1 0 01-1.627-1.163C27.213 20.95 28 18.535 28 16s-.787-4.95-2.229-6.968a1 1 0 011.627-1.163zm-3.554 3.715A8.963 8.963 0 0125 16a8.953 8.953 0 01-1.171 4.441 1 1 0 11-1.738-.988A6.965 6.965 0 0023 16a6.962 6.962 0 00-.898-3.433 1 1 0 011.742-.982z" />
      </svg>
    ),
  ),
);
Audio.displayName = 'Audio';
Audio['iconName'] = 'audio';
export default Audio;
