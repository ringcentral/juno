import React, { forwardRef, memo } from 'react';

const Contacts = memo(
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
        <path d="M16 2c7.732 0 14 6.268 14 14s-6.268 14-14 14S2 23.732 2 16 8.268 2 16 2zm0 18c-3.715 0-7.059 1.506-9.059 3.87.352.405.731.786 1.134 1.14l.307.261.082.067.272.213c2.017 1.536 4.534 2.448 7.265 2.448s5.248-.912 7.265-2.448l.272-.213.081-.066.307-.261c.403-.355.782-.736 1.135-1.142-2-2.363-5.345-3.869-9.06-3.869zm0-13a5 5 0 10.001 10.001A5 5 0 0016 7z" />
      </svg>
    ),
  ),
);
Contacts.displayName = 'Contacts';
Contacts['iconName'] = 'contacts';
export default Contacts;
