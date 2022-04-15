import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const CodeSnippets = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M28 4a2 2 0 0 1 2 2v20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h24zm0 7H4v14a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1V11zM9.707 13.293l4.243 4.243a.999.999 0 0 1 0 1.414l-4.243 4.243a1 1 0 0 1-1.414-1.414l3.536-3.536-3.536-3.536a.999.999 0 1 1 1.414-1.414zM23 21a1 1 0 0 1 0 2h-6a1 1 0 0 1 0-2h6zm4-15H5a1 1 0 0 0-1 1v2h24V7a1 1 0 0 0-1-1z" />
    </svg>
  )),
);
CodeSnippets.displayName = 'CodeSnippets';
CodeSnippets['iconName'] = 'code_snippets';
export default CodeSnippets;
