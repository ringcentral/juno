import { Meta, Story } from '@storybook/react/types-6-0';
import React, { ComponentProps } from 'react';

import {
  notControlInDocTable,
  notShowInDocTable,
  sortInDocTable,
  switchToControlKnobs,
} from '../../../../storybook';
import { RcAccordion } from '../../Accordion';
import { RcAccordionSummary } from '../../AccordionSummary';
import { RcAccordionDetails } from '../AccordionDetails';

export default {
  title: '🚀 Cleanup Components/Accordion/AccordionDetails',
  component: RcAccordionDetails,
  argTypes: {
    ...sortInDocTable<keyof AccordionDetailsProps>([]),
    ...notControlInDocTable<keyof AccordionDetailsProps>([]),
    ...notShowInDocTable<keyof AccordionDetailsProps>([]),
  },
} as Meta;

type AccordionDetailsProps = ComponentProps<typeof RcAccordionDetails>;

export const AccordionDetails: Story<AccordionDetailsProps> = ({
  children,
  ...args
}) => {
  switchToControlKnobs();
  return (
    <RcAccordion expanded>
      <RcAccordionSummary {...args} expandIcon>
        Expansion Panel 1
      </RcAccordionSummary>
      <RcAccordionDetails {...args}>{children}</RcAccordionDetails>
    </RcAccordion>
  );
};

AccordionDetails.storyName = 'AccordionDetails';

AccordionDetails.args = {
  children: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
  malesuada lacus ex, sit amet blandit leo lobortis eget.`,
};

AccordionDetails.argTypes = {
  ...notControlInDocTable<keyof AccordionDetailsProps>([]),
};

AccordionDetails.parameters = {
  tags: [
    {
      name: 'Mui',
      href: 'https://material-ui.com/api/accordion-details/',
    },
    {
      name: 'Accessibility',
      value: '100%',
    },
  ],
};
