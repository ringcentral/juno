// eslint-disable-next-line react/no-typos
import 'react';

declare global {
  namespace JSX {
    interface IntrinsicClassAttributes<T> extends React.ClassAttributes<T> {
      /** Make storybook ref can use in ref with `RefObject<HTMLDivElement>` */
      ref?: any;
    }
  }
}
