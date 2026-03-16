import '@testing-library/jest-dom/extend-expect';

import React from 'react';

import { Check } from '@ringcentral/juno-icon';
import { fireEvent, render } from '@ringcentral/juno-test';
import { cleanup, screen, waitFor } from '@testing-library/react';

import { RcDialog } from '../../Dialog';
import { RcStepButton } from '../../Stepper/StepButton';
import { RcTab } from '../../Tabs';
import { RcButton } from '../Button';
import { RcButtonBase } from '../ButtonBase';
import { RcIconButton } from '../IconButton';

afterEach(cleanup);

type AutoFocusCase = {
  name: string;
  label: string;
  role?: 'button' | 'tab';
  renderComponent: () => React.ReactElement;
};

const autoFocusCases: AutoFocusCase[] = [
  {
    name: 'RcIconButton',
    label: 'Icon button',
    renderComponent: () => (
      <RcIconButton autoFocus title="Icon button" symbol={Check} />
    ),
  },
  {
    name: 'RcButton',
    label: 'Text button',
    renderComponent: () => <RcButton autoFocus>Text button</RcButton>,
  },
  {
    name: 'RcStepButton',
    label: 'Step button',
    renderComponent: () => <RcStepButton autoFocus>Step button</RcStepButton>,
  },
  {
    name: 'RcTab',
    label: 'Focus tab',
    role: 'tab',
    renderComponent: () => <RcTab autoFocus label="Focus tab" value="focus" />,
  },
  {
    name: 'RcButtonBase',
    label: 'Base button',
    renderComponent: () => (
      <RcButtonBase autoFocus focusRipple>
        Base button
      </RcButtonBase>
    ),
  },
];

describe('safe autoFocus', () => {
  it.each(autoFocusCases)(
    'renders %s with autoFocus without crashing',
    async ({ label, renderComponent, role = 'button' }) => {
      expect(() => render(renderComponent())).not.toThrow();

      const button = screen.getByRole(role, { name: label });

      await waitFor(() => {
        expect(button).toBe(document.activeElement);
      });

      fireEvent.blur(button);
      fireEvent.focus(button);

      expect(button).toBeInTheDocument();
    },
  );

  it.each(autoFocusCases)(
    'renders %s with autoFocus inside RcDialog without crashing',
    async ({ label, renderComponent, role = 'button' }) => {
      expect(() =>
        render(<RcDialog open>{renderComponent()}</RcDialog>),
      ).not.toThrow();

      const button = await screen.findByRole(role, { name: label });

      await waitFor(() => {
        expect(button).toBe(document.activeElement);
      });

      fireEvent.blur(button);
      fireEvent.focus(button);

      expect(button).toBeInTheDocument();
    },
  );
});
