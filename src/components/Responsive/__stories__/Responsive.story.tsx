import { Meta, Story } from '@storybook/react/types-6-0';
import React, { ComponentProps, useRef, useState } from 'react';

import {
  styled,
  useResponsiveContext,
  useResponsiveMatch,
  withResponsive,
} from '../../../foundation';
import {
  notControlInDocTable,
  notShowInDocTable,
  sortInDocTable,
  switchToControlKnobs,
} from '../../../storybook';
import { RcButton } from '../../Buttons';
import {
  RcDialog,
  RcDialogActions,
  RcDialogContent,
  RcDialogTitle,
} from '../../Dialog';
import { RcRadio } from '../../Forms/Radio';
import { RcRadioGroup } from '../../Forms/RadioGroup';
import { RcTypography } from '../../Typography';
import { RcResponsive } from '../Responsive';

export default {
  title: '🚀 Cleanup Components/Responsive',
  component: RcResponsive,
  argTypes: {
    ...sortInDocTable<keyof ResponsiveProps>([]),
    ...notControlInDocTable<keyof ResponsiveProps>([
      'breakpointMap',
      'resizeThrottle',
    ]),
    ...notShowInDocTable<keyof ResponsiveProps>([]),
  },
} as Meta;

type ResponsiveProps = ComponentProps<typeof RcResponsive>;

const ResizeWrapper = styled.div`
  width: 1200px;
  height: 300px;
  resize: horizontal;
  border-style: solid;
  border-color: black;
  border-width: 2px;
  overflow: hidden;
`;

const DialogStory = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const bp = useResponsiveContext();
  const matchResult = useResponsiveMatch();

  console.log(matchResult);
  const { ltMD, gtSM } = matchResult;

  return (
    <>
      <RcDialog onClose={() => setOpen(false)} open={open}>
        <RcDialogTitle>{bp} Size</RcDialogTitle>
        <RcDialogContent>
          <RcTypography>try to resize screen</RcTypography>
          <RcRadioGroup row={gtSM}>
            <RcRadio label={gtSM ? 'horizontal radio' : 'vertical radio'} />
            <RcRadio label={gtSM ? 'horizontal radio' : 'vertical radio'} />
          </RcRadioGroup>
        </RcDialogContent>
        <RcDialogActions direction={ltMD ? 'vertical' : 'horizontal'}>
          <RcButton
            onClick={() => setOpen(false)}
            color="danger.b04"
            fullWidth={ltMD}
          >
            Cancel
          </RcButton>
          <RcButton fullWidth={ltMD}>OK</RcButton>
        </RcDialogActions>
      </RcDialog>
    </>
  );
};

const ResponsiveButton = withResponsive(RcButton, ['size']);

export const ResponsiveButtonExamples: Story = () => {
  switchToControlKnobs();
  const ref = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);

  return (
    <>
      <RcTypography color="danger.f02">
        If you want to make duplicate component can responsive size such as
        listItemActions, this hook is better than 'withResponsive'. Because
        there is no need to double count the matched size
      </RcTypography>
      {/* default bind responsive with window */}
      <RcResponsive>
        <DialogStory open={open} setOpen={setOpen} />
      </RcResponsive>
      {/* also can bind in different element */}
      <RcResponsive responsiveTarget={ref}>
        <ResizeWrapper ref={ref}>
          <RcTypography>
            lg: 'large', md: 'medium', sm: 'small', xs: hidden,
          </RcTypography>
          <ResponsiveButton
            hiddenPatterns={'xs'}
            onClick={() => setOpen(true)}
            size={['medium.md', 'small.sm', 'large.lg']}
          >
            open dialog
          </ResponsiveButton>
        </ResizeWrapper>
      </RcResponsive>
    </>
  );
};

ResponsiveButtonExamples.storyName = 'Responsive';
