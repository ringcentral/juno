import React, { forwardRef, memo } from 'react';

const Nickname = memo(
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
        <path d="M13 17c1.722 0 3.365.324 4.831.907a8.026 8.026 0 00-1.09 1.726A11.152 11.152 0 0013 19.001c-4.709 0-8.573 2.812-8.967 6.395-.05.451.335.605.519.605l12.029.001a8.01 8.01 0 001.173 2l-13.755-.001a2 2 0 01-2-2c0-5.096 5.019-9 11-9zm16 9a1 1 0 010 2h-8a1 1 0 010-2h8zm-4-4a1 1 0 010 2h-4a1 1 0 010-2h4zm4-4a1 1 0 010 2h-8a1 1 0 010-2h8zM13 3a6 6 0 110 12 6 6 0 010-12zm0 2a4 4 0 100 8 4 4 0 000-8z" />
      </svg>
    ),
  ),
);
Nickname.displayName = 'Nickname';
Nickname['iconName'] = 'nickname';
export default Nickname;
