export type ItemType = {
  id: string;
  content: string;
};
export type ItemsType = {
  [T: string]: ItemType;
};

export type GroupType<T = string> = {
  id: T;
  title: string;
  itemIds: string[];
};

export type GroupsType = {
  [T: string]: GroupType<typeof T>;
};

export type DataType = {
  items: ItemsType;
  groups: GroupsType;
  groupOrder: GroupType['id'][];
};

export const simpleInitialData: DataType = {
  items: {
    'item-1': { id: 'item-1', content: 'Item 1 Content' },
    'item-2': { id: 'item-2', content: 'Item 2 Content' },
    'item-3': { id: 'item-3', content: 'Item 3 Content' },
    'item-4': { id: 'item-4', content: 'Item 4 Content' },
  },
  groups: {
    'group-1': {
      id: 'group-1',
      title: 'Group 1',
      itemIds: ['item-1', 'item-2', 'item-3', 'item-4'],
    },
  },
  groupOrder: ['group-1'],
};

export const initialData: DataType = {
  items: {
    'item-1': { id: 'item-1', content: 'Item 1 Content' },
    'item-2': { id: 'item-2', content: 'Item 2 Content' },
    'item-3': { id: 'item-3', content: 'Item 3 Content' },
    'item-4': { id: 'item-4', content: 'Item 4 Content' },
  },
  groups: {
    'group-1': {
      id: 'group-1',
      title: 'Group 1',
      itemIds: ['item-1', 'item-2', 'item-3', 'item-4'],
    },
    'group-2': {
      id: 'group-2',
      title: 'Group 2',
      itemIds: [],
    },
    'group-3': {
      id: 'group-3',
      title: 'Group 3',
      itemIds: [],
    },
  },
  groupOrder: ['group-1', 'group-2', 'group-3'],
};
