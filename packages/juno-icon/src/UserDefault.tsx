import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const UserDefault = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M16.8 5.66a5.222 5.222 0 0 1 4.168 2.106 5.276 5.276 0 0 1 1.056 3.794 26.765 26.765 0 0 0-.136 2.901v.139a3.457 3.457 0 0 1 0 2.106 5.804 5.804 0 0 1-1.144 2.459 5.648 5.648 0 0 1-.6 2.459 8.879 8.879 0 0 0-.456 1.828v.155c.001.59.01.59.136.59 2.188.662 4.644 1.774 6.763 2.708A15.152 15.152 0 0 1 16 31.199a15.151 15.151 0 0 1-10.724-4.428.14.14 0 0 1 .059-.021 57.038 57.038 0 0 1 6.96-2.618h.019c.117-.002.117-.037.117-.746a5.668 5.668 0 0 0-.272-1.828c-.136-.615-.456-1.5-.6-2.459a5.694 5.694 0 0 1-1.048-2.459 3.3 3.3 0 0 1 0-2.106v-.074c0-.279-.144-1.688-.28-2.901a5.276 5.276 0 0 1 1.056-3.794 5.259 5.259 0 0 1 4.176-2.106h1.336z" />
    </svg>
  )),
);
UserDefault.displayName = 'UserDefault';
UserDefault['iconName'] = 'user-default';
export default UserDefault;
