import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const ParkCallText = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M16 3c1.944 0 3.762.304 5.454.912 1.711.627 3.199 1.48 4.463 2.559s2.256 2.353 2.975 3.824C29.631 11.766 30 13.354 30 15.06s-.369 3.304-1.108 4.794c-.739 1.49-1.74 2.794-3.004 3.912s-2.751 2-4.462 2.647c-1.692.627-3.5.941-5.425.941-.369 0-.739-.01-1.108-.029s-.739-.059-1.108-.118l-.467-.088-.058.059c-.719.627-1.556 1.137-2.508 1.529s-2.012.608-3.179.647H5.59c-.35 0-.617-.162-.802-.485s-.18-.642.015-.956l.817-1.324c.292-.51.525-.946.7-1.309s.311-.681.408-.956l.029-.029-.292-.235c-.681-.569-1.293-1.186-1.837-1.853s-1.006-1.368-1.385-2.103c-.379-.735-.676-1.505-.89-2.309s-.331-1.608-.35-2.412v-.324c0-1.706.369-3.294 1.108-4.765.719-1.451 1.711-2.721 2.975-3.809s2.751-1.936 4.463-2.544C12.241 3.314 14.059 3 16.003 3zm0 1.882c-1.692 0-3.276.265-4.754.794s-2.761 1.25-3.85 2.162a10.343 10.343 0 0 0-2.596 3.25 8.707 8.707 0 0 0-.933 3.971c0 .765.097 1.52.292 2.265.214.765.51 1.495.89 2.191s.851 1.348 1.415 1.956a13.026 13.026 0 0 0 1.896 1.676c.136.098.243.23.321.397s.097.338.058.515c-.058.373-.185.789-.379 1.25S7.893 26.333 7.543 27l-.263.471h.292c.953-.039 1.818-.226 2.596-.559s1.458-.765 2.042-1.294l.175-.176c.117-.098.248-.172.394-.221s.287-.054.423-.015c.506.098.987.167 1.444.206s.909.059 1.356.059c1.672 0 3.247-.274 4.725-.824s2.766-1.294 3.865-2.235a10.26 10.26 0 0 0 2.581-3.324c.642-1.255.962-2.598.962-4.029s-.311-2.765-.933-4c-.622-1.235-1.483-2.309-2.581-3.221s-2.387-1.632-3.865-2.162c-1.478-.529-3.063-.794-4.754-.794zm.989 5.618c2.052 0 3.511 1.537 3.511 3.678 0 2.076-1.377 3.591-3.328 3.687l-.197.005h-3.303v2.493c0 .57-.332 1.007-.84 1.113l-.12.019-.126.006c-.602 0-1.027-.418-1.081-1.009l-.006-.129V11.64c0-.614.385-1.073.96-1.132l.126-.006h4.402zm-.307 2.098h-3.009v3.173h3.009c1.062 0 1.612-.547 1.612-1.593 0-.982-.486-1.518-1.439-1.575l-.173-.005z" />
    </svg>
  )),
);
ParkCallText.displayName = 'ParkCallText';
ParkCallText['iconName'] = 'park-call-text';
export default ParkCallText;
