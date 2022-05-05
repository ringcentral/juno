import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const AppsDevelopers = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M18.833 3.038c.76.173 1.253.895 1.156 1.653l-.025.142-5 23a1.5 1.5 0 0 1-2.951-.523l.025-.142 5-23a1.5 1.5 0 0 1 1.795-1.13zm5.614 5.298.114.103 6 6a1.5 1.5 0 0 1 .103 2.007l-.103.114-6 6a1.5 1.5 0 0 1-2.224-2.007l.103-.114 4.94-4.939-4.94-4.939a1.5 1.5 0 0 1-.103-2.007l.103-.114a1.5 1.5 0 0 1 2.007-.103zm-16.894 0a1.5 1.5 0 0 1 2.007.103l.103.114a1.5 1.5 0 0 1-.103 2.007l-4.94 4.939 4.94 4.939.103.114a1.5 1.5 0 0 1-2.224 2.007l-6-6-.103-.114a1.5 1.5 0 0 1 .103-2.007l6-6z" />
    </svg>
  )),
);
AppsDevelopers.displayName = 'AppsDevelopers';
AppsDevelopers['iconName'] = 'apps-developers';
export default AppsDevelopers;
