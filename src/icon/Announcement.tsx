import React, { forwardRef, memo } from 'react';

const Announcement = memo(
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
          fill="var(--color2, #066fac)"
          d="M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16z"
        />
        <path
          fill="var(--color3, #fff)"
          d="M17.024 11.159c.559 0 1.012.435 1.012.971v7.765c0 .536-.453.971-1.012.971L7.92 18.278c-.598-.145-1.012-.471-1.012-.971v-2.588c0-.468.412-.793 1.012-.971l9.104-2.588zm-7.418 7.117h1.349v3.208a.674.674 0 01-1.348 0v-3.208zm8.767-.144v-4.206c0-.163 1.535.647 1.535 2.103s-1.535 2.259-1.535 2.103zM23.066 14.108a3.222 3.222 0 01-.017 3.176.357.357 0 11-.623-.352 2.516 2.516 0 00.014-2.47.36.36 0 01.626-.355zM24.329 12.788c.596.837.919 1.842.914 2.896s-.338 2.062-.943 2.906a.354.354 0 11-.578-.412c.518-.723.803-1.585.808-2.49s-.272-1.764-.783-2.482c-.114-.16-.076-.383.085-.498s.384-.079.497.08z"
        />
      </svg>
    ),
  ),
);
Announcement.displayName = 'Announcement';
Announcement['iconName'] = 'Announcement';
export default Announcement;
