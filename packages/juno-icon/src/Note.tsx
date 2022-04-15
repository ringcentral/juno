import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const Note = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M16 2c6.627 0 12 5.373 12 12v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h10zm2 16h-7a1 1 0 0 0-.117 1.993L11 20h7a1 1 0 0 0 .117-1.993L18 18zm3-6H11a1 1 0 0 0-.117 1.993L11 14h10a1 1 0 0 0 .117-1.993L21 12z" />
    </svg>
  )),
);
Note.displayName = 'Note';
Note['iconName'] = 'note';
export default Note;
