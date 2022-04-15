import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const MicOffBorder = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M24 12a1 1 0 0 1 1 1v3c0 4.632-3.5 8.447-7.999 8.945L17 29a1 1 0 0 1-2 0v-4.055a8.952 8.952 0 0 1-3.791-1.325l1.461-1.461A7 7 0 0 0 23 16v-3a1 1 0 0 1 1-1zm5.435-8.021a.999.999 0 0 1 0 1.414L5.393 29.435a.999.999 0 1 1-1.414-1.414L28.021 3.979a.999.999 0 0 1 1.414 0zM21 13.828V16a5 5 0 0 1-6.827 4.656l1.661-1.66.165.004a3 3 0 0 0 3-3v-.172l2-2zM8 12a1 1 0 0 1 1 1v3c0 1.206.305 2.341.842 3.332l-1.462 1.46A8.961 8.961 0 0 1 7 16v-3a1 1 0 0 1 1-1zm8-10a5 5 0 0 1 5 5v1.172l-2 2V7a3 3 0 1 0-6 0v9l.005.167-1.66 1.662A4.978 4.978 0 0 1 11 16V7a5 5 0 0 1 5-5z" />
    </svg>
  )),
);
MicOffBorder.displayName = 'MicOffBorder';
MicOffBorder['iconName'] = 'mic-off_border';
export default MicOffBorder;
