import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const FailedFaxBorder = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M23 4a1 1 0 0 1 0 2h-2v13.757c0 .796-.316 1.559-.879 2.121l-5.536 5.536a2 2 0 0 1-1.238.578l-.176.008H4.999a2 2 0 0 1-2-2V6h-2a1 1 0 0 1 0-2h22zm5 18a2 2 0 1 1 .001 3.999A2 2 0 0 1 28 22zM19 6H5v19a1 1 0 0 0 1 1h6v-5a2 2 0 0 1 2-2h5V6zm-.83 15H15a1 1 0 0 0-1 1v3.17L18.17 21zM28 6c.552 0 1 .348 1 .778v12.444c0 .43-.448.778-1 .778s-1-.348-1-.778V6.778c0-.43.448-.778 1-.778zm-12.833 8c.46 0 .833.448.833 1s-.373 1-.833 1H8.834c-.46 0-.833-.448-.833-1s.373-1 .833-1h6.333zm0-5c.46 0 .833.448.833 1s-.373 1-.833 1H8.834c-.46 0-.833-.448-.833-1s.373-1 .833-1h6.333z" />
    </svg>
  )),
);
FailedFaxBorder.displayName = 'FailedFaxBorder';
FailedFaxBorder['iconName'] = 'failed-fax_border';
export default FailedFaxBorder;
