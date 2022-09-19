import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const EngageOutlined = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M30.3 19c0-1.5-.5-3.2-2.7-4.3v-.1c0-6.1-4.1-12.3-12-12.3C7.3 2.3 4.3 9 4.3 14.6v.1c-2.1 1.1-2.7 2.9-2.7 4.3 0 2 1 4.6 6 5.3h1.6c.6 0 1-.4 1-1v-8.7c0-.6-.4-1-1-1H7.8c-.5.1-.9.2-1.4.3.2-4.8 2.7-9.6 9.3-9.6s9.7 4.9 10 9.6c-.4-.1-.9-.2-1.4-.3h-1.6c-.6 0-1 .4-1 1v8.7c0 .6.4 1 1 1h1.6c-.3 1.1-1.2 2.5-4.6 3.1.1-.2.1-.5.1-.8 0-2-1.6-3.7-3.7-3.7-2 0-3.7 1.6-3.7 3.7 0 2 1.6 3.7 3.7 3.7.8 0 1.5-.3 2.1-.7 6.3-.6 8-3.4 8.2-5.8 3.2-1 3.9-3.1 3.9-4.8zM7.9 15.7h.4v6.7h-.4c-3.8-.5-4.3-2.2-4.3-3.3 0-.9.2-2 1.9-2.7.1 0 .2-.1.2-.1.7-.3 1.4-.5 2.2-.6zM16 28.3c-.9 0-1.7-.7-1.7-1.7S15.1 25 16 25s1.7.7 1.7 1.7-.8 1.6-1.7 1.6zm8.1-6h-.4v-6.7h.4c.9.1 1.6.3 2.1.5.1 0 .1.1.2.1 1.7.7 1.9 1.9 1.9 2.7 0 1.3-.4 2.9-4.2 3.4z" />
    </svg>
  )),
);
EngageOutlined.displayName = 'EngageOutlined';
EngageOutlined['iconName'] = 'Engage-Outlined';
export default EngageOutlined;
