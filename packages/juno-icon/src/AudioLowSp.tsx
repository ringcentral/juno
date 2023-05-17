import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const AudioLowSp = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path
        fill="#000"
        d="m18.286 26.946-6.835-4.549c-1.834-.046-3.249-.56-4.206-1.534-1.434-1.457-1.401-3.514-1.39-4.393l.002-.745-.002-.198c-.015-.933-.043-2.877 1.365-4.309.958-.971 2.381-1.486 4.231-1.529l6.835-4.552v21.808z"
      />
      <path
        fill="#000"
        opacity={0.32}
        d="m22.869 9.456.034.019A7.651 7.651 0 0 1 26.579 16l-.007.306c-.109 2.636-1.552 4.928-3.703 6.239l-.88-1.471.026-.015A5.94 5.94 0 0 0 24.864 16c-.005-2.143-1.144-4.018-2.875-5.073l.88-1.471zm-1.783 3.295.017.009A3.806 3.806 0 0 1 22.93 16a3.81 3.81 0 0 1-1.843 3.25l-.88-1.472c.631-.378 1.007-1.042 1.007-1.778s-.376-1.4-1.007-1.778l.88-1.471z"
      />
    </svg>
  )),
);
AudioLowSp.displayName = 'AudioLowSp';
AudioLowSp['iconName'] = 'audio-low_sp';
export default AudioLowSp;
