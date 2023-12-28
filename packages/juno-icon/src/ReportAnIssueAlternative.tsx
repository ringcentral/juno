import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const ReportAnIssueAlternative = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M25.45 3C27.95 3 30 5.082 30 7.624v12.09c0 2.539-2.049 4.623-4.55 4.623h-8.051L10.4 29.67c-1.1.839-2.8-.024-2.8-1.423v-3.91H6.55c-2.5 0-4.55-2.084-4.55-4.623V7.624C2 5.082 4.049 3 6.55 3h18.9zm0 2.134H6.55c-1.364 0-2.449 1.103-2.449 2.49v12.09c0 1.387 1.085 2.489 2.449 2.489h2.1c.58 0 1.05.477 1.05 1.066v4.268l6.72-5.119c.18-.14.403-.215.63-.215h8.4c1.364 0 2.45-1.102 2.45-2.489V7.624c0-1.387-1.085-2.49-2.45-2.49zM16 16.436c.553 0 1.001.479 1.001 1.071 0 .591-.448 1.071-1.001 1.071-.551 0-.999-.48-.999-1.071s.448-1.071.999-1.071zm0-9.282c.521 0 .947.424.995.968l.006.105v5.711c0 .591-.448 1.069-1.001 1.069-.522-.006-.954-.426-.995-.966l-.004-.105V8.225c0-.592.448-1.071.999-1.071z" />
    </svg>
  )),
);
ReportAnIssueAlternative.displayName = 'ReportAnIssueAlternative';
ReportAnIssueAlternative['iconName'] = 'report-an-issue-alternative';
export default ReportAnIssueAlternative;
