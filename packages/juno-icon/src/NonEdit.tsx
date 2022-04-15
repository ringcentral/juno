import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const NonEdit = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M2.565 3.979a1 1 0 0 1 1.32-.083l.094.083 24.042 24.042a.999.999 0 0 1-1.32 1.497l-.094-.083L2.565 5.393a.999.999 0 0 1 0-1.414zm9.197 10.611 1.414 1.414-6.579 6.58 2.828 2.828 6.579-6.579 1.414 1.414-6.659 6.659c-.279.279-.635.47-1.022.547l-5.006 1.001a1 1 0 0 1-1.177-1.176l1.001-5.006c.077-.387.268-.743.547-1.022l6.658-6.659zM28.01 4a4 4 0 0 1 0 5.657l-7.763 7.762-1.414-1.414 4.935-4.934-2.828-2.828-4.935 4.934-1.414-1.414 7.762-7.762a4 4 0 0 1 5.657 0zm-4.243 1.414-1.413 1.413 2.828 2.828 1.413-1.414a2 2 0 1 0-2.828-2.828z" />
    </svg>
  )),
);
NonEdit.displayName = 'NonEdit';
NonEdit['iconName'] = 'non-edit';
export default NonEdit;
