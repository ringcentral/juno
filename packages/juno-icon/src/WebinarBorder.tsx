import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const WebinarBorder = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M28 3a2 2 0 0 1 2 2v18c0 .073-.004.146-.012.217.008.146.012.297.012.45 0 .736-.905 1.333-1.506 1.333H17v2h4a1 1 0 0 1 0 2H11a1 1 0 0 1 0-2h4v-2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h24zm-1 2H5a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h10.026c.336-4.169 3.838-6 7.49-6 2.063 0 4.07.576 5.485 1.834L28 6a1 1 0 0 0-1-1zm-4.484 14c-3.035 0-5.09 1.341-5.484 3.775a.197.197 0 0 0 .168.223l.028.002H27a1 1 0 0 0 .902-.568c-.502-2.167-2.374-3.359-5.127-3.429L22.517 19zM13 15a1 1 0 0 1 0 2H7a1 1 0 0 1 0-2h6zm9.5-7a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7zm0 2a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 22.5 10zM13 9a1 1 0 0 1 0 2H7a1 1 0 0 1 0-2h6z" />
    </svg>
  )),
);
WebinarBorder.displayName = 'WebinarBorder';
WebinarBorder['iconName'] = 'webinar_border';
export default WebinarBorder;
