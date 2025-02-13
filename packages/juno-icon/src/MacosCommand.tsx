import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const MacosCommand = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M11.823 13.752v4.496H9.91c-2.142 0-3.886 1.673-3.886 3.829s1.744 3.9 3.886 3.9a3.895 3.895 0 0 0 3.886-3.895V20.177h4.41v1.9c0 2.156 1.745 3.9 3.886 3.9a3.895 3.895 0 0 0 3.886-3.895v-.005c0-2.156-1.744-3.83-3.886-3.83h-1.929v-4.495h1.93c2.14 0 3.885-1.673 3.885-3.829s-1.744-3.9-3.886-3.9a3.895 3.895 0 0 0-3.886 3.895v1.92h-4.41V9.923c0-2.156-1.745-3.9-3.886-3.9a3.895 3.895 0 0 0-3.886 3.895v.005c0 2.156 1.744 3.83 3.886 3.83h1.914zm-1.9-1.9h-.007a1.93 1.93 0 0 1-.007-3.858c1.05 0 1.914.865 1.914 1.943v1.915h-1.9zm12.154 0h-1.915V9.937c0-1.078.88-1.943 1.93-1.943a1.928 1.928 0 0 1-.008 3.858h-.008zm-8.282 6.41v-4.524h4.41v4.524h-4.41zm-3.872 1.872h1.9v1.93c0 1.06-.855 1.92-1.913 1.928h-.001a1.93 1.93 0 0 1 .007-3.858h.007zm12.154 0h.007a1.928 1.928 0 0 1 .007 3.856 1.94 1.94 0 0 1-1.929-1.927v-1.93h1.915z" />
    </svg>
  )),
);
MacosCommand.displayName = 'MacosCommand';
MacosCommand['iconName'] = 'macos_command';
export default MacosCommand;
