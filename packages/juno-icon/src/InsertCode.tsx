import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const InsertCode = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M18.722 4.025a1 1 0 0 1 .773 1.082l-.019.115-5 22a1 1 0 0 1-1.97-.329l.019-.115 5-22a.999.999 0 0 1 1.197-.753zm5.983 5.68 4.881 4.881a2 2 0 0 1 0 2.828l-4.881 4.881a.998.998 0 0 1-1.411-1.411l4.17-4.178a1 1 0 0 0 0-1.413l-4.17-4.178a.998.998 0 0 1 1.411-1.411zm-16 0a.999.999 0 0 1 .001 1.411l-4.17 4.178a1 1 0 0 0 0 1.413l4.17 4.178a.998.998 0 0 1-1.411 1.411l-4.881-4.881a2 2 0 0 1 0-2.828l4.881-4.881a.998.998 0 0 1 1.41 0z" />
    </svg>
  )),
);
InsertCode.displayName = 'InsertCode';
InsertCode['iconName'] = 'insert-code';
export default InsertCode;
