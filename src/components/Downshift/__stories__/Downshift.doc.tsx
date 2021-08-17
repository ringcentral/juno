import React, { FunctionComponent } from 'react';
import { RcDownshiftProps } from '../Downshift';
import { RcDownshiftSelectedItem } from '../utils';

export type DownshiftDocProps = RcDownshiftProps<
  RcDownshiftSelectedItem,
  RcDownshiftSelectedItem
>;
const DownshiftDoc: FunctionComponent<DownshiftDocProps> = (props) => {
  return <>This component only for props generator</>;
};

export { DownshiftDoc };
