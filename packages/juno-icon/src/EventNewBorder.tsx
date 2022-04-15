import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const EventNewBorder = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M21 2a1 1 0 0 1 .993.883L22 3v1h4a2 2 0 0 1 1.994 1.851L28 6v20a2 2 0 0 1-1.851 1.994L26 28H6a2.001 2.001 0 0 1-1.995-1.851L3.999 26V6c0-1.054.816-1.918 1.851-1.995l.149-.006h4v-1a1 1 0 0 1 1.993-.117l.007.117v1h8v-1a1 1 0 0 1 1-1zm5 8H6v15a1 1 0 0 0 .883.993L7 26h18a1 1 0 0 0 .993-.883L26 25V10zm-13 3h6a1 1 0 0 1 .923 1.385l-.049.101-5 9a1 1 0 0 1-1.799-.866l.051-.105 4.175-7.514h-4.3a1 1 0 0 1-.117-1.993l.117-.007zm12-7H7a1 1 0 0 0-.993.883L6 7v1h20V7a1 1 0 0 0-.883-.993L25 6z" />
    </svg>
  )),
);
EventNewBorder.displayName = 'EventNewBorder';
EventNewBorder['iconName'] = 'event-new_border';
export default EventNewBorder;
