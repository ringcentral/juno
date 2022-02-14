import React, { ComponentProps, useState } from 'react';

import { Meta, Story } from '@storybook/react';

import { styled } from '../../../../foundation';
import {
  notControlInDocTable,
  notShowInDocTable,
  sortInDocTable,
  switchToControlKnobs,
} from '@ringcentral/juno-storybook';
import { RcButton } from '../../../Buttons';
import { RcPaginationItem } from '../../PaginationItem';
import { RcPagination } from '../Pagination';

export default {
  title: '🚀 Cleanup Components/Pagination',
  component: RcPagination,
  argTypes: {
    ...sortInDocTable<keyof PaginationProps>([]),
    ...notControlInDocTable<keyof PaginationProps>([]),
    ...notShowInDocTable<keyof PaginationProps>([]),
  },
} as Meta;

type PaginationProps = ComponentProps<typeof RcPagination>;

export const Pagination: Story<PaginationProps> = (args) => {
  switchToControlKnobs();
  return <RcPagination {...args} />;
};

Pagination.storyName = 'Pagination';

Pagination.args = {
  count: 50,
};

Pagination.argTypes = {
  ...notControlInDocTable<keyof PaginationProps>([]),
};

Pagination.parameters = {
  tags: [
    {
      name: 'Spec',
      href: 'https://app.abstract.com/projects/39f391c0-3c68-11e9-9430-af40e4ce41b8/branches/676df647-c0cf-4f76-bdd9-4433ff86d534/commits/1a7175cc1a20af0a2e15bfd83db3d2ef75c0f498/files/dcf0f6a7-0c9f-4117-87f1-420b2adba4e6/layers/C9DFD433-67FA-4F57-8715-DE969E96DE84',
    },
    {
      name: 'Mui',
      href: 'https://material-ui.com/components/pagination/#pagination',
    },
    {
      name: 'Accessibility',
      value: '100%',
    },
  ],
};

export const PaginationCustomItem: Story<PaginationProps> = (args) => {
  switchToControlKnobs();
  const [bg, setBg] = useState('red');
  return (
    <>
      <RcPagination
        {...args}
        renderItem={(item: any) => {
          return <RcPaginationItem {...item} component={ColorDiv} bg={bg} />;
        }}
      />
      <br />
      <RcButton color="danger.b04" onClick={() => setBg('red')}>
        red bg
      </RcButton>
      <br />
      <br />
      <RcButton color="interactive.b02" onClick={() => setBg('blue')}>
        blue bg
      </RcButton>
      <br />
      <br />
      <RcButton color="success.b04" onClick={() => setBg('green')}>
        green bg
      </RcButton>
    </>
  );
};
const ColorDiv = styled.div<{ bg: string }>`
  background-color: ${(props) => props.bg};
  color: white;
`;
PaginationCustomItem.storyName = 'Pagination Custom Item';

PaginationCustomItem.args = { count: 50 };

PaginationCustomItem.argTypes = {
  ...notControlInDocTable<keyof PaginationProps>([]),
};

PaginationCustomItem.parameters = {
  tags: [
    {
      name: 'Mui',
      href: 'https://material-ui.com/components/pagination/#pagination',
    },
    {
      name: 'Accessibility',
      value: '100%',
    },
  ],
};
