import React, { forwardRef, memo } from 'react';

const SaveDraft = memo(
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
        <path d="M22.172 3a2 2 0 011.414.586l4.828 4.828A2 2 0 0129 9.828V27a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h17.172zM10 5H6a1 1 0 00-1 1v20a1 1 0 001 1h20a1 1 0 001-1V10.243a.997.997 0 00-.293-.707L23 5.829V13c0 1.105-.767 2-1.714 2h-9.571c-.947 0-1.714-.895-1.714-2V5zm11.286 0h-9.571v7a1 1 0 001 1h7.571a1 1 0 001-1V5zM19 7a1 1 0 011 1v2a1 1 0 01-2 0V8a1 1 0 011-1z" />
      </svg>
    ),
  ),
);
SaveDraft.displayName = 'SaveDraft';
SaveDraft['iconName'] = 'save-draft';
export default SaveDraft;
