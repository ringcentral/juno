import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const DelegatedLines = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M15.987 2c2.877.031 5.63.17 8.258.416l.98.097a4.999 4.999 0 0 1 4.432 4.308c.281 2.096.428 4.172.439 6.23.01 1.75-.088 3.504-.294 5.262l-.112.879a5 5 0 0 1-4.425 4.291c-2.65.282-5.405.449-8.265.502l-.001 3.014h4a1 1 0 0 1 0 2h-10a1 1 0 0 1 0-2h4l-.001-2.998 1.012-.003a76.727 76.727 0 0 1-8.176-.347l-.981-.103a5 5 0 0 1-4.411-4.418 56.487 56.487 0 0 1-.347-6.057c-.004-1.743.08-3.516.253-5.319l.094-.904a5 5 0 0 1 4.405-4.412c2.888-.328 5.934-.474 9.138-.439zM23.5 15h-10a1.5 1.5 0 0 0 0 3h10a1.5 1.5 0 0 0 0-3zm-5-7h-10a1.5 1.5 0 0 0 0 3h10a1.5 1.5 0 0 0 0-3z" />
    </svg>
  )),
);
DelegatedLines.displayName = 'DelegatedLines';
DelegatedLines['iconName'] = 'Delegated-lines';
export default DelegatedLines;
