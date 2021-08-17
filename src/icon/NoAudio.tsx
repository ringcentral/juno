import React, { forwardRef, memo } from 'react';

const NoAudio = memo(
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
        <path d="M18.479 4.534c.333.342.521.805.521 1.288v20.356C19 27.184 18.204 28 17.222 28c-.471 0-.924-.192-1.257-.534l-6.854-6H3.778C2.796 21.466 2 20.65 2 19.644v-7.288c0-1.006.796-1.822 1.778-1.822h5.333l6.854-6a1.746 1.746 0 012.514 0zm4.693 7.223l2.83 2.828 2.827-2.828a.999.999 0 111.414 1.414l-2.827 2.828 2.827 2.828a.999.999 0 11-1.414 1.414l-2.827-2.828-2.83 2.828a.999.999 0 11-1.414-1.414l2.83-2.828-2.83-2.828a.999.999 0 111.414-1.414z" />
      </svg>
    ),
  ),
);
NoAudio.displayName = 'NoAudio';
NoAudio['iconName'] = 'no-audio';
export default NoAudio;
