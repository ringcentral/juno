import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const Workspace = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="m9.172 20 .131.009c.173.023.338.091.477.197l.099.087 1.828 1.828.145.135c.491.43 1.108.688 1.759.735l.218.008h4.343l.198-.007a3 3 0 0 0 1.764-.724l.16-.148 1.828-1.828.099-.087c.139-.106.303-.174.477-.197l.131-.009h7.172v6a2 2 0 0 1-2 2h-24a2 2 0 0 1-2-2v-6h7.172zM23.558 4a2 2 0 0 1 1.897 1.368L29.666 18l-7.037.007a3 3 0 0 0-1.764.724l-.16.148-1.828 1.828-.099.087a1.003 1.003 0 0 1-.477.197L18.17 21h-4.343l-.131-.009a1.007 1.007 0 0 1-.477-.197l-.099-.087-1.828-1.828-.145-.135a2.996 2.996 0 0 0-1.759-.735l-.218-.008H2.33L6.542 5.369a2 2 0 0 1 1.897-1.368h15.117zM23 13H9a1 1 0 0 0-.117 1.993L9 15h14a1 1 0 0 0 .117-1.993L23 13zm-2-5H11a1 1 0 0 0-.117 1.993L11 10h10a1 1 0 0 0 .117-1.993L21 8z" />
    </svg>
  )),
);
Workspace.displayName = 'Workspace';
Workspace['iconName'] = 'workspace';
export default Workspace;
