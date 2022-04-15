import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const MacKeynoteD = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path
        fill="#223642"
        d="M3.556 0h24.889a3.556 3.556 0 0 1 3.556 3.556v24.889a3.556 3.556 0 0 1-3.556 3.556H3.556A3.556 3.556 0 0 1 0 28.445V3.556A3.556 3.556 0 0 1 3.556 0z"
      />
      <path
        fill="#039dfa"
        d="M24.889 16a8.894 8.894 0 0 1-5.787 8.333 8.864 8.864 0 0 1-3.102.556 8.876 8.876 0 0 1-3.163-.579A8.89 8.89 0 1 1 24.889 16z"
      />
      <path
        fill="#f1f1f1"
        d="M16.406 18.258v5.307c0 .4.319.724.713.724h1.911c.059 0 .116.015.165.041a8.67 8.67 0 0 1-3.07.558 8.68 8.68 0 0 1-3.13-.581.357.357 0 0 1 .113-.019h1.911a.72.72 0 0 0 .714-.724v-5.307h.673zm6.73-1.138a.678.678 0 0 1-.673.683H9.788a.678.678 0 0 1-.673-.683zm-7.533-8.724a.62.62 0 0 1 .615.624v.133a.62.62 0 0 1-.615.624h-1.387a.616.616 0 0 1-.591-.452H11.89a.556.556 0 0 0-.551.559v.788h10.283c.367 0 .671.291.691.663l.298 5.33H9.525l.298-5.33a.697.697 0 0 1 .691-.663h.412v-.788a.97.97 0 0 1 .962-.976h1.722a.618.618 0 0 1 .605-.512z"
      />
    </svg>
  )),
);
MacKeynoteD.displayName = 'MacKeynoteD';
MacKeynoteD['iconName'] = 'mac-keynote-D';
export default MacKeynoteD;
