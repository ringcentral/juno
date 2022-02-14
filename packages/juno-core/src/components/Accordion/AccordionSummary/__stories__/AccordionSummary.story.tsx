import React, { ComponentProps } from 'react';

import { ArrowUp } from '@ringcentral/juno-icon';
import {
  notControlInDocTable,
  notShowInDocTable,
  sortInDocTable,
  switchToControlKnobs,
} from '@ringcentral/juno-storybook';
import { Meta, Story } from '@storybook/react';

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
      name: 'Spec',
      href: 'https://app.abstract.com/projects/d893ad32-0d8d-4e65-a37a-b4a5c881c51b/branches/master/commits/9e531c6b30974c6e11ee1ca2030d489988c01e23/files/8ffaf9bc-6939-4ef9-9bd1-6aa5b460e2ae/layers/B3474330-9DD0-44B0-92D5-8A8B71F7406B',
    },
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
