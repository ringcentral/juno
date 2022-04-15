import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const Search = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M21.778 6.222c4.057 4.057 4.283 10.495.676 14.817l6.395 6.396a.999.999 0 1 1-1.414 1.414l-6.395-6.396c-4.322 3.607-10.76 3.382-14.818-.675-4.296-4.296-4.296-11.261 0-15.556s11.261-4.296 15.556 0zm-.859 13.535c2.968-3.556 2.744-8.822-.555-12.121a9 9 0 0 0-12.728 0 9 9 0 0 0 0 12.728c3.299 3.299 8.566 3.522 12.122.554l.633-.528.528-.633z" />
    </svg>
  )),
);
Search.displayName = 'Search';
Search['iconName'] = 'search';
export default Search;
