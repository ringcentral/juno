import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const Reply = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="m12.714 27.702-.128-.117L2.415 17.414A1.994 1.994 0 0 1 1.829 16c0-.491.177-.941.471-1.29l-.002.003.117-.128 10.171-10.17a2 2 0 0 1 3.408 1.257v.007l.006.15V11h1c7.179 0 12.999 5.819 13 12.998v3c0 1.192-1.712 1.384-1.974.222-.819-3.504-3.86-6.094-7.526-6.217h-.013l-.262-.005h-4.222V26.17a2 2 0 0 1-3.291 1.528l.003.002v.002zM15.002 13H15a.998.998 0 0 1-.991-.878v-.005L14.003 12l-.002-5.69a.2.2 0 0 0-.341-.141l-9.691 9.69a.2.2 0 0 0 0 .284l9.69 9.688c.036.037.087.06.142.06a.2.2 0 0 0 .2-.2v-5.688a1 1 0 0 1 1-1l5.531.005a10 10 0 0 1 7.179 3.366l.202.234-.04-.283a11.042 11.042 0 0 0-5.429-7.885l-.054-.028c-2.774-1.562-4.667-1.41-7.389-1.41z" />
    </svg>
  )),
);
Reply.displayName = 'Reply';
Reply['iconName'] = 'reply';
export default Reply;
