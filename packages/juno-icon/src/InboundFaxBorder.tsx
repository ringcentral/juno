import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const InboundFaxBorder = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M23 4a1 1 0 0 1 0 2h-2v13.757c0 .796-.316 1.559-.879 2.121l-5.536 5.536a2 2 0 0 1-1.238.578l-.176.008H4.999a2 2 0 0 1-2-2V6h-2a1 1 0 0 1 0-2h22zm-4 2H5v19a1 1 0 0 0 1 1h6v-5a2 2 0 0 1 2-2h5V6zm-.83 15H15a1 1 0 0 0-1 1v3.17L18.17 21zm10.209-10.293a1 1 0 0 1 1.497 1.32l-.083.094L26.086 16l3.707 3.879a1 1 0 0 1-1.32 1.497l-.094-.083-4.586-4.586a1 1 0 0 1-.083-1.32l.083-.094 4.586-4.586zM15.167 14c.46 0 .833.448.833 1s-.373 1-.833 1H8.834c-.46 0-.833-.448-.833-1s.373-1 .833-1h6.333zm0-5c.46 0 .833.448.833 1s-.373 1-.833 1H8.834c-.46 0-.833-.448-.833-1s.373-1 .833-1h6.333z" />
    </svg>
  )),
);
InboundFaxBorder.displayName = 'InboundFaxBorder';
InboundFaxBorder['iconName'] = 'inbound-fax_border';
export default InboundFaxBorder;
