import { Meta, Story } from '@storybook/react/types-6-0';
import React, { ComponentProps } from 'react';

import {
  notControlInDocTable,
  notShowInDocTable,
  sortInDocTable,
  switchToControlKnobs,
} from '../../../../storybook';
import { RcTypography } from '../../../Typography';
import { RcCardContent } from '../../CardContent';
import { RcCard } from '../../Card';
import { RcCardHoverActions } from '../CardHoverActions';
import { RcIconButton } from '../../../Buttons';
import { Delete, Edit } from '../../../../icon';

export default {
  title: '🚀 Cleanup Components/Cards/CardHoverActions',
  component: RcCardHoverActions,
  argTypes: {
    ...sortInDocTable<keyof RcCardHoverActionsProps>([]),
    ...notControlInDocTable<keyof RcCardHoverActionsProps>([]),
    ...notShowInDocTable<keyof RcCardHoverActionsProps>([]),
  },
} as Meta;

type RcCardHoverActionsProps = ComponentProps<typeof RcCardHoverActions>;

export const CardHoverActions: Story<RcCardHoverActionsProps> = ({
  children,
  ...args
}) => {
  switchToControlKnobs();

  return (
    <RcCard style={{ width: 300 }} tabIndex={0}>
      <RcCardHoverActions {...args}>
        <RcIconButton
          symbol={Edit}
          size="small"
          variant="contained"
          color="neutral.b01"
          style={{ marginRight: 16 }}
        />
        <RcIconButton
          symbol={Delete}
          size="small"
          variant="contained"
          color="neutral.b01"
        />
      </RcCardHoverActions>
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

CardHoverActions.storyName = 'CardHoverActions';

CardHoverActions.args = {
  visible: false,
};

CardHoverActions.argTypes = {
  ...notControlInDocTable<keyof RcCardHoverActionsProps>([]),
};

CardHoverActions.parameters = {
  tags: [
    {
      name: 'Accessibility',
      value: '100%',
    },
  ],
};
