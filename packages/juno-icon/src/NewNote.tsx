import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const NewNote = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M15.999 2c6.525 0 11.834 5.209 11.996 11.695l.004.305v3a1 1 0 0 1-1.993.117L25.999 17v-3c0-5.429-4.327-9.848-9.72-9.996L15.999 4H7a1 1 0 0 0-1 1v22a1 1 0 0 0 1 1h8.999a1 1 0 0 1 .117 1.993l-.117.007H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9.999zm7 16a1 1 0 0 1 1 1v4h4a1 1 0 0 1 0 2h-4.001l.001 4a1 1 0 0 1-2 0l-.001-4h-3.999a1 1 0 0 1 0-2h4v-4a1 1 0 0 1 1-1zm-7-1 .117.007a1 1 0 0 1 0 1.986l-.117.007h-4.997l-.117-.007a1 1 0 0 1 0-1.986l.117-.007h4.997zm5-6 .117.007a1 1 0 0 1 0 1.986l-.117.007-10.113-.007a1 1 0 0 1 0-1.986l.117-.007H21z" />
    </svg>
  )),
);
NewNote.displayName = 'NewNote';
NewNote['iconName'] = 'new-note';
export default NewNote;
