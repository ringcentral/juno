import React, { forwardRef, memo } from 'react';

const InsertImage = memo(
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
        <path d="M4 28a2 2 0 01-2-2V6a2 2 0 012-2h24a2 2 0 012 2v20a2 2 0 01-1.851 1.994L28 28H4zM27 6H5a1 1 0 00-1 1v18a1 1 0 001 1h1.585L17.42 15.166a3.999 3.999 0 015.111-.456l.173.127L28 18.955V7a1 1 0 00-1-1zm-8.035 10.461l-.13.119L9.415 26h17.586a1 1 0 001-.983v-3.528l-6.523-5.074a2 2 0 00-2.512.045zM10 9a3 3 0 110 6 3 3 0 010-6z" />
      </svg>
    ),
  ),
);
InsertImage.displayName = 'InsertImage';
InsertImage['iconName'] = 'insert-image';
export default InsertImage;
