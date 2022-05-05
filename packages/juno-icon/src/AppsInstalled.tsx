import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const AppsInstalled = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M14.931 4a3.31 3.31 0 0 1 3.31 3.31v.828h4.966c.914 0 1.655.741 1.655 1.655v4.966h.828a3.31 3.31 0 0 1 0 6.62h-.828v4.966c0 .914-.741 1.655-1.655 1.655h-4.966v-.828a3.31 3.31 0 0 0-3.145-3.306l-.165-.004a3.31 3.31 0 0 0-3.306 3.145l-.004.165V28H6.655A1.655 1.655 0 0 1 5 26.345v-4.966h.828a3.31 3.31 0 0 0 3.306-3.145l.004-.165a3.31 3.31 0 0 0-3.145-3.306l-.165-.004H5V9.793c0-.914.741-1.655 1.655-1.655h4.966V7.31A3.31 3.31 0 0 1 14.931 4z" />
    </svg>
  )),
);
AppsInstalled.displayName = 'AppsInstalled';
AppsInstalled['iconName'] = 'apps-installed';
export default AppsInstalled;
