import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const RcvMicOff = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path
        fill="#6a7186"
        d="M23.5 12a1 1 0 0 1 1 1v3c0 4.632-3.5 8.447-7.999 8.945L16.5 29a1 1 0 0 1-2 0v-4.055a8.952 8.952 0 0 1-3.791-1.325l1.461-1.461A7 7 0 0 0 22.5 16v-3a1 1 0 0 1 1-1zm-3 1.828V16a5 5 0 0 1-6.827 4.656l6.827-6.828zM7.5 12a1 1 0 0 1 1 1v3c0 1.206.305 2.341.842 3.332l-1.462 1.46A8.961 8.961 0 0 1 6.5 16v-3a1 1 0 0 1 1-1zm8-10a5 5 0 0 1 5 5v1.172l-9.655 9.656a4.978 4.978 0 0 1-.345-1.829v-9a5 5 0 0 1 5-5z"
      />
      <path
        fill="#f54c3d"
        d="M28.935 3.979a.999.999 0 0 1 0 1.414L4.893 29.435a.999.999 0 1 1-1.414-1.414L27.521 3.979a.999.999 0 0 1 1.414 0z"
      />
    </svg>
  )),
);
RcvMicOff.displayName = 'RcvMicOff';
RcvMicOff['iconName'] = 'rcv_mic-off';
export default RcvMicOff;
