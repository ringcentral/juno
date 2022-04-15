import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const RcCloudContact = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M7.906 4h16.188A3.912 3.912 0 0 1 28 7.913v7.285c0 2.86-2.71 4.652-4.673 5.232.882 1.667 2.262 4.193 4.142 7.57h-6.365l-4.2-7.285h-.275c-.477 0-1.603-.243-1.603-.721v-4.988h7.981V8.919H8.957v10.42c0 1.855 1.789 5.395 4.591 8.661H7.183C4.844 26.285 4 22.778 4 20.715V7.913A3.912 3.912 0 0 1 7.906 4z" />
    </svg>
  )),
);
RcCloudContact.displayName = 'RcCloudContact';
RcCloudContact['iconName'] = 'rc_cloud_contact';
export default RcCloudContact;
