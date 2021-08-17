/*
 * @Author: Valor Lin (valor.lin@ringcentral.com)
 * @Date: 2019-11-18 11:50:58
 * Copyright © RingCentral. All rights reserved.
 */
import { mount } from 'enzyme';
import React from 'react';

import { withDelay } from '../withDelay';

jest.useFakeTimers();

const DELAY = 1000;
const TestComponent = () => <div>My Component</div>;
const DelayedComponent = withDelay(TestComponent);

describe('withDelay()', () => {
  describe('delay', () => {
    it(`should render component after ${DELAY}ms [JPT-4067]`, () => {
      const wrapper = mount(<DelayedComponent delay={DELAY} />);
      expect(wrapper.html()).toBeNull();
      jest.advanceTimersByTime(DELAY);
      wrapper.update();
      expect(wrapper.html()).toBe('<div>My Component</div>');
    });

    it('should render component immediately', () => {
      const wrapper = mount(<DelayedComponent />);
      expect(wrapper.html()).toBe('<div>My Component</div>');
    });
  });

  describe('placeholder', () => {
    it('should render placeholder', () => {
      const wrapper = mount(
        <DelayedComponent delay={DELAY} placeholder={<div>Placeholder</div>} />,
      );
      expect(wrapper.html()).toBe('<div>Placeholder</div>');
      jest.advanceTimersByTime(DELAY);
      wrapper.update();
      expect(wrapper.html()).toBe('<div>My Component</div>');
    });
  });
});
