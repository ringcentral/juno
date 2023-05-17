import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const AudioSp = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="m18.286 26.946-6.835-4.549c-1.834-.046-3.249-.56-4.206-1.534-1.434-1.457-1.401-3.514-1.39-4.393l.002-.745-.002-.198c-.015-.933-.043-2.877 1.365-4.309.958-.971 2.381-1.486 4.231-1.529l6.835-4.552v21.808zM26.578 16a7.653 7.653 0 0 0-3.676-6.525l-.034-.019-.88 1.471c1.731 1.055 2.871 2.93 2.875 5.072V16a5.94 5.94 0 0 1-2.849 5.059l-.026.015.88 1.471c2.234-1.361 3.704-3.781 3.71-6.544V16zm-3.649 0a3.805 3.805 0 0 0-1.827-3.24l-.017-.009-.88 1.471c.631.378 1.007 1.042 1.007 1.778s-.376 1.4-1.007 1.778l.88 1.472A3.808 3.808 0 0 0 22.928 16v-.001z" />
    </svg>
  )),
);
AudioSp.displayName = 'AudioSp';
AudioSp['iconName'] = 'audio_sp';
export default AudioSp;
