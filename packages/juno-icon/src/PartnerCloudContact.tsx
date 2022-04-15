import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const PartnerCloudContact = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M28 3a2 2 0 0 1 2 2v22a2 2 0 0 1-2 2H7.986V3H28zM5.971 3v26H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h1.971zm18.024 14.014H13.982a2 2 0 0 0-2 2v5.047h14.013v-5.047a2 2 0 0 0-2-2zM19 7a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" />
    </svg>
  )),
);
PartnerCloudContact.displayName = 'PartnerCloudContact';
PartnerCloudContact['iconName'] = 'partner_cloud_contact';
export default PartnerCloudContact;
