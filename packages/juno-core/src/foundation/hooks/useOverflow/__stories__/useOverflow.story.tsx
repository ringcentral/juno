import React, { useRef, useState } from 'react';

import { palette2, styled, useOverflow } from '@ringcentral/juno';
import { Title } from '@ringcentral/juno-storybook';
import { Meta, Story } from '@storybook/react';

export default {
  title: '🔧 Foundation/Hooks/useOverflow',
  argTypes: {},
} as Meta;

const ResizeWrapper = styled.div<{ border: boolean }>`
  width: 500px;
  height: 300px;
  resize: both;
  overflow: hidden;
  border: 2px solid transparent;
  color: ${palette2('neutral', 'f06')};
  border-color: ${({ border }) => border && palette2('neutral', 'l04')};
`;

export const useOverflowExample: Story<{}> = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [border, setBorder] = useState(false);

  useOverflow(ref, (state, value) => {
    setBorder(state);

    console.log(value);
  });

  return (
    <>
      <Title>That border only show when text overflow</Title>
      <ResizeWrapper ref={ref} border={border}>
        A free cultural work is, according to the definition of Free Cultural
        Works, one that has no significant legal restriction on people's freedom
        to: use the content and benefit from using it, study the content and
        apply what is learned, make and distribute copies of the content, change
        and improve the content and distribute these derivative works.[1][2]
        Free content encompasses all works in the public domain and also those
        copyrighted works whose licenses honor and uphold the freedoms mentioned
        above. Because the Berne Convention in most countries by default grants
        copyright holders monopolistic control over their creations, copyright
        content must be explicitly declared free, usually by the referencing or
        inclusion of licensing statements from within the work. Although there
        are a great many different definitions in regular everyday use, free
        content is legally very similar, if not like an identical twin, to open
        content. An analogy is a use of the rival terms free software and
        open-source, which describe ideological differences rather than legal
        ones.[3][4][5] For instance, the Open Knowledge Foundation's Open
        Definition describes "open" as synonymous to the definition of free in
        the "Definition of Free Cultural Works" (as also in the Open Source
        Definition and Free Software Definition).[6] For such free/open content
        both movements recommend the same three Creative Commons licenses, the
        CC BY, CC BY-SA, and CC0.[7][8][9][10]
      </ResizeWrapper>
    </>
  );
};

useOverflowExample.args = {};
useOverflowExample.storyName = 'useOverflow';
