import React, { ComponentProps, useState } from 'react';

import {
  RcCard,
  RcCardContent,
  RcCardSelectionArea,
  RcTypography,
} from '@ringcentral/juno';
import {
  notControlInDocTable,
  notShowInDocTable,
  sortInDocTable,
} from '@ringcentral/juno-storybook';
import { Meta, Story } from '@storybook/react';

export default {
  title: '🚀 Cleanup Components/Cards/CardSelectionArea',
  component: RcCardSelectionArea,
  argTypes: {
    ...sortInDocTable<keyof RcCardSelectionAreaProps>([]),
    ...notControlInDocTable<keyof RcCardSelectionAreaProps>([]),
    ...notShowInDocTable<keyof RcCardSelectionAreaProps>([]),
  },
} as Meta;

type RcCardSelectionAreaProps = ComponentProps<typeof RcCardSelectionArea>;

export const CardSelectionArea: Story<RcCardSelectionAreaProps> = ({
  ...args
}) => {
  const [selected, setSelected] = useState(false);
  const onSelectionChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    checked: boolean,
  ) => setSelected(checked);

  return (
    <RcCard style={{ width: 300 }} selected={selected}>
      <RcCardSelectionArea {...args} onChange={onSelectionChange} />
      <RcCardContent>
        <RcTypography gutterBottom variant="display1">
          Lizard
        </RcTypography>
        <RcTypography gutterBottom variant="body1">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </RcTypography>
      </RcCardContent>
    </RcCard>
  );
};

CardSelectionArea.storyName = 'CardSelectionArea';

CardSelectionArea.args = {
  disabled: false,
};

CardSelectionArea.argTypes = {
  ...notControlInDocTable<keyof RcCardSelectionAreaProps>([]),
};

CardSelectionArea.parameters = {
  tags: [
    {
      name: 'Spec',
      href: 'https://share.goabstract.com/eac80403-273a-4188-a1df-c3bd3c2ac042?mode=build&selected=2394831046-6A21724C-30D9-4CF1-9088-4C5B0044326D',
    },
    {
      name: 'Mui',
      href: 'https://material-ui.com/api/checkbox/',
    },
    {
      name: 'Accessibility',
      value: '100%',
    },
  ],
};
