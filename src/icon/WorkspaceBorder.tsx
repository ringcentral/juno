import React, { forwardRef, memo } from 'react';

const WorkspaceBorder = memo(
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
        <path d="M23.558 4a2 2 0 011.897 1.368l4.236 12.709c.204.612.308 1.252.308 1.897V26a2 2 0 01-2 2h-24a2 2 0 01-2-2v-6.026c0-.645.104-1.286.308-1.897L6.543 5.368A2 2 0 018.44 4h15.117zM9.172 20H4v5a1 1 0 001 1h22a1 1 0 001-1v-5h-5.172a1 1 0 00-.608.206l-.099.087-1.828 1.828a3 3 0 01-1.923.872l-.198.007h-4.343a3.006 3.006 0 01-1.977-.743l-.145-.135-1.828-1.828a.996.996 0 00-.576-.284l-.131-.009zM22.838 6H9.163a1 1 0 00-.949.684L4.441 18h4.731c.729 0 1.431.266 1.977.743l.145.135 1.828 1.828a.996.996 0 00.576.284l.131.009h4.343a1 1 0 00.608-.206l.099-.087 1.828-1.828a3 3 0 011.923-.872l.198-.007h4.73L23.786 6.683a1 1 0 00-.949-.684zM23 13a1 1 0 010 2H9a1 1 0 010-2h14zm-2-5a1 1 0 010 2H11a1 1 0 010-2h10z" />
      </svg>
    ),
  ),
);
WorkspaceBorder.displayName = 'WorkspaceBorder';
WorkspaceBorder['iconName'] = 'workspace_border';
export default WorkspaceBorder;
