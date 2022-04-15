import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const InsertVideo = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M28 4a2 2 0 0 1 2 2v20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h24zm-1 2H5a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1zm-12.337 6.241.109.074 3.737 2.73c.606.455.661 1.38.11 1.891l-.11.091-3.737 2.684c-.791.562-1.7.291-1.768-.681L13 18.893v-5.748c-.01-1.024.756-1.4 1.554-.967l.109.064z" />
    </svg>
  )),
);
InsertVideo.displayName = 'InsertVideo';
InsertVideo['iconName'] = 'insert-video';
export default InsertVideo;
