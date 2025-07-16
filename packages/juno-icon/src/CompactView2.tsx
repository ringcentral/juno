import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const CompactView2 = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M23.946.4a3.78 3.78 0 0 1 3.78 3.78v23.64l-.02.384a3.786 3.786 0 0 1-3.76 3.396H8.58a3.78 3.78 0 0 1-3.78-3.78V4.18A3.783 3.783 0 0 1 8.58.4h15.366zM7.2 22.8v5.02c0 .76.616 1.38 1.38 1.38h15.366a1.38 1.38 0 0 0 1.38-1.38V22.8H7.2zm1.38-20c-.76 0-1.38.62-1.38 1.38V20.4h18.126V4.18a1.38 1.38 0 0 0-1.38-1.38H8.58z" />
    </svg>
  )),
);
CompactView2.displayName = 'CompactView2';
CompactView2['iconName'] = 'CompactView2';
export default CompactView2;
