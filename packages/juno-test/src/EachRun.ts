/* eslint-disable no-await-in-loop */
import { RenderResult } from '@testing-library/react';

type EachRunResult = {
  result: RenderResult;
};

/**
 * run each test in a test suite, and return the results with the test title
 */
export function EachRun<T = any, K extends EachRunResult = EachRunResult>(
  titles: TemplateStringsArray,
  ...actions: ((args: T, context: K) => void)[]
) {
  const context: K = {} as K;

  return async (args: any) => {
    try {
      for (let i = 0; i < titles.length; i++) {
        if (actions[i]) {
          await actions[i](args, context);
        }
        // TODO: wait can get correct error position
        // const title = titles[i];
        // try {
        // } catch (error) {
        //   expect(() => {}).toThrow(`[step]: ${title}\n ${error}`);
        // }
      }

      context.result?.unmount();
    } catch (error) {
      context.result?.unmount();
      throw error;
    }
  };
}
