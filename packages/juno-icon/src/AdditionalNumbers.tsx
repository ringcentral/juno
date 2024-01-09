import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const AdditionalNumbers = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M13.077 2.003a.999.999 0 0 1 .92 1.074l-2 26a.999.999 0 1 1-1.994-.154l2-26a.999.999 0 0 1 1.074-.92zM21.077 2.003a.999.999 0 0 1 .92 1.074l-2 26a.999.999 0 1 1-1.994-.154l2-26a.999.999 0 0 1 1.074-.92z" />
      <path d="M2 20a1 1 0 0 1 1-1h24a1 1 0 0 1 0 2H3a1 1 0 0 1-1-1zM4 12a1 1 0 0 1 1-1h24a1 1 0 0 1 0 2H5a1 1 0 0 1-1-1z" />
    </svg>
  )),
);
AdditionalNumbers.displayName = 'AdditionalNumbers';
AdditionalNumbers['iconName'] = 'additional-numbers';
export default AdditionalNumbers;
