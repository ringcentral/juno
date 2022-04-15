import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const InsertTable = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M28 4a2 2 0 0 1 2 2v20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h24zM11 15H4v10a1 1 0 0 0 1 1h6V15zm17 0H13v11h14a1 1 0 0 0 1-1V15zM5 6a1 1 0 0 0-1 1v6h7V6H5zm8 7h15V7a1 1 0 0 0-1-1H13v7z" />
    </svg>
  )),
);
InsertTable.displayName = 'InsertTable';
InsertTable['iconName'] = 'insert-table';
export default InsertTable;
