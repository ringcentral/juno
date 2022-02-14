import React from 'react';

export const isRef = <T = any>(obj: any): obj is React.RefObject<T> => {
  return obj && 'current' in obj;
};
