import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const ShortcutBorder = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M22 24a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h12zm-1 2H11a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2zM17.2 2.9l12.4 9.3A1 1 0 0 1 29 14h-5v7a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2v-7H3a1 1 0 0 1-.6-1.8l12.4-9.3a2.001 2.001 0 0 1 2.4 0zM16 4.5 5.999 11.999 9 12a1 1 0 0 1 1 1v7a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-7a1 1 0 0 1 1-1l3-.001L16 4.5z" />
    </svg>
  )),
);
ShortcutBorder.displayName = 'ShortcutBorder';
ShortcutBorder['iconName'] = 'shortcut_border';
export default ShortcutBorder;
