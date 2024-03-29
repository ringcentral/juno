import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const ThreadReplySnackbar = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M16.407 4.089c1.027 0 1.869.801 1.943 1.818l.006.146.001 5.08.973-.001c6.998 0 12.67 5.717 12.67 12.77v2.947c0 1.17-1.667 1.359-1.925.218-.78-3.463-3.801-5.998-7.346-6.107l-.257-.004h-4.114l-.001 5.08c0 .52-.206 1.021-.571 1.389a1.938 1.938 0 0 1-2.632.115l-.001.002-.124-.115-9.914-9.992a1.976 1.976 0 0 1-.114-2.653l.114-.124 9.914-9.992a1.942 1.942 0 0 1 1.379-.575l.001-.001zm-4.325.224a.994.994 0 0 1 .013 1.325l-.183.206-9.946 10.2 9.946 10.042.179.202a.994.994 0 0 1-.07 1.39.958.958 0 0 1-1.178.096l-.13-.103L.594 17.454a1.998 1.998 0 0 1-.048-2.795l.077-.076.08-.072 10.01-10.247a.959.959 0 0 1 1.368.049zm4.131 2.018a.194.194 0 0 0-.138.057l-9.443 9.518a.197.197 0 0 0 0 .279l9.443 9.518a.196.196 0 0 0 .334-.139l.001-5.587a.98.98 0 0 1 .974-.983l5.39.005a9.71 9.71 0 0 1 6.996 3.306l.197.231-.039-.279c-.74-4.867-4.701-8.665-9.622-9.112l.001-.044-2.924-.001a.975.975 0 0 1-.967-.868l-.007-.115-.001-5.588a.195.195 0 0 0-.194-.196l-.001-.001z" />
    </svg>
  )),
);
ThreadReplySnackbar.displayName = 'ThreadReplySnackbar';
ThreadReplySnackbar['iconName'] = 'thread-reply-snackbar';
export default ThreadReplySnackbar;
