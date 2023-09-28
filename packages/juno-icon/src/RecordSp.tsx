import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const RecordSp = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M16.001 6.857a9.157 9.157 0 0 1 9.137 8.858l.005.285-.004.285A9.143 9.143 0 0 1 16 25.143a9.143 9.143 0 0 1-.285-18.281L16 6.858zm0 2.286-.258.005A6.857 6.857 0 0 0 16 22.857c3.621 0 6.599-2.812 6.84-6.353l.012-.254.004-.246a6.871 6.871 0 0 0-6.6-6.856l-.257-.005z" />
      <path d="M16 11.429a4.572 4.572 0 0 1 .229 9.137l-.228.006-.228-.006a4.572 4.572 0 0 1 .229-9.137z" />
    </svg>
  )),
);
RecordSp.displayName = 'RecordSp';
RecordSp['iconName'] = 'record_sp';
export default RecordSp;
