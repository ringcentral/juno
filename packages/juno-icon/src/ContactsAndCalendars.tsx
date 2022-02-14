import React, { forwardRef, memo } from 'react';

const ContactsAndCalendars = memo(
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
        <path d="M22 2a2 2 0 012 2v2h4a2 2 0 012 2v20a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h4V4a2 2 0 114 0v2h8V4a2 2 0 012-2zm0 18H10a2.001 2.001 0 00-1.995 1.851L8 22v4h16v-4a2 2 0 00-2-2zm-6-10a4 4 0 100 8 4 4 0 000-8z" />
      </svg>
    ),
  ),
);
ContactsAndCalendars.displayName = 'ContactsAndCalendars';
ContactsAndCalendars['iconName'] = 'contacts_and_calendars';
export default ContactsAndCalendars;
