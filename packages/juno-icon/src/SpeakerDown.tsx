import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const SpeakerDown = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M21.414 3.414A2 2 0 0 1 22 4.828v22.343a2 2 0 0 1-3.414 1.414L12 21.999H6a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h6l6.586-6.586a2 2 0 0 1 2.828 0zM20 4.828l-6.586 6.586A2 2 0 0 1 12 12H7a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h5a2 2 0 0 1 1.414.586L20 27.172V4.829zm5.511 5.551a1 1 0 0 1 1.332.474A11.959 11.959 0 0 1 28 16c0 1.839-.415 3.621-1.202 5.24a1 1 0 1 1-1.799-.875 9.958 9.958 0 0 0 1-4.366 9.96 9.96 0 0 0-.963-4.288 1 1 0 0 1 .474-1.332z" />
    </svg>
  )),
);
SpeakerDown.displayName = 'SpeakerDown';
SpeakerDown['iconName'] = 'speaker-down';
export default SpeakerDown;
