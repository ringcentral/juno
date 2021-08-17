import range from 'lodash/range';

import { RcDownshiftSelectedItem } from '../utils';

export const options = [
  { id: 'phone_1', label: 'Afghanistan' },
  { id: 'phone_2', label: 'Aland Islands' },
  { id: 'phone_3', label: 'Bahamas' },
  { id: 'phone_4', label: 'Bahrain' },
  { id: 'phone_5', label: 'China' },
  { id: 'phone_6', label: 'Algeria' },
  { id: 'phone_7', label: 'American Samoa' },
  { id: 'phone_8', label: 'Andorra' },
  { id: 'phone_9', label: 'Angola' },
  { id: 'phone_10', label: 'Anguilla' },
  { id: 'phone_11', label: 'Antarctica' },
  { id: 'phone_12', label: 'Antigua and Barbuda' },
  { id: 'phone_13', label: 'Argentina' },
  { id: 'phone_14', label: 'Armenia' },
  {
    id: 'phone_15',
    label: "This item couldn't Selectable",
    unSelectable: true,
  },
  { id: 'phone_16', label: '木星' },
  { id: 'phone_16_2', label: '木星_1' },
  { id: 'phone_16_3', label: '木星_2' },
  { id: 'phone_16_4', label: '木星_3' },
  { id: 'phone_17', label: '鈴盛軟件' },
  { id: 'phone_18', label: '整合' },
  ...range(19, 10000).map((id: number) => ({
    id: `phone_${id}`,
    label: `Item-${id}`,
  })),
].sort((a, b) => {
  const nameA = a.label.toUpperCase(); // ignore upper and lowercase
  const nameB = b.label.toUpperCase(); // ignore upper and lowercase
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }

  // names must be equal
  return 0;
}) as RcDownshiftSelectedItem[];
