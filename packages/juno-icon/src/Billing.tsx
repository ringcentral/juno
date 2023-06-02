import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const Billing = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="m11.511 21.198-.087.081-2.17 2.316-.67-.715-.091-.087a.875.875 0 0 0-1.228.08c-.325.347-.357.92-.072 1.313l.078.094 1.192 1.272.056.082.065.077a.89.89 0 0 0 1.217.09l.087-.081 2.849-3.04.08-.098a1.045 1.045 0 0 0-.089-1.293.896.896 0 0 0-1.124-.158l-.094.067zM25.005 23h-8.009a.987.987 0 0 0-.995 1c0 .498.384.933.879.993l.116.007h8.009A.987.987 0 0 0 26 24c0-.536-.446-1-.995-1zm-13.494-7.802-.087.081-2.17 2.316-.67-.715-.091-.087a.875.875 0 0 0-1.228.08c-.325.347-.357.92-.072 1.313l.078.094 1.192 1.272.056.082.065.077a.89.89 0 0 0 1.217.09l.087-.081 2.849-3.04.08-.098a1.045 1.045 0 0 0-.089-1.293.892.892 0 0 0-1.217-.091zM25.005 17h-8.009a.987.987 0 0 0-.995 1c0 .498.384.933.879.993l.116.007h8.009A.987.987 0 0 0 26 18c0-.536-.446-1-.995-1zM6 11v2h20V8h2l.136.005c.99.072 1.781.851 1.858 1.83l.006.156v18.016c0 1.05-.82 1.91-1.863 1.987l-.151.005H4.014a2.003 2.003 0 0 1-2.008-1.843L2 28.007V9.991c0-1.1.9-1.992 2.014-1.992H6v3h2v-3c0-1.056.825-1.918 1.847-1.995l.147-.005H11.1a5.003 5.003 0 0 1 4.9-4 5.004 5.004 0 0 1 4.852 3.788l.048.212h1.106a1.99 1.99 0 0 1 1.989 1.848l.005.15v3.002H6zm10-7a2 2 0 1 0 .001 4.001A2 2 0 0 0 16 4z" />
    </svg>
  )),
);
Billing.displayName = 'Billing';
Billing['iconName'] = 'billing';
export default Billing;