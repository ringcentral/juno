import React, { forwardRef, memo } from 'react';

const ItemListSelected = memo(
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
        <path
          fill="var(--color61, #4475fd)"
          d="M16 2.667C8.64 2.667 2.667 8.64 2.667 16S8.64 29.333 16 29.333 29.333 23.36 29.333 16 23.36 2.667 16 2.667zm-2.286 19.908L8 16.861l1.611-1.611 4.103 4.091 8.674-8.674 1.611 1.623-10.286 10.286z"
        />
      </svg>
    ),
  ),
);
ItemListSelected.displayName = 'ItemListSelected';
ItemListSelected['iconName'] = 'item-list-selected';
export default ItemListSelected;
