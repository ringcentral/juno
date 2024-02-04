import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const SharedDirectory = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M30 5v22a2 2 0 0 1-2 2H7.986V3H28a2 2 0 0 1 2 2zM5.971 29V3H4a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h1.971zm11.136-11.645c-.615-.108-1.147-.161-1.596-.161a9.504 9.504 0 0 0-3.361.674 5.154 5.154 0 0 0-1.428.835c-.39.342-.586.737-.586 1.186v1.486h10.75v-1.486c0-.449-.196-.844-.586-1.186-.39-.332-.866-.611-1.428-.835s-1.15-.396-1.765-.513zm7.627.67c-.541-.09-1.008-.134-1.402-.134a8.669 8.669 0 0 0-2.391.372c.246.216.459.485.612.753.157.28.206.746.206 1.12v1.238h6.294v-1.238c0-.374-.171-.703-.514-.988-.343-.277-.761-.509-1.254-.696s-1.01-.329-1.55-.427zm.265-4.956c-.462-.435-1.018-.653-1.668-.653s-1.206.217-1.668.653-.692.962-.692 1.581.231 1.147.692 1.587 1.018.659 1.668.659c.65 0 1.206-.22 1.668-.659s.692-.968.692-1.587-.231-1.145-.692-1.581zm-7.59-1.661c-.526-.523-1.158-.784-1.898-.784s-1.373.261-1.899.784-.788 1.155-.788 1.897.262 1.376.788 1.904 1.159.791 1.899.791 1.373-.263 1.898-.791.789-1.161.789-1.904c0-.742-.263-1.374-.789-1.897z" />
    </svg>
  )),
);
SharedDirectory.displayName = 'SharedDirectory';
SharedDirectory['iconName'] = 'shared-directory';
export default SharedDirectory;
