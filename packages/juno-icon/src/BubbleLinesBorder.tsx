import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const BubbleLinesBorder = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M22 9a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-4.586a.997.997 0 0 0-.707.293l-3.141 3.141a.8.8 0 0 1-1.131 0l-3.141-3.141A1 1 0 0 0 8.587 25H4.001a2 2 0 0 1-2-2V11a2 2 0 0 1 2-2h18zm-1 2H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h4a2 2 0 0 1 1.414.586L13 26.172l2.586-2.586A2 2 0 0 1 17 23h4a1 1 0 0 0 1-1V12a1 1 0 0 0-1-1zm7-8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-3v-2h2a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v2H8V5a2 2 0 0 1 2-2h18z" />
    </svg>
  )),
);
BubbleLinesBorder.displayName = 'BubbleLinesBorder';
BubbleLinesBorder['iconName'] = 'bubble_lines_border';
export default BubbleLinesBorder;
