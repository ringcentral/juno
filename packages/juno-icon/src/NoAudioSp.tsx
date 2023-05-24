import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const NoAudioSp = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M18.286 5.138v21.808l-6.835-4.549c-1.834-.046-3.249-.56-4.206-1.534-1.06-1.077-1.319-2.482-1.377-3.496l-.013-.341-.001-.435.002-.121.002-.745-.005-.632.008-.341c.042-1.015.272-2.427 1.36-3.534.958-.971 2.381-1.486 4.231-1.529l6.835-4.552zm8.505 6.291 1.7 1.7L25.7 16l2.871 2.791-1.7 1.7L24 17.7l-2.791 2.871-1.78-1.78L22.3 16l-2.871-2.791 1.78-1.78L24 14.3l2.791-2.871z" />
    </svg>
  )),
);
NoAudioSp.displayName = 'NoAudioSp';
NoAudioSp['iconName'] = 'no-audio_sp';
export default NoAudioSp;
