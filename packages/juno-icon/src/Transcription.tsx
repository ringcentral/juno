import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const Transcription = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M28 4a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-7.586a.997.997 0 0 0-.707.293l-3.141 3.141a.8.8 0 0 1-1.131 0l-3.141-3.141a1 1 0 0 0-.707-.293H4.001a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h24zm-1 2H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h7a2 2 0 0 1 1.414.586L16 25.172l2.586-2.586A2 2 0 0 1 20 22h7a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1zm-3 11a1 1 0 0 1 0 2h-4a1 1 0 0 1 0-2h4zm-8 0a1 1 0 0 1 0 2h-4a1 1 0 0 1 0-2h4zm-8 0a1 1 0 0 1 0 2H7a1 1 0 0 1 0-2h1zm17-4a1 1 0 0 1 0 2h-2a1 1 0 0 1 0-2h2zm-6 0a1 1 0 0 1 0 2h-5a1 1 0 0 1 0-2h5zm-9 0a1 1 0 0 1 0 2H7a1 1 0 0 1 0-2h3z" />
    </svg>
  )),
);
Transcription.displayName = 'Transcription';
Transcription['iconName'] = 'transcription';
export default Transcription;
