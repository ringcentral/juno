/* eslint-disable no-await-in-loop */
import { ReactWrapper } from 'enzyme';

export function EachRun<
  T = any,
  K extends {
    wrapper: ReactWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;
  } = {
    wrapper: ReactWrapper;
  }
>(titles: TemplateStringsArray, ...actions: ((args: T, context: K) => void)[]) {
  const context: K = {} as K;

  return async (args: any) => {
    for (let i = 0; i < titles.length; i++) {
      const title = titles[i];
      if (title.trim() !== '') {
        if (actions[i]) {
          await actions[i](args, context);
        }
        // TODO: wait can get correct error position
        // try {
        // } catch (error) {
        //   expect(() => {}).toThrow(`[step]: ${title}\n ${error}`);
        // }
      }
    }

    context.wrapper?.unmount();
  };
}
