import React from 'react';

import { RcTextWithLink } from '../TextWithLink';

export default {
  title: '🖤 Deprecated Components/Text/TextWithLink',
};

export const TextWithLink = () => {
  return (
    <RcTextWithLink
      text="You are an admin to this team."
      linkText="Learn about team administration"
    />
  );
};

TextWithLink.story = {
  name: 'TextWithLink',
};
