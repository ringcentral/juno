import React, { forwardRef, memo } from 'react';

const Login = memo(
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
        <path d="M27 29H12a2.002 2.002 0 01-2-2v-2a1 1 0 012 0v1a1 1 0 001 1h13a1 1 0 001-1V6a1 1 0 00-1-1H13a1 1 0 00-1 1v1a1 1 0 01-2 0V5a2.002 2.002 0 012-2h15a2.002 2.002 0 012 2v22a2.002 2.002 0 01-2 2zm-12.707-9.121L17.172 17H4a1 1 0 010-2h13.172l-2.879-2.879a1 1 0 011.414-1.414l4.586 4.586a.999.999 0 010 1.414l-4.586 4.586a1 1 0 01-1.414-1.414z" />
      </svg>
    ),
  ),
);
Login.displayName = 'Login';
Login['iconName'] = 'login';
export default Login;
