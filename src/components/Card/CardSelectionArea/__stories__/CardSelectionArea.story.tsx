import { Meta, Story } from '@storybook/react';
import React, { ComponentProps, useState } from 'react';

import {
  notControlInDocTable,
  notShowInDocTable,
  sortInDocTable,
  switchToControlKnobs,
} from '../../../../storybook';
import { RcTypography } from '../../../Typography';
import { RcCardContent } from '../../CardContent';
import { RcCard } from '../../Card';
import { RcCardSelectionArea } from '../CardSelectionArea';

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
  switchToControlKnobs();

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
      name: 'Mui',
      href: 'https://material-ui.com/api/checkbox/',
    },
    {
      name: 'Accessibility',
      value: '100%',
    },
  ],
};
