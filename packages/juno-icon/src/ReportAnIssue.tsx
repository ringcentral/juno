import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const ReportAnIssue = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M16.894 2.683c.387.194.701.507.894.894l11.764 23.528a2 2 0 0 1-1.788 2.894H4.236a2 2 0 0 1-1.789-2.894L14.211 3.577a2 2 0 0 1 2.683-.894zM16 4.472 4.236 28h23.528L16 4.472zM16 22a2 2 0 1 1 .001 3.999A2 2 0 0 1 16 22zm0-11a1 1 0 0 1 1 1v7a1 1 0 0 1-2 0v-7a1 1 0 0 1 1-1z" />
    </svg>
  )),
);
ReportAnIssue.displayName = 'ReportAnIssue';
ReportAnIssue['iconName'] = 'report-an-issue';
export default ReportAnIssue;
