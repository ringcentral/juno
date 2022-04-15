import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const DefaultFileD = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path
        fill="#222b42"
        d="M3.556 0h24.889a3.556 3.556 0 0 1 3.556 3.556v24.889a3.556 3.556 0 0 1-3.556 3.556H3.556A3.556 3.556 0 0 1 0 28.445V3.556A3.556 3.556 0 0 1 3.556 0z"
      />
      <path
        fill="#2f51b1"
        d="M22.105 8.889H9.893c-.989-.002-1.793.902-1.794 2.018 0 .091.005.182.016.272.025.222.206.379.402.35a.343.343 0 0 0 .136-.052.933.933 0 0 1 .522-.156h2.557c.462.001.872.333 1.021.825l.061.222c.247.825.932 1.382 1.705 1.384h8.304c.188 0 .373.056.537.162a.332.332 0 0 0 .182.055c.198 0 .359-.181.359-.405v-2.648c0-1.119-.804-2.026-1.796-2.026z"
      />
      <path
        fill="#356afd"
        d="M23.965 13.314a1.879 1.879 0 0 0-.928-.242h-8.563a1.113 1.113 0 0 1-1.053-.73l-.063-.196c-.255-.73-.962-1.223-1.758-1.225H8.963a1.818 1.818 0 0 0-.907.232 1.779 1.779 0 0 0-.945 1.561v8.605c0 .99.829 1.793 1.852 1.793h14.074c1.023 0 1.852-.803 1.852-1.793v-6.454a1.77 1.77 0 0 0-.924-1.55z"
      />
    </svg>
  )),
);
DefaultFileD.displayName = 'DefaultFileD';
DefaultFileD['iconName'] = 'default-file-D';
export default DefaultFileD;
