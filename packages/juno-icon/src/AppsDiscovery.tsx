import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const AppsDiscovery = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M16.919 17.75a1.2 1.2 0 0 1 1.479-.832l11.593 3.246a1.2 1.2 0 0 1 .014 2.307l-5.824 1.709-1.71 5.825a1.201 1.201 0 0 1-2.307-.014l-3.246-11.594a1.205 1.205 0 0 1 0-.647zM11 17a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2h6zm0-14a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6zm14 0a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6z" />
    </svg>
  )),
);
AppsDiscovery.displayName = 'AppsDiscovery';
AppsDiscovery['iconName'] = 'apps-discovery';
export default AppsDiscovery;
