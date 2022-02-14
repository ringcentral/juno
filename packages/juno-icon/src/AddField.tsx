import React, { forwardRef, memo } from 'react';

const AddField = memo(
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
        <path d="M16 2c7.732 0 14 6.268 14 14s-6.268 14-14 14S2 23.732 2 16 8.268 2 16 2zm0 6a2 2 0 00-2 2v4h-4a2 2 0 100 4h4v4a2 2 0 104 0v-4h4a2 2 0 100-4h-4v-4a2 2 0 00-2-2z" />
      </svg>
    ),
  ),
);
AddField.displayName = 'AddField';
AddField['iconName'] = 'add_field';
export default AddField;
