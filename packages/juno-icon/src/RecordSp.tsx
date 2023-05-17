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
      <path d="M16.001 6.857a9.157 9.157 0 0 1 9.137 8.858l.005.285-.004.285A9.142 9.142 0 0 1 16 25.143a9.143 9.143 0 0 1-.285-18.282l.286-.004zm0 2.286-.258.005A6.857 6.857 0 0 0 16 22.857c3.621 0 6.599-2.812 6.841-6.353l.013-.254.004-.246a6.871 6.871 0 0 0-6.6-6.856l-.257-.005zM16 11.429a4.571 4.571 0 0 1 .228 9.137l-.228.006-.228-.006A4.572 4.572 0 0 1 16 11.429z" />
    </svg>
  )),
);
RecordSp.displayName = 'RecordSp';
RecordSp['iconName'] = 'record_sp';
export default RecordSp;
