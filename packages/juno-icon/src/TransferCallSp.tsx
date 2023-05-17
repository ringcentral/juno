import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const TransferCallSp = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="m26.759 17.143-7.665 7.665-1.616-1.616 3.762-3.763H5.714v-2.286h21.045zm-7.665-9.951 7.665 7.665H5.714v-2.286H21.24l-3.762-3.763 1.616-1.616z" />
    </svg>
  )),
);
TransferCallSp.displayName = 'TransferCallSp';
TransferCallSp['iconName'] = 'transfer-call_sp';
export default TransferCallSp;
