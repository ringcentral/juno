import React, {
  ComponentProps,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';

import { Meta, Story } from '@storybook/react/types-6-0';

import { styled, useTheme } from '../../../foundation';
import Add from '../../../icon/Add';
import Videocam from '../../../icon/Videocam';
import {
  notShowInDocTable,
  paletteChoice,
  sortInDocTable,
  switchToControlKnobs,
} from '../../../storybook';
import { Title } from '../../../storybook/components';
import { RcBox } from '../../Box';
import { RcButton, RcIconButton, RcSplitButton } from '../../Buttons';
import {
  RcDialog,
  RcDialogActions,
  RcDialogContent,
  RcDialogTitle,
} from '../../Dialog';
import { RcCheckbox, RcRadio, RcSwitch } from '../../Forms';
import { RcIcon } from '../../Icon';
import { RcLink } from '../../Link';
import { RcListItem } from '../../List';
import { RcText } from '../../Text';
import { RcTypography } from '../../Typography';
import { RcTooltip } from '../Tooltip';

export default {
  title: '🚀 Cleanup Components/Tooltip',
  component: RcTooltip,
  argTypes: {
    color: {
      control: {
        type: 'select',
        options: paletteChoice,
      },
    },
    ...sortInDocTable<keyof TooltipProps>([
      'textColor',
      'placement',
      'tooltipForceHide',
    ]),
    ...notShowInDocTable<keyof TooltipProps>(['injectGlobalStyle']),
  },
} as Meta;

type TooltipProps = ComponentProps<typeof RcTooltip>;

const isTestEnv = (window as any).TEST_ENV;

export const Tooltip: Story<TooltipProps> = ({ children, ...args }) => {
  switchToControlKnobs();

  return (
    <>
      <RcBox textAlign="center">
        <RcTooltip {...args}>
          <RcButton>Tooltip when hover or keyboard focus</RcButton>
        </RcTooltip>
        {!isTestEnv && (
          <>
            <br />
            <br />
            <br />
            <br />
            <br />
            <RcTooltip {...args} title="I'm tooltip" open>
              <RcTypography color="neutral.f06">
                tooltip always open
              </RcTypography>
            </RcTooltip>
          </>
        )}
      </RcBox>
    </>
  );
};

Tooltip.parameters = {
  tags: [
    {
      name: 'Mui',
      href: 'https://material-ui.com/components/tooltips/#tooltip',
    },
    {
      name: 'Accessibility',
      value: '100%',
    },
  ],
};

Tooltip.args = {
  title: 'I am arrow tip',
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const TooltipSizes: Story<TooltipProps> = () => {
  return (
    <>
      {!isTestEnv ? (
        <Wrapper>
          <div>
            <Title>medium</Title>
            <RcTooltip title="I'm tooltip" open size="medium">
              <RcButton>Button</RcButton>
            </RcTooltip>
          </div>
          <div>
            <Title>large</Title>
            <RcTooltip title="I'm tooltip" open size="large">
              <RcButton>Button</RcButton>
            </RcTooltip>
          </div>
          <div>
            <Title>xlarge</Title>
            <RcTooltip
              title="Lorem ipsum dolor sit amet, consecteturssffff adipiscing elit. Sed in nunc diam. Aeneanssffaf efficitur nibh dui, ac posuere elitffdafdaffff consequatAenean"
              open
              size="xlarge"
            >
              <RcButton>Button</RcButton>
            </RcTooltip>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            {/* those br for tooltip space */}
          </div>
        </Wrapper>
      ) : null}
    </>
  );
};

export const TooltipWithDisabledChildren: Story<TooltipProps> = () => {
  switchToControlKnobs();
  const [disabled, setDisabled] = useState(false);
  const ref = useRef(null);

  const handleClick = () => {
    setDisabled(!disabled);
  };

  useLayoutEffect(() => {
    console.log(ref);
  }, []);

  const title = disabled ? 'Title when disabled' : 'Normal Title';

  const theme = useTheme();

  return (
    <>
      <Title>
        ignorePointer{' '}
        <RcText highlight>that will add a span wrap children component,</RcText>
      </Title>
      <RcButton onClick={handleClick} color="highlight.f02">
        Toggle disabled state
      </RcButton>
      <br />
      <br />
      <RcIconButton
        title={title}
        disabled={disabled}
        symbol={Add}
        TooltipProps={{ ignorePointer: true }}
      />
      <RcCheckbox
        title={title}
        useRcTooltip
        disabled={disabled}
        TooltipProps={{ ignorePointer: true }}
      />
      <RcRadio
        title={title}
        useRcTooltip
        disabled={disabled}
        TooltipProps={{ ignorePointer: true }}
      />
      <br />
      <br />
      <RcSplitButton
        disabled={disabled}
        ActionButtonProps={{
          children: <RcIcon symbol={Videocam} size="medium" />,
          TooltipProps: {
            ignorePointer: true,
          },
          title,
        }}
        ControlButtonProps={{
          TooltipProps: {
            ignorePointer: true,
          },
          title,
        }}
      >
        <RcListItem key={'1'} onClick={(e) => console.log('Text', e)} />
        <RcListItem key={'2'} onClick={(e) => console.log('Task', e)}>
          Task
        </RcListItem>
        <RcListItem key={'3'} onClick={(e) => console.log('Cool', e)}>
          Cool
        </RcListItem>
      </RcSplitButton>
      <RcTooltip
        title="disabled item tooltip"
        ignorePointer
        maskProps={{ as: 'div' }}
      >
        <RcButton disabled>disabled item also have Tooltip</RcButton>
      </RcTooltip>
      <br />
      <br />
      <RcButton
        useRcTooltip
        title={title}
        radius="round"
        fullWidth
        disabled={disabled}
        TooltipProps={{
          ignorePointer: disabled,
          maskProps: {
            as: 'div',
            style: {
              width: '100%',
              borderRadius: theme.radius.round,
            },
          },
        }}
      >
        Always have tooltip when disabled with Round radius
      </RcButton>
      <br />
      <br />
      <RcButton
        useRcTooltip
        title={title}
        radius="circle"
        fullWidth
        ref={ref}
        disabled={disabled}
        TooltipProps={{
          ignorePointer: disabled,
          maskProps: {
            style: {
              width: '100%',
              borderRadius: theme.radius.circle,
            },
          },
        }}
      >
        Always have tooltip when disabled with circle radius
      </RcButton>
    </>
  );
};

export const TooltipWithForceHide: Story<TooltipProps> = ({
  children,
  ...args
}) => {
  switchToControlKnobs();

  const [force, setForce] = useState(false);

  const [openState, setOpenState] = useState(false);

  return (
    <>
      <RcTooltip
        {...args}
        tooltipForceHide={force}
        onClose={(e) => console.log('close', e)}
        onOpen={(e) => console.log('open', e)}
      >
        <RcButton
          type="button"
          onClick={() => {
            setForce(!force);
          }}
        >
          Switch force
        </RcButton>
      </RcTooltip>
      <RcTooltip
        {...args}
        tooltipForceHide={force}
        onClose={(e) => console.log('close', e)}
        onOpen={(e) => console.log('open', e)}
      >
        <RcButton
          type="button"
          onClick={() => {
            setOpenState(true);
          }}
          style={{ marginLeft: '1em' }}
          color="highlight.b03"
        >
          Open
        </RcButton>
      </RcTooltip>
      <RcDialog
        open={openState}
        onClose={(e, reason) => {
          setOpenState(false);
          console.log('close', e, reason);
        }}
        TransitionProps={{
          onExited: (e) => console.log('onExited', e),
        }}
      >
        <RcDialogTitle>Title</RcDialogTitle>
        <RcDialogContent>
          <RcTypography>some content</RcTypography>
          <RcCheckbox title="Go" label="Do something" />
          <RcCheckbox label="Custom Field" />
        </RcDialogContent>
        <RcDialogActions>
          <RcButton>Custom Button</RcButton>
          <RcButton>Custom Button</RcButton>
        </RcDialogActions>
      </RcDialog>
      <br />
      <br />
      <RcSwitch
        checked={force}
        onClick={() => {
          setForce(!force);
        }}
        label={`Click to Switch forceHide: ${force ? 'true' : 'false'}`}
      />
    </>
  );
};

TooltipWithForceHide.args = {
  title: 'Add',
};

export const TooltipWithCustomColor: Story<TooltipProps> = ({
  children,
  ...args
}) => {
  switchToControlKnobs();

  return (
    <>
      <RcTooltip {...args} color="interactive.b02" textColor="neutral.f01">
        <RcButton type="button">Open</RcButton>
      </RcTooltip>
      <RcTooltip {...args} color="highlight.b03" textColor="neutral.f06">
        <RcButton
          type="button"
          color="highlight.b03"
          style={{ marginLeft: '1em' }}
        >
          Close
        </RcButton>
      </RcTooltip>
    </>
  );
};

TooltipWithCustomColor.args = {
  title: 'Add',
};

export const TooltipWithInteractiveLink: Story<TooltipProps> = ({
  children,
  ...args
}) => {
  switchToControlKnobs();

  return (
    <RcTooltip
      {...args}
      title={
        <>
          open{' '}
          <RcLink
            href="https://www.ringcentral.com"
            color="neutral.f01"
            underline
            target="_blank"
          >
            ringcentral
          </RcLink>
        </>
      }
      interactive
    >
      <RcButton type="button">Open</RcButton>
    </RcTooltip>
  );
};

TooltipWithInteractiveLink.args = {};
