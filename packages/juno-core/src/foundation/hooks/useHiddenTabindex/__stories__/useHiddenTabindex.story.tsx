import React, { useRef } from 'react';

import { Meta, Story } from '@storybook/react';

import { RcButton } from '../../../../components';
import styled from '../../../styled-components';
import { palette2 } from '../../../styles';
import { useHiddenTabindex } from '../useHiddenTabindex';

export default {
  title: '🔧 Foundation/Hooks/useHiddenTabindex',
  argTypes: {},
} as Meta;

const Item = styled.div`
  height: 100px;
  width: 100px;
  &[tabindex='-1'] {
    background-color: ${palette2('interactive', 'b01')};
  }
`;

export const useHiddenTabindexExample: Story<{}> = () => {
  const hiddenRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const events = useHiddenTabindex<HTMLDivElement>(hiddenRef);

  return (
    <>
      <Item
        ref={hiddenRef}
        onFocus={() => {
          buttonRef.current?.focus();
        }}
      />
      <RcButton ref={buttonRef} {...events}>
        focus
      </RcButton>
    </>
  );
};

useHiddenTabindexExample.args = {};
useHiddenTabindexExample.storyName = 'useHiddenTabindex';
