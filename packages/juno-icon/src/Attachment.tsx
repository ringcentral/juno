import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const Attachment = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M15.828 24.056a4 4 0 0 1-5.657-5.657l8.485-8.485a.999.999 0 1 1 1.414 1.414l-8.485 8.485a2 2 0 1 0 2.828 2.828l10.96-10.96a4.5 4.5 0 0 0-6.364-6.364l-10.96 10.96a7 7 0 0 0 9.899 9.899l8.485-8.485a.999.999 0 1 1 1.414 1.414l-8.485 8.485a9 9 0 0 1-12.728 0 9 9 0 0 1 0-12.728l10.96-10.96a6.5 6.5 0 0 1 9.192 9.192l-10.96 10.96z" />
    </svg>
  )),
);
Attachment.displayName = 'Attachment';
Attachment['iconName'] = 'attachment';
export default Attachment;
