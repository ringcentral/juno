import React, { forwardRef, memo } from 'react';

const NewEmail = memo(
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
        <path d="M24 17a1 1 0 011 1v4h4a1 1 0 010 2h-4.001L25 28a1 1 0 01-2 0l-.001-4H19a1 1 0 010-2h4v-4a1 1 0 011-1zm4-12a2 2 0 012 2l.001 10.71a8.05 8.05 0 00-2-1.639L28 9l-10.197 8.764a3 3 0 01-3.599.005l-.157-.126-.822-.705-8.6 7.989a.992.992 0 00.374.072h11.252c.183.71.46 1.382.819 2.001l-13.071-.001a2 2 0 01-2-2v-18a2 2 0 012-2h24zM4 9.032v13.744l7.698-7.146L4 9.032zM27 7H5a.98.98 0 00-.255.033l10.701 9.166a1 1 0 001.097.007l.107-.08 10.605-9.092a.982.982 0 00-.256-.033z" />
      </svg>
    ),
  ),
);
NewEmail.displayName = 'NewEmail';
NewEmail['iconName'] = 'New-email';
export default NewEmail;
