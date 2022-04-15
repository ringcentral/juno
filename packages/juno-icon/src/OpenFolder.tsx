import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const OpenFolder = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M29.004 19.489c.489 0 .896.352.98.817l.016.179v5.976a.996.996 0 0 1-1.976.179l-.016-.179-.002-3.239-5.381 5.382a.996.996 0 0 1-1.524-1.271l.115-.138 5.715-5.717-3.904.002a.996.996 0 0 1-.98-.817l-.016-.179c0-.489.352-.896.817-.98l.179-.016h5.976zM11.783 2.999a1.99 1.99 0 0 1 1.453.63l1.915 2.044a1 1 0 0 0 .61.308l.117.007h12.019c1.1 0 1.992.892 1.992 1.992l.001 9.671a8.002 8.002 0 0 0-1.992-1.632l-.001-3.059H3.992v10.957c0 .55.446.996.996.996h11.208c.182.707.459 1.376.816 1.993l-13.019-.001c-1.1 0-1.992-.892-1.992-1.992V4.992c0-1.1.892-1.992 1.992-1.992h7.79zm-.864 1.992H4.988a.996.996 0 0 0-.996.996v4.98h23.905V8.975a.996.996 0 0 0-.996-.996l-11.374-.021a2.989 2.989 0 0 1-1.829-.924L12.373 5.62a1.992 1.992 0 0 0-1.453-.63z" />
    </svg>
  )),
);
OpenFolder.displayName = 'OpenFolder';
OpenFolder['iconName'] = 'open-folder';
export default OpenFolder;
