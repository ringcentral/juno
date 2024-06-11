import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const RecordingInsights = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M25.581 1.167c-.074-.222-.444-.222-.493 0L24.669 2.6C24.3 3.91 23.29 4.923 21.96 5.318l-1.181.346c-.201.057-.445.126-.445.321 0 .123.074.222.197.247l1.429.42c1.305.371 2.315 1.384 2.709 2.718l.327 1.119.019.066c.056.201.124.446.319.446a.24.24 0 0 0 .246-.198l.419-1.433c.369-1.31 1.379-2.323 2.709-2.718l1.18-.346c.2-.056.446-.126.446-.321a.241.241 0 0 0-.197-.247l-1.428-.42C27.404 4.947 26.394 3.934 26 2.6l-.419-1.433z" />
      <path d="M16 5C9.925 5 5 9.925 5 16s4.925 11 11 11 11-4.925 11-11c0-.577-.044-1.142-.129-1.694a1 1 0 1 1 1.977-.305c.101.652.153 1.32.153 1.999 0 7.18-5.82 13-13 13s-13-5.82-13-13 5.82-13 13-13c.679 0 1.347.052 1.999.153a1 1 0 1 1-.305 1.977 11.118 11.118 0 0 0-1.694-.129z" />
      <path d="M21 16a5 5 0 1 1-10.001-.001A5 5 0 0 1 21 16z" />
    </svg>
  )),
);
RecordingInsights.displayName = 'RecordingInsights';
RecordingInsights['iconName'] = 'recording-insights';
export default RecordingInsights;
