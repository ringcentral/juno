import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const SelectMore = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M12.704 21.723a1 1 0 0 1 .053 1.322l-.085.092-4.944 4.724a1 1 0 0 1-1.314.059l-.092-.084-2.505-2.569a.999.999 0 0 1 1.339-1.481l.093.084 1.813 1.859 4.229-4.04a1 1 0 0 1 1.414.032zM28 24a1 1 0 0 1 0 2H16a1 1 0 0 1 0-2zM12.704 12.723a1 1 0 0 1 .053 1.322l-.085.092-4.944 4.724a1 1 0 0 1-1.314.059l-.092-.084-2.505-2.569a.999.999 0 0 1 1.339-1.481l.093.084 1.813 1.859 4.229-4.04a1 1 0 0 1 1.414.032zM28 15a1 1 0 0 1 0 2H16a1 1 0 0 1 0-2zM12.704 3.723a1 1 0 0 1 .053 1.322l-.085.092-4.944 4.724a1 1 0 0 1-1.314.059l-.092-.084-2.505-2.569a.999.999 0 0 1 1.339-1.481l.093.084 1.813 1.859 4.229-4.04a1 1 0 0 1 1.414.032zM28 6a1 1 0 0 1 0 2H16a1 1 0 0 1 0-2z" />
    </svg>
  )),
);
SelectMore.displayName = 'SelectMore';
SelectMore['iconName'] = 'Select-more';
export default SelectMore;
