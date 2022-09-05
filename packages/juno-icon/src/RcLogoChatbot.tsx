import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const RcLogoChatbot = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path
        fill="#0684bc"
        d="M29.851 5.385c-.312-1.539-1.2-2.593-2.728-3.062a6.888 6.888 0 0 0-2.04-.253H7.059a9.272 9.272 0 0 0-1.403.083c-1.574.24-2.741 1.032-3.321 2.567-.287.758-.331 1.56-.331 2.355V29.211c0 .628.22.846.847.846H7.95c.637 0 .852-.223.852-.872V9.182c0-.5.2-.72.663-.72h13.016c.493 0 .704.22.704.72v6.179c0 .498-.208.708-.707.708H16.63c-.428 0-.63.192-.631.612 0 1.13-.019 2.261.006 3.39.023.935.197 1.848.707 2.654a1309.26 1309.26 0 0 0 4.275 6.707 1.321 1.321 0 0 0 1.158.632c1.828.005 3.658.005 5.488 0 .561 0 .72-.32.419-.804a8360.64 8360.64 0 0 0-3.936-6.353c-.276-.446-.229-.607.24-.822.879-.397 1.754-.806 2.639-1.184 2.019-.861 2.976-2.424 2.99-4.574.019-3.129.007-6.258-.007-9.388a7.863 7.863 0 0 0-.127-1.554z"
      />
    </svg>
  )),
);
RcLogoChatbot.displayName = 'RcLogoChatbot';
RcLogoChatbot['iconName'] = 'RC-logo-chatbot';
export default RcLogoChatbot;
