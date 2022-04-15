import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const DefaultMusicD = memo(
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
        fill="#356afd"
        d="M22.222 7.111a2.667 2.667 0 0 1 2.667 2.667v12.444a2.667 2.667 0 0 1-2.667 2.667H9.778a2.667 2.667 0 0 1-2.667-2.667V9.778a2.667 2.667 0 0 1 2.667-2.667h12.444z"
      />
      <path
        fill="#f1f1f1"
        d="m20.793 9.787-8 1.778a.444.444 0 0 0-.348.434v7.032a2.567 2.567 0 0 0-1.333-.364c-1.225 0-2.222.797-2.222 1.778s.997 1.778 2.222 1.778 2.222-.797 2.222-1.778v-5.422l7.111-1.581v3.811a2.567 2.567 0 0 0-1.333-.364c-1.226 0-2.222.797-2.222 1.778s.996 1.778 2.222 1.778 2.222-.797 2.222-1.778v-8.445a.443.443 0 0 0-.54-.434z"
      />
    </svg>
  )),
);
DefaultMusicD.displayName = 'DefaultMusicD';
DefaultMusicD['iconName'] = 'default-music-D';
export default DefaultMusicD;
