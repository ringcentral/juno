import { Meta, Story } from '@storybook/react';
import React, { ComponentProps } from 'react';

import ArrowUp from '../../../../icon/ArrowUp';
import {
  notControlInDocTable,
  notShowInDocTable,
  sortInDocTable,
  switchToControlKnobs,
} from '../../../../storybook';
import { RcAccordion } from '../../Accordion';
import { RcAccordionDetails } from '../../AccordionDetails';
import { RcAccordionSummary } from '../AccordionSummary';

export default {
  title: '🚀 Cleanup Components/Accordion/AccordionSummary',
  component: RcAccordionSummary,
  argTypes: {
    ...sortInDocTable<keyof AccordionSummaryProps>([
      'disableRipple',
      'expandIcon',
      'IconButtonProps',
    ]),
    ...notControlInDocTable<keyof AccordionSummaryProps>([]),
    ...notShowInDocTable<keyof AccordionSummaryProps>([]),
  },
} as Meta;

type AccordionSummaryProps = ComponentProps<typeof RcAccordionSummary>;

export const AccordionSummary: Story<AccordionSummaryProps> = ({
  children,
  ...args
}) => {
  switchToControlKnobs();
  return (
    <RcAccordion>
      <RcAccordionSummary {...args} expandIcon>
        Expansion Panel 1
      </RcAccordionSummary>
      <RcAccordionDetails>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        malesuada lacus ex, sit amet blandit leo lobortis eget.
      </RcAccordionDetails>
    </RcAccordion>
  );
};
AccordionSummary.storyName = 'AccordionSummary';

AccordionSummary.args = {};

AccordionSummary.argTypes = {
  ...notControlInDocTable<keyof AccordionSummaryProps>([]),
};

AccordionSummary.parameters = {
  tags: [
    {
      name: 'Mui',
      href: 'https://material-ui.com/api/accordion-summary/',
    },
    {
      name: 'Accessibility',
      value: '100%',
    },
  ],
};

export const AccordionSummaryExamples: Story<AccordionSummaryProps> = ({
  children,
  ...args
}) => {
  switchToControlKnobs();
  return (
    <RcAccordion>
      <RcAccordionSummary
        {...args}
        expandIcon={ArrowUp}
        IconButtonProps={{ size: 'xsmall' }}
      >
        Custom Icon and size
      </RcAccordionSummary>
      <RcAccordionDetails>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        malesuada lacus ex, sit amet blandit leo lobortis eget.
      </RcAccordionDetails>
    </RcAccordion>
  );
};

AccordionSummaryExamples.storyName = 'AccordionSummary Examples';
