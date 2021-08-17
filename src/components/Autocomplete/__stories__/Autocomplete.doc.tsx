import { AutocompleteProps } from '@material-ui/lab';
import React, { FunctionComponent } from 'react';

export type AutocompleteDocProps = AutocompleteProps<any, any, any, any>;
const AutocompleteDoc: FunctionComponent<AutocompleteDocProps> = (props) => {
  return <>This component only for props generator</>;
};

export { AutocompleteDoc };
