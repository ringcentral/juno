import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const Export = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M15.121 2.001c6.584 0 11.922 5.418 11.922 12.101l.001 2.229a7.948 7.948 0 0 0-1.987-.892l-.001-1.337c0-5.569-4.448-10.084-9.935-10.084H6.18a1 1 0 0 0-.993 1.008v22.185a1 1 0 0 0 .993 1.008l10.465.001a8.045 8.045 0 0 0 2.508 2.017l-13.966-.001c-1.097 0-1.987-.903-1.987-2.017V4.017C3.2 2.903 4.09 2 5.187 2l9.934.001zm1.428 16.134a8.007 8.007 0 0 0-1.174 2.017h-5.222a1 1 0 0 1-.993-1.008 1 1 0 0 1 .993-1.008l6.396-.001zm7.365-.309 4.586 4.586a.999.999 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414-1.414l2.879-2.879H17.82a1 1 0 0 1 0-2h7.559L22.5 19.24a1 1 0 0 1 1.414-1.414zm-3.826-5.741c.549 0 .993.451.993 1.008a1 1 0 0 1-.993 1.008h-9.935a1 1 0 0 1-.993-1.008 1 1 0 0 1 .993-1.008h9.935z" />
    </svg>
  )),
);
Export.displayName = 'Export';
Export['iconName'] = 'export';
export default Export;
