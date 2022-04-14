import { RcTableCellProps } from '../TableCell';

let id = 0;

export type DataType = ReturnType<typeof createData>;

export const createData = (
  firstName: string,
  lastName: string,
  age: number,
) => {
  id++;
  return { id, firstName, lastName, age };
};

export const sortHandle = {
  asc: (key: string) => (a: any, b: any) => {
    if (a[key] > b[key]) return 1;
    if (a[key] < b[key]) return -1;
    return 0;
  },
  desc: (key: string) => (a: any, b: any) => {
    if (a[key] > b[key]) return -1;
    if (a[key] < b[key]) return 1;
    return 0;
  },
};

export const tableData = [
  createData('alex', 'zu', 19),
  createData('blex', 'yu', 23),
  createData('clex', 'xu', 89),
  createData('dlex', 'wu', 32),
  createData('elex', 'vu', 164),
  createData('flex', 'uu', 99),
  createData('glex', 'tu', 19),
  createData('hlex', 'xu', 25),
  createData('ilex', 'ru', 59),
  createData('jlex', 'qu', 81),
  createData('klex', 'pu', 16),
  createData('llex', 'ou', 143),
  createData('mlex', 'nu', 92),
  createData('nlex', 'mu', 87),
  createData('olex', 'lu', 45),
  createData('plex', 'ku', 65),
  createData('qlex', 'ju', 72),
  createData('rlex', 'iu', 46),
  createData('slex', 'hu', 37),
  createData('tlex', 'gu', 24),
  createData('ulex', 'fu', 49),
  createData('vlex', 'eu', 39),
  createData('wlex', 'du', 53),
  createData('xlex', 'cu', 71),
  createData('ylex', 'bu', 84),
  createData('zlex', 'au', 65),
];

export const headRow: {
  label: string;
  key: string;
  align?: RcTableCellProps['align'];
}[] = [
  {
    label: 'First Name',
    key: 'firstName',
  },
  {
    label: 'Last Name',
    key: 'lastName',
  },
  {
    label: 'Age',
    key: 'age',
    align: 'right',
  },
];
