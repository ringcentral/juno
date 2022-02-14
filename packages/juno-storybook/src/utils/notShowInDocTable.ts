const disableTable = { table: { disable: true, type: null } };
const disableControl = { control: { type: null } };

export function notShowInDocTable<T>(keys: T[]) {
  return keys.reduce<any>((acc, curr) => {
    acc[curr] = disableTable;
    return acc;
  }, {});
}

export function notControlInDocTable<T>(keys: T[]) {
  return keys.reduce<any>((acc, curr) => {
    acc[curr] = disableControl;
    return acc;
  }, {});
}

export function sortInDocTable<T>(keys: T[]) {
  return keys.reduce<any>((acc, curr) => {
    acc[curr] = {};
    return acc;
  }, {});
}
