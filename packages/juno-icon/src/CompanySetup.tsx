import React, { forwardRef, memo } from 'react';

const CompanySetup = memo(
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
        <path d="M18.999 2.012a2 2 0 011.994 1.851l.006.149V28h.997V9.012h6.007a2 2 0 011.994 1.851l.006.149L30.002 28l.114.007A1 1 0 0130.002 30l.001.012h-8.007V30h-.997v.012L2 30a1 1 0 010-2h.006l.001-23.988a2 2 0 011.851-1.994l.149-.006H19zm8.003 18.989h-2.005l-.116.007a.999.999 0 000 1.986l.116.007h2.005l.116-.007a.999.999 0 00-.117-1.993zM14.985 21l-7.089.007a1 1 0 000 1.986l.117.007 7.089-.007A1 1 0 0014.985 21zm12.017-5.999h-2.005l-.116.007a.999.999 0 000 1.986l.116.007h2.005l.116-.007a.999.999 0 00-.117-1.993zM14.985 15l-7.089.007a1 1 0 000 1.986l.117.007 7.089-.007A1 1 0 0014.985 15zm0-5.988l-7.089.007a1 1 0 000 1.986l.117.007 7.089-.007a1 1 0 00-.117-1.993z" />
      </svg>
    ),
  ),
);
CompanySetup.displayName = 'CompanySetup';
CompanySetup['iconName'] = 'Company-setup';
export default CompanySetup;
