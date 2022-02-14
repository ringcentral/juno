import React from 'react';

import { fireEvent, render } from '@ringcentral/juno-test';
import { RcInlineEditable } from '../InlineEditable';
import { RcInlineEditableClasses } from '../utils';

describe('InlineEditable', () => {
  describe('render', () => {
    it('should render textarea when multiline is true', () => {
      const { container } = render(<RcInlineEditable value="" multiline />);

      expect(container.querySelector('textarea')).toBeDefined();
    });
    it("should render native tooltip when disabled, and don't have textField", () => {
      const value = 'test native tooltip';
      const { container } = render(<RcInlineEditable value={value} disabled />);
      const labelWrapper = container.querySelector(
        `.${RcInlineEditableClasses.label}`,
      );

      expect(labelWrapper).toBeDefined();
      expect(labelWrapper?.getAttribute('title')).toBe(value);

      expect(container.querySelector('textarea')).toBeNull();
      expect(container.querySelector('input')).toBeNull();

      expect(container.firstChild).toHaveStyleRule('color', '#121212');

      expect(container.firstChild).toHaveStyleRule(
        'pointer-events',
        'initial',
        {
          modifier: `.${RcInlineEditableClasses.label}`,
        },
      );
    });
  });

  describe('keyPress single ine', () => {
    let handleChange: jest.Mock;
    let handleKeyDown: jest.Mock;
    let renderResult: ReturnType<typeof render>;

    beforeEach(() => {
      handleChange = jest.fn();
      handleKeyDown = jest.fn();

      renderResult = render(
        <RcInlineEditable
          value="a"
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />,
      );
    });

    it('should not call onChange when "ENTER" is pressed but value has not changed', () => {
      const { container } = renderResult;

      fireEvent.mouseDown(container.firstChild!);
      fireEvent.keyDown(container.firstChild!, { key: 'Enter' });

      expect(handleKeyDown).toBeCalled();
      expect(handleChange).not.toBeCalled();
    });

    it('should call onChange when "TAB" is pressed and value has changed', () => {
      const { container } = renderResult;

      fireEvent.mouseDown(container.firstChild!);

      const input = container.querySelector('input');

      fireEvent.change(input!, { target: { value: 'abc' } });

      fireEvent.keyDown(input!, { key: 'Tab' });
      fireEvent.blur(input!);

      expect(handleKeyDown).toBeCalled();
      expect(handleChange).toHaveBeenCalledTimes(1);
      expect(handleChange).toHaveBeenCalledWith('abc', 'leave');
    });
    it('should not onChange onSave when "ESCAPE" is pressed and value has changed', () => {
      const { container } = renderResult;

      fireEvent.mouseDown(container.firstChild!);

      const input = container.querySelector('input');
      fireEvent.change(input!, { target: { value: 'abc' } });

      fireEvent.keyDown(container.firstChild!, { key: 'Escape' });

      expect(handleChange).not.toBeCalled();
    });
    it('should trim both the start and the end of the value when being saved with multiline being false [JPT-924]', async () => {
      const { container } = renderResult;

      fireEvent.mouseDown(container.firstChild!);

      const input = container.querySelector('input');
      fireEvent.change(input!, { target: { value: ' xxx new value xxx  ' } });

      fireEvent.keyDown(container.firstChild!, { key: 'Enter' });
      expect(handleChange).toHaveBeenCalledWith('xxx new value xxx', 'confirm');
    });
  });

  describe('keyPress multiline', () => {
    let handleChange: jest.Mock;
    let handleKeyDown: jest.Mock;
    let renderResult: ReturnType<typeof render>;

    beforeEach(() => {
      handleChange = jest.fn();
      handleKeyDown = jest.fn();

      renderResult = render(
        <RcInlineEditable
          value="a"
          multiline
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />,
      );
    });

    it('should trim only the end of the value when being saved with multiline being true [JPT-924]', () => {
      const { container } = renderResult;

      fireEvent.mouseDown(container.firstChild!);

      const input = container.querySelector('textarea');
      fireEvent.change(input!, {
        target: {
          value: `
xxx new value xxx

      `,
        },
      });

      fireEvent.keyDown(container.firstChild!, { key: 'Enter' });
      expect(handleChange).toHaveBeenCalledWith(
        `
xxx new value xxx`,
        'confirm',
      );
    });
  });
});
