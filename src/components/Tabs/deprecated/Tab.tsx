import { Component, ReactNode } from 'react';

type RcTabProps = {
  /** Tab title */
  title: JSX.Element | string;
  /** Tab content */
  children: ReactNode; // Container
  /** automationId, used for test */
  automationId?: string;
};

/** @release */
class RcTab extends Component<RcTabProps> {
  constructor(props: RcTabProps) {
    super(props);
  }

  render() {
    const { children } = this.props;
    return { children };
  }
}

export { RcTab, RcTabProps };
