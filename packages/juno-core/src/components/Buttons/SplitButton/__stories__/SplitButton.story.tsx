import React, { ComponentProps, FunctionComponent } from 'react';

import {
  RcGrid,
  RcIcon,
  RcListItem,
  RcMenuItem,
  RcSplitButton,
  RcTooltip,
  RcTypography,
} from '@ringcentral/juno';
import { Add as AddSvg, Reply as ReplySvg } from '@ringcentral/juno-icon';
import {
  paletteChoice,
  sortInDocTable,
  switchToControlKnobs,
  Title,
} from '@ringcentral/juno-storybook';
import { Meta, Story } from '@storybook/react';

export default {
  title: '🚀 Cleanup Components/SplitButton',
  component: RcSplitButton,
  argTypes: {
    color: {
      options: paletteChoice,
      control: {
        type: 'select',
      },
    },
    ...sortInDocTable<keyof SplitButtonProps>(['size', 'variant', 'disabled']),
  },
} as Meta;

type SplitButtonProps = ComponentProps<typeof RcSplitButton>;

const SplitButtonComponent: FunctionComponent<SplitButtonProps> = ({
  children,
  ...args
}) => {
  switchToControlKnobs();

  return (
    <RcSplitButton
      {...args}
      MenuProps={{
        keepMounted: true,
        ...args.MenuProps,
      }}
    >
      <RcMenuItem
        key={'1'}
        title="Text"
        onClick={(e) => console.log('Text', e)}
      >
        Text
      </RcMenuItem>
      <RcMenuItem
        title="cool"
        useRcTooltip
        key={'2'}
        onClick={(e) => {
          console.log('Task', e);
        }}
      >
        Task
      </RcMenuItem>
      <RcMenuItem
        key={'3'}
        title="cool"
        useRcTooltip
        onClick={(e) => {
          console.log('Cool, that stopPropagation, so not close menu', e);
          e.stopPropagation();
        }}
      >
        Cool (stopPropagation)
      </RcMenuItem>
    </RcSplitButton>
  );
};

export const SplitButton: Story<SplitButtonProps> = (args) => (
  <SplitButtonComponent {...args} />
);

SplitButton.args = {
  color: 'primary',
  variant: 'contained',
  size: 'large',
  ControlButtonProps: {
    title: 'arrow',
  },
};

SplitButton.parameters = {
  tags: [
    {
      name: 'Spec',
      href: 'https://app.abstract.com/projects/d893ad32-0d8d-4e65-a37a-b4a5c881c51b/branches/master/commits/fdfe21d224a1083661c84a4ff73ab05d8677c51c/files/8ffaf9bc-6939-4ef9-9bd1-6aa5b460e2ae/layers/22353029-616A-4875-98C0-B06EF9A043DD',
    },
    {
      name: 'Mui',
      href: 'https://material-ui.com/components/button-group',
      value: 'ButtonGroup',
    },
    {
      name: 'Accessibility',
      value: '90%',
    },
  ],
};

SplitButton.storyName = 'SplitButton';

const variants = [
  'contained',
  'outlined',
  'text',
  'plain',
  'round',
  'plainIcon',
] as SplitButtonProps['variant'][];

