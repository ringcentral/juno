import React, { forwardRef, memo } from 'react';

const Message = memo(
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
        <path
          fill="var(--color1, #066fac)"
          d="M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16z"
        />
        <path
          fill="var(--color2, #fff)"
          d="M21.5 11c.69 0 1.25.56 1.25 1.25v7.5c0 .69-.56 1.25-1.25 1.25h-2.866a.625.625 0 00-.442.183l-1.963 1.963a.5.5 0 01-.707 0l-1.963-1.963a.625.625 0 00-.442-.183h-2.866c-.69 0-1.25-.56-1.25-1.25v-7.5c0-.69.56-1.25 1.25-1.25h11.25z"
        />
      </svg>
    ),
  ),
);
Message.displayName = 'Message';
Message['iconName'] = 'Message';
export default Message;
