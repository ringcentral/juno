import React, { forwardRef, memo } from 'react';

const CompanySetupBorder = memo(
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
        <path d="M18.999 2.012a2 2 0 012 2L20.998 28h7.005l.001-15.988a1 1 0 00-.883-.993l-.117-.007h-5.007v-2h6.007a2 2 0 012 2L30.003 28l.114.007A1 1 0 0130.003 30l.001.012h-8.007V30h-.998l.001.012L2.001 30a1 1 0 010-2h.006l.001-23.988a2 2 0 011.851-1.994l.149-.006zm-1 2.001H4.998a1 1 0 00-1 1V28h15.001V5.013a1 1 0 00-.883-.993l-.117-.007zm8.003 16.988a1 1 0 01.117 1.993l-.116.007h-2.005a1 1 0 01-.117-1.993l.116-.007h2.005zM14.985 21a1 1 0 01.117 1.993l-.117.007H8.012a1 1 0 01-.117-1.993L8.012 21h6.973zm11.017-5.999a1 1 0 01.117 1.993l-.116.007h-2.005a1 1 0 01-.117-1.993l.116-.007h2.005zM14.985 15a1 1 0 01.117 1.993l-.117.007H8.012a1 1 0 01-.117-1.993L8.012 15h6.973zm0-5.988a1 1 0 01.117 1.993l-.117.007H8.012a1 1 0 01-.117-1.993l.117-.007h6.973z" />
      </svg>
    ),
  ),
);
CompanySetupBorder.displayName = 'CompanySetupBorder';
CompanySetupBorder['iconName'] = 'Company-setup_border';
export default CompanySetupBorder;
