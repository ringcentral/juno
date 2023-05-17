import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const PinWindow = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M28.59 1.52C27.684.617 26.434.058 25.054.058s-2.63.558-3.536 1.462a4.984 4.984 0 0 0-1.452 3.524c0 .955.268 1.848.732 2.607l-.012-.022-6.579 6.578 1.696 1.698 6.579-6.579a4.945 4.945 0 0 0 2.571.728H25.067a4.987 4.987 0 0 0 4.987-4.987v-.012.001-.014c0-1.376-.56-2.621-1.464-3.52zm-1.696 5.374a2.603 2.603 0 0 1-3.684-3.679 2.603 2.603 0 0 1 3.684 3.678h-.002zm.244 6.592A90.8 90.8 0 0 1 27.199 17c0 11.061-1.232 12.2-13.198 12.2S.801 28.059.801 17s1.234-12.2 13.2-12.2h.8v2.4h-.8c-10.598 0-10.8.182-10.8 9.8s.2 9.8 10.8 9.8c10.6 0 10.8-.182 10.8-9.8 0-1.283-.019-2.422-.059-3.416l2.397-.098z" />
    </svg>
  )),
);
PinWindow.displayName = 'PinWindow';
PinWindow['iconName'] = 'pin-window';
export default PinWindow;
