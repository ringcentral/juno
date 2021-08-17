import React, { forwardRef, memo } from 'react';

const MenuFax = memo(
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
        <path d="M27.3 0a2 2 0 012 2v22h-6.1a2 2 0 00-1.994 1.851L21.2 26v6H4.3a2 2 0 01-2-2V2a2 2 0 012-2h23zm.972 25.814a1 1 0 01.703 1.712l-4.201 4.149a1 1 0 01-1.702-.712v-4.149a1 1 0 011-1h4.201zM17.383 19H8.216c-.506 0-.917.672-.917 1.5s.41 1.5.917 1.5h9.167c.506 0 .917-.672.917-1.5s-.41-1.5-.917-1.5zm5.584-8H9.634c-.736 0-1.333.672-1.333 1.5S8.898 14 9.634 14h13.333c.736 0 1.333-.672 1.333-1.5s-.597-1.5-1.333-1.5z" />
      </svg>
    ),
  ),
);
MenuFax.displayName = 'MenuFax';
MenuFax['iconName'] = 'menu-fax';
export default MenuFax;
