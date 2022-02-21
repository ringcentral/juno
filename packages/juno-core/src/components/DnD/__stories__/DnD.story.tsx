import React, { useState } from 'react';

import {
  RcDragDropContext,
  RcDragDropContextProps,
  RcDraggable,
  RcDragHandle,
  RcDroppable,
  RcList,
  RcListItem,
} from '@ringcentral/juno';
import { boolean, select } from '@storybook/addon-knobs';
import { Meta, Story } from '@storybook/react';

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
      name: 'Spec',
      href: 'https://app.abstract.com/projects/d893ad32-0d8d-4e65-a37a-b4a5c881c51b/branches/master/commits/1967dd0543b8d49c947c2b344866631686eae425/files/8ffaf9bc-6939-4ef9-9bd1-6aa5b460e2ae/layers/1B32D85F-E3F3-47C9-B00F-BA16160DE597',
    },
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
