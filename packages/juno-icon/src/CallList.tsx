import React, { forwardRef, memo } from 'react';

const CallList = memo(
  forwardRef(
    (
      props: React.SVGProps<SVGSVGElement>,
      svgRef?: React.Ref<SVGSVGElement>,
    ) => (
      <svg
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
        ref={svgRef}
        {...props}
      >
        <path d="M6.185 11.773l1.148 3.329c.13.367.05.712-.326.928l-1.005.58c-.961.555-1.055 1.421-.724 2.377.228.657.717 1.604 1.27 2.563l.278.473c.464.775.928 1.472 1.312 1.917.657.755 1.454 1.107 2.415.552l1.005-.58c.376-.217.715-.114.967.182l2.224 2.561c.733.806.399 1.477-.606 2.057-.909.525-1.846.576-2.845.317-2.547-.679-5.07-3.234-6.828-6.279s-2.709-6.508-2.024-9.053c.276-.995.789-1.781 1.697-2.305.948-.547 1.69-.557 2.043.382zM29 24a1 1 0 010 2H19a1 1 0 010-2h10zm0-9a1 1 0 010 2H13a1 1 0 010-2h16zm0-9a1 1 0 010 2H3a1 1 0 010-2h26z" />
      </svg>
    ),
  ),
);
CallList.displayName = 'CallList';
CallList['iconName'] = 'call-list';
export default CallList;
