import React, { forwardRef, memo } from 'react';

const AddParkLocation = memo(
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
        <path d="M27 2a3 3 0 012.995 2.824L30 5v11h-2V5a1 1 0 00-.883-.993L27 4H5a1 1 0 00-.993.883L4 5v22a1 1 0 00.883.993L5 28h12v2H5a3 3 0 01-2.995-2.824L2 27V5a3 3 0 012.824-2.995L5 2h22zm-3 15a1 1 0 011 1v4h4a1 1 0 010 2h-4.001L25 28a1 1 0 01-2 0l-.001-4H19a1 1 0 010-2h4v-4a1 1 0 011-1zm-6.423-8.4c2.782 0 4.743 2.008 4.743 4.894 0 2.818-1.876 4.805-4.54 4.91l-.224.004h-5.988v4.608c0 .602-.359.983-.924.983-.524 0-.872-.328-.919-.857l-.005-.126V9.582c0-.559.31-.928.806-.977l.118-.006h6.933zm-.483 1.691h-5.527v6.426h5.527c2.115 0 3.326-1.194 3.326-3.224 0-2.019-1.201-3.203-3.326-3.203z" />
      </svg>
    ),
  ),
);
AddParkLocation.displayName = 'AddParkLocation';
AddParkLocation['iconName'] = 'add-park-location';
export default AddParkLocation;
