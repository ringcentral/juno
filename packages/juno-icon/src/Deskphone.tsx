import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const Deskphone = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M8 4a2 2 0 0 1 2 2v20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h4zm20 1a2 2 0 0 1 2 2v18a2 2 0 0 1-2 2H14a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h14zm-9 16h-2a1 1 0 0 0-.117 1.993L17 23h2a1 1 0 0 0 0-2zm6 0h-2a1 1 0 0 0-.117 1.993L23 23h2a1 1 0 0 0 0-2zm-6-4h-2a1 1 0 0 0-.117 1.993L17 19h2a1 1 0 0 0 0-2zm6 0h-2a1 1 0 0 0-.117 1.993L23 19h2a1 1 0 0 0 0-2zm0-8h-8a1 1 0 0 0-.993.883L16 10v2a1 1 0 0 0 .883.993L17 13h8a1 1 0 0 0 .993-.883L26 12v-2a1 1 0 0 0-1-1z" />
    </svg>
  )),
);
Deskphone.displayName = 'Deskphone';
Deskphone['iconName'] = 'deskphone';
export default Deskphone;
