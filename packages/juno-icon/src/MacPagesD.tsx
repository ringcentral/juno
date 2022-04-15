import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const MacPagesD = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path
        fill="#2f291e"
        d="M3.556 0h24.889a3.556 3.556 0 0 1 3.556 3.556v24.889a3.556 3.556 0 0 1-3.556 3.556H3.556A3.556 3.556 0 0 1 0 28.445V3.556A3.556 3.556 0 0 1 3.556 0z"
      />
      <path
        fill="#ffbc31"
        d="M22.667 7.111c1.227 0 2.222.995 2.222 2.222v11.689H11.163a.191.191 0 0 0-.039.378l.038.004h13.726v1.263a2.222 2.222 0 0 1-2.222 2.222H9.333a2.222 2.222 0 0 1-2.222-2.222V9.334c0-1.227.995-2.222 2.222-2.222h13.333z"
      />
      <path
        fill="#fff"
        d="M24.889 21.022v.382L11.125 21.4a.19.19 0 0 1 .039-.378H24.89zM11.537 19.85l.401.395-.496.289-.038.016a.154.154 0 0 1-.19-.184l.02-.049.303-.466zm7.809-8.311.872.864-7.088 7.147c-.085.078-.176.15-.272.215l-.147.092-.627.325-.469-.466.344-.63.087-.127c.06-.083.124-.163.192-.239l.105-.111 7.002-7.07zm2.001-1.11a.61.61 0 0 1 .076.781l-.07.086-.982.99-.873-.864.982-.99.054-.048a.612.612 0 0 1 .814.045z"
      />
    </svg>
  )),
);
MacPagesD.displayName = 'MacPagesD';
MacPagesD['iconName'] = 'mac-pages-D';
export default MacPagesD;
