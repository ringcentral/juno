import React, { FunctionComponent, useState } from 'react';

import {
  RcCollapse,
  RcDragDropContext,
  RcDragDropContextProps,
  RcDraggable,
  RcDroppable,
  RcList,
  RcListItem,
  RcListSubheader,
} from '@ringcentral/juno';
import { select } from '@storybook/addon-knobs';
import { Meta, Story } from '@storybook/react';

import { DataType, GroupType, initialData, ItemType } from './DnDExampleData';

export default {
  title: '🚀 Cleanup Components/DnD/Dnd Examples/Multiple list',
} as Meta;

const Item: FunctionComponent<{
  item: ItemType;
  index: number;
}> = (props) => {
  return (
    <RcDraggable draggableId={props.item.id} index={props.index}>
      {(provider) => {
        return (
          <RcListItem
            ref={provider.innerRef}
            {...provider.dragHandleProps}
            {...provider.draggableProps}
          >
            {props.item.content}
          </RcListItem>
        );
      }}
    </RcDraggable>
  );
};
const Items: FunctionComponent<{
  items: ItemType[];
}> = (props) => {
  return (
    <>
      {props.items.map((item, index) => (
        <Item key={item.id} item={item} index={index} />
      ))}
    </>
  );
};

const Group: FunctionComponent<{
  group: GroupType;
  items: ItemType[];
  index: number;
}> = (props) => {
  return (
    <RcDraggable draggableId={props.group.id} index={props.index}>
      {(provider) => (
        <div {...provider.draggableProps} ref={provider.innerRef}>
          <RcListSubheader disableSticky {...provider.dragHandleProps}>
            {props.group.title}
          </RcListSubheader>
          <RcCollapse in timeout="auto" unmountOnExit>
            <RcDroppable
              droppableId={props.group.id}
              direction="vertical"
              type="items"
            >
              {(provided) => {
                return (
                  <RcList
                    innerRef={provided.innerRef}
                    {...provided.droppableProps}
                    style={{ minHeight: '1px' }}
                  >
                    <Items items={props.items} />
                    {provided.placeholder}
                  </RcList>
                );
              }}
            </RcDroppable>
          </RcCollapse>
        </div>
      )}
    </RcDraggable>
  );
};
const Groups: FunctionComponent<DataType> = (props) => {
  return (
    <>
      {props.groupOrder.map((groupId, index) => {
        const group = props.groups[groupId];
        const items = group.itemIds.map((itemsId) => props.items[itemsId]);
        return (
          <Group key={group.id} group={group} items={items} index={index} />
        );
      })}
    </>
  );
};

type DnDListProps = {};

export const DnDList: Story<DnDListProps> = () => {
  const [data, setData] = useState(initialData);

  const direction = select(
    'direction',
    {
      vertical: 'vertical',
      horizontal: 'horizontal',
    },
    'vertical',
  );

  const handleDragEnd: RcDragDropContextProps['onDragEnd'] = (result) => {
    const { destination, source, draggableId, type } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    if (type === 'groups') {
      const newGroupOrder = Array.from(data.groupOrder);
      newGroupOrder.splice(source.index, 1);
      newGroupOrder.splice(destination.index, 0, draggableId);

      const newState = {
        ...data,
        groupOrder: newGroupOrder,
      };
      setData(newState);
      return;
    }

    const start = data.groups[source.droppableId];
    const finish = data.groups[destination.droppableId];

    if (start === finish) {
      const group = data.groups[source.droppableId];
      const newItemIds = Array.from(group.itemIds);
      newItemIds.splice(source.index, 1);
      newItemIds.splice(destination.index, 0, draggableId);

      const newGroup = {
        ...group,
        itemIds: newItemIds,
      };

      const newState = {
        ...data,
        groups: {
          ...data.groups,
          [newGroup.id]: newGroup,
        },
      };

      setData(newState);
      return;
    }

    const startItemIds = Array.from(start.itemIds);
    startItemIds.splice(source.index, 1);
    const newStart = {
      ...start,
      itemIds: startItemIds,
    };

    const finishItemIds = Array.from(finish.itemIds);
    finishItemIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finish,
      itemIds: finishItemIds,
    };

    const newState = {
      ...data,
      groups: {
        ...data.groups,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
    };
    setData(newState);
  };

  return (
    <RcDragDropContext onDragEnd={handleDragEnd}>
      <RcDroppable droppableId="all-groups" direction={direction} type="groups">
        {(provider) => (
          <div
            {...provider.droppableProps}
            ref={provider.innerRef}
            style={{
              display: 'flex',
              flexDirection: direction === 'vertical' ? 'column' : 'row',
            }}
          >
            <Groups
              groups={data.groups}
              groupOrder={data.groupOrder}
              items={data.items}
            />
            {provider.placeholder}
          </div>
        )}
      </RcDroppable>
    </RcDragDropContext>
  );
};

DnDList.args = {};
DnDList.storyName = 'Multiple DnD List';
