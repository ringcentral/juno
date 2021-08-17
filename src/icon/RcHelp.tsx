import React, { forwardRef, memo } from 'react';

const RcHelp = memo(
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
        <path d="M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zm1.205 20.001h-2.204V22h2.204v-1.999zM15.913 9c-.893 0-1.645.198-2.258.595-.97.621-1.593 1.933-1.655 3.42h2.25c0-.433.232-1.109.484-1.511s.679-.602 1.281-.602c.612 0 1.034.163 1.265.489s.346.687.346 1.084c0 .344-.104.66-.311.947a2.004 2.004 0 01-.451.462l-.568.446c-.56.438-.908.825-1.043 1.162s-.117 1.657-.148 2.539h2.102c.005-.417-.062-.437 0-.635.099-.313.298-1.587.599-1.822l.553-.43c.561-.438.939-.798 1.137-1.08.337-.464.506-1.035.506-1.714 0-1.106-.388-1.94-1.164-2.504s-1.75-.845-2.923-.845z" />
      </svg>
    ),
  ),
);
RcHelp.displayName = 'RcHelp';
RcHelp['iconName'] = 'rc_help';
export default RcHelp;
