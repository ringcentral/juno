import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const WorkflowFilled = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M21 6v.001a5 5 0 0 1-3.967 4.893L17 10.9V15h5a5 5 0 0 1 5 5v1.1c2.299.482 4 2.492 4 4.899a5 5 0 1 1-6.033-4.893L25 21.1V20a3 3 0 0 0-3-3H10a3 3 0 0 0-3 3v1.1c2.299.482 4 2.492 4 4.899a5 5 0 1 1-6.033-4.893L5 21.1V20a5 5 0 0 1 5-5h5v-4.1c-2.299-.482-4-2.492-4-4.899A5 5 0 0 1 21 6z" />
    </svg>
  )),
);
WorkflowFilled.displayName = 'WorkflowFilled';
WorkflowFilled['iconName'] = 'workflow-filled';
export default WorkflowFilled;