const SplitButtonExamplesComponent: FunctionComponent<SplitButtonProps> = ({
  children,
  ...args
}) => {
  switchToControlKnobs();

  return (
    <div>
      <RcGrid container spacing={2}>
        {variants.map((variant) => (
          <RcGrid item xs key={variant}>
            <RcTypography
              color="neutral.f04"
              style={{ textTransform: 'capitalize' }}
            >
              {variant}
            </RcTypography>
            <RcSplitButton
              {...args}
              MenuProps={{
                keepMounted: true,
                ...args.MenuProps,
              }}
              variant={variant}
              onOpen={() => console.log('open')}
              onClose={(e, reason) => console.log('close', e, reason)}
            >
              <RcMenuItem key={'1'} onClick={(e) => console.log('Text', e)}>
                Text
              </RcMenuItem>
              <RcMenuItem key={'2'} onClick={(e) => console.log('Task', e)}>
                Task
              </RcMenuItem>
              <RcMenuItem key={'3'} onClick={(e) => console.log('Cool', e)}>
                Cool
              </RcMenuItem>
            </RcSplitButton>
          </RcGrid>
        ))}
      </RcGrid>

      <br />
      <br />
      <Title>Custom Props</Title>
      <RcSplitButton
        {...args}
        ActionButtonProps={{
          title: 'custom actionButton props',
          disabled: true,
          TooltipProps: {
            ignorePointer: true,
          },
          onClick: (e) => {
            console.log(e);
            e.stopPropagation();
          },
        }}
        ControlButtonProps={{
          title: 'custom controlButton props',
          onClick: (e) => {
            console.log(e);
          },
        }}
        MenuProps={{
          keepMounted: true,
          ...args.MenuProps,
        }}
      >
        <RcMenuItem
          key={'1'}
          title="Text"
          onClick={(e) => console.log('Text', e)}
        >
          Text
        </RcMenuItem>
        <RcMenuItem
          title="cool"
          useRcTooltip
          key={'2'}
          onClick={(e) => {
            console.log('Task', e);
          }}
        >
          Task
        </RcMenuItem>
        <RcMenuItem
          key={'3'}
          title="cool"
          useRcTooltip
          onClick={(e) => {
            console.log('Cool, that stopPropagation, so not close menu', e);
            e.stopPropagation();
          }}
        >
          Cool (stopPropagation)
        </RcMenuItem>
      </RcSplitButton>
      <RcSplitButton
        {...args}
        ActionButtonProps={{
          title: 'custom actionButton props',
          disabled: true,
          TooltipProps: {
            ignorePointer: true,
            maskProps: {
              tabIndex: 0,
            },
          },
          onClick: (e) => {
            console.log(e);
            e.stopPropagation();
          },
        }}
        ControlButtonProps={{
          title: 'custom controlButton props',
          onClick: (e) => {
            console.log(e);
          },
        }}
        MenuProps={{
          keepMounted: true,
          ...args.MenuProps,
        }}
      >
        <RcMenuItem
          key={'1'}
          title="Text"
          onClick={(e) => console.log('Text', e)}
        >
          Text
        </RcMenuItem>
        <RcMenuItem
          title="cool"
          useRcTooltip
          key={'2'}
          onClick={(e) => {
            console.log('Task', e);
          }}
        >
          Task
        </RcMenuItem>
        <RcMenuItem
          key={'3'}
          title="cool"
          useRcTooltip
          onClick={(e) => {
            console.log('Cool, that stopPropagation, so not close menu', e);
            e.stopPropagation();
          }}
        >
          Cool (stopPropagation)
        </RcMenuItem>
      </RcSplitButton>

      <Title>Custom ActionButton Children Render</Title>
      <RcSplitButton
        {...args}
        variant="round"
        ActionButtonProps={{
          children: <>Text</>,
        }}
        MenuProps={{
          keepMounted: true,
          ...args.MenuProps,
        }}
      >
        <RcListItem key={'1'} onClick={(e) => console.log('Text', e)} />
        <RcListItem key={'2'} onClick={(e) => console.log('Task', e)}>
          <RcIcon symbol={ReplySvg} size="medium" />
          Task
        </RcListItem>
        <RcListItem key={'3'} onClick={(e) => console.log('Cool', e)}>
          <RcTooltip title="cool">
            <RcIcon symbol={AddSvg} size="medium" />
          </RcTooltip>
          Cool
        </RcListItem>
      </RcSplitButton>
    </div>
  );
};

export const SplitButtonExamples: Story<SplitButtonProps> = (args) => (
  <SplitButtonExamplesComponent {...args} />
);

SplitButtonExamples.args = {
  color: 'primary',
  variant: 'contained',
  size: 'large',
  ActionButtonProps: {
    'aria-label': 'mainAction',
  },
  ControlButtonProps: {
    'aria-label': 'openMenu',
  },
};

SplitButtonExamples.storyName = 'SplitButton Examples';

const SplitButtonLoadingExamplesComponent: FunctionComponent<SplitButtonProps> =
  ({ children, ...args }) => {
    switchToControlKnobs();

    return (
      <RcGrid container spacing={2}>
        {variants.map((variant) => (
          <RcGrid item xs key={variant}>
            <RcTypography
              color="neutral.f04"
              style={{ textTransform: 'capitalize' }}
            >
              {variant}
            </RcTypography>
            <RcSplitButton
              {...args}
              MenuProps={{
                keepMounted: true,
                ...args.MenuProps,
              }}
              variant={variant}
              onOpen={() => console.log('open')}
              onClose={(e, reason) => console.log('close', e, reason)}
            >
              <RcMenuItem key={'1'} onClick={(e) => console.log('Text', e)}>
                Text
              </RcMenuItem>
              <RcMenuItem key={'2'} onClick={(e) => console.log('Task', e)}>
                Task
              </RcMenuItem>
              <RcMenuItem key={'3'} onClick={(e) => console.log('Cool', e)}>
                Cool
              </RcMenuItem>
            </RcSplitButton>
          </RcGrid>
        ))}
      </RcGrid>
    );
  };

export const SplitButtonLoadingExamples: Story<SplitButtonProps> = (args) => (
  <SplitButtonLoadingExamplesComponent {...args} />
);

SplitButtonLoadingExamples.args = {
  color: 'primary',
  variant: 'contained',
  size: 'large',
  loading: true,
  ActionButtonProps: {
    'aria-label': 'mainAction',
  },
  ControlButtonProps: {
    'aria-label': 'openMenu',
  },
};

SplitButtonLoadingExamples.storyName = 'SplitButton Loading';
