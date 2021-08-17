import { createContext, useContext } from 'react';

import { FieldInfo } from './types';

const RcFormContext = createContext<Map<string, FieldInfo>>(new Map());

const useRcFormContext = () => useContext(RcFormContext);

export { RcFormContext, useRcFormContext };
