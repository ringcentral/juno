import { boolean, select } from '@storybook/addon-knobs';
import { Meta, Story } from '@storybook/react';
import React, { useState } from 'react';

import {
  RcDragDropContext,
  RcDragDropContextProps,
  RcDraggable,
  RcDroppable,
} from '..';
import { RcList, RcListItem } from '../../List';
import { RcDragHandle } from '../DragHandle';
import { simpleInitialData } from './DnDExampleData';

export default {
  title: '🚀 Cleanup Components/DnD',
} as Meta;

export const DnD: Story<{}> = () => {
  const [data, setData] = useState(simpleInitialData);
  const enableDirectionOnly = boolean('enable directionOnly', false);

  const direction = select(
    'direction',
    {
      vertical: 'vertical',
      horizontal: 'horizontal',
    },
    'vertical',
  );

  const handleDragEnd: RcDragDropContextProps['onDragEnd'] = (result) => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
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
  };

  return (
    <RcDragDropContext onDragEnd={handleDragEnd}>
      {data.groupOrder.map((groupId) => {
        const group = data.groups[groupId];
        const items = group.itemIds.map((itemsId) => data.items[itemsId]);
        return (
          <RcDroppable
            key={group.id}
            droppableId={group.id}
            direction={direction}
            type="items"
          >
            {(provided) => (
              <RcList
                innerRef={provided.innerRef}
                {...provided.droppableProps}
                style={{
                  display: 'flex',
                  flexDirection: direction === 'vertical' ? 'column' : 'row',
                }}
              >
                {items.map((item, index) => (
                  <RcDraggable
                    key={item.id}
                    index={index}
                    draggableId={item.id}
                    directionOnly={enableDirectionOnly ? direction : undefined}
                  >
                    {(provided) => {
                      return (
                        <RcListItem
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                        >
                          <RcDragHandle {...provided.dragHandleProps} />
                          {item.content}
                        </RcListItem>
                      );
                    }}
                  </RcDraggable>
                ))}
                {provided.placeholder}
              </RcList>
            )}
          </RcDroppable>
        );
      })}
    </RcDragDropContext>
  );
};

DnD.args = {};

DnD.parameters = {
  tags: [
    {
      name: 'Source',
      value: 'react-beautiful-dnd',
      href: 'https://github.com/atlassian/react-beautiful-dnd',
    },
    {
      name: 'Accessibility',
      value: '100%',
    },
  ],
};

DnD.storyName = 'DnD';
