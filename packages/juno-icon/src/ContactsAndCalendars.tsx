import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const ContactsAndCalendars = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M22 2a2 2 0 0 1 2 2v2h4a2 2 0 0 1 2 2v20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4V4a2 2 0 1 1 4 0v2h8V4a2 2 0 0 1 2-2zm0 18H10a2.001 2.001 0 0 0-1.995 1.851L8 22v4h16v-4a2 2 0 0 0-2-2zm-6-10a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" />
    </svg>
  )),
);
ContactsAndCalendars.displayName = 'ContactsAndCalendars';
ContactsAndCalendars['iconName'] = 'contacts_and_calendars';
export default ContactsAndCalendars;
