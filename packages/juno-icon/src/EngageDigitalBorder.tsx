import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const EngageDigitalBorder = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M8.7 11.7c-2.4 0-4.3 1.9-4.3 4.3s1.9 4.3 4.3 4.3S13 18.4 13 16s-1.9-4.3-4.3-4.3zm0 6.6c-1.3 0-2.3-1-2.3-2.3s1-2.3 2.3-2.3 2.3 1 2.3 2.3c0 1.3-1 2.3-2.3 2.3zm18-6h-9.3c-.6 0-1 .4-1 1s.4 1 1 1h9.3c.6 0 1-.4 1-1s-.5-1-1-1zM13.3 9h13.3c.6 0 1-.4 1-1s-.4-1-1-1H13.3c-.6 0-1 .4-1 1s.5 1 1 1zm13.4 14H13.3c-.6 0-1 .4-1 1s.4 1 1 1h13.3c.6 0 1-.4 1-1s-.4-1-.9-1zm0-5.3h-9.3c-.6 0-1 .4-1 1s.4 1 1 1h9.3c.6 0 1-.4 1-1s-.5-1-1-1zM6 22.3c-.9 0-1.7.7-1.7 1.7S5 25.7 6 25.7 7.6 25 7.6 24s-.7-1.7-1.6-1.7zM6 9.6c.9 0 1.6-.7 1.6-1.6S6.9 6.4 6 6.4c-.9 0-1.6.7-1.6 1.6S5.1 9.6 6 9.6z" />
    </svg>
  )),
);
EngageDigitalBorder.displayName = 'EngageDigitalBorder';
EngageDigitalBorder['iconName'] = 'engage-digital_border';
export default EngageDigitalBorder;
