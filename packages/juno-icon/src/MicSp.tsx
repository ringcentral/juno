import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const MicSp = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M16.857 23.967v3.462h-1.714v-3.462c-5.322-.333-8.274-3.794-8.543-10.074l1.714-.071c.239 5.616 2.824 8.464 7.686 8.464s7.447-2.848 7.686-8.464l1.714.071c-.269 6.28-3.219 9.743-8.543 10.074zm-6-11.538c0-3.686.398-7.286 5.143-7.286 4.746 0 5.143 3.6 5.143 7.286s-.397 7.286-5.143 7.286c-4.745 0-5.143-3.6-5.143-7.286z" />
    </svg>
  )),
);
MicSp.displayName = 'MicSp';
MicSp['iconName'] = 'mic_sp';
export default MicSp;
