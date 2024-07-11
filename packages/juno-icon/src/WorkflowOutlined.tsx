import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const WorkflowOutlined = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M16 8.533a3.2 3.2 0 0 0 0-6.4 3.2 3.2 0 0 0 0 6.4zm5.333-3.2v.001a5.334 5.334 0 0 1-4.232 5.219l-.035.006v4.373h5.333a5.333 5.333 0 0 1 5.333 5.333v1.173c2.452.514 4.267 2.658 4.267 5.226a5.333 5.333 0 1 1-6.434-5.219l.035-.006v-1.173a3.2 3.2 0 0 0-3.2-3.2H9.6a3.2 3.2 0 0 0-3.2 3.2v1.173c2.452.514 4.267 2.658 4.267 5.226a5.333 5.333 0 1 1-6.434-5.219l.035-.006v-1.173a5.333 5.333 0 0 1 5.333-5.333h5.333v-4.373c-2.452-.514-4.267-2.658-4.267-5.226a5.333 5.333 0 0 1 10.666-.001zm-16 24.534a3.2 3.2 0 0 0 0-6.4 3.2 3.2 0 0 0 0 6.4zm18.134-3.2a3.2 3.2 0 0 0 6.4 0 3.2 3.2 0 0 0-6.4 0z" />
    </svg>
  )),
);
WorkflowOutlined.displayName = 'WorkflowOutlined';
WorkflowOutlined['iconName'] = 'workflow-outlined';
export default WorkflowOutlined;
