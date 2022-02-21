import React, { useRef } from 'react';

import {
  palette2,
  RcButton,
  styled,
  useHiddenTabindex,
} from '@ringcentral/juno';
import { Meta, Story } from '@storybook/react';

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
