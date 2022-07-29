import React, { forwardRef, FunctionComponent, useState } from 'react';
import ReactDOM from 'react-dom';

import { DraggableProvided, DraggableStateSnapshot } from 'react-beautiful-dnd';

import {
  css,
  RcCollapse,
  RcDragDropContext,
  RcDragDropContextProps,
  RcDraggable,
  RcDraggableProps,
  RcDroppable,
  RcList,
  RcListItem,
  RcListItemProps,
  RcListSubheader,
  styled,
} from '@ringcentral/juno';
import { Meta, Story } from '@storybook/react';

import { DataType, GroupType, initialData, ItemType } from './DnDExampleData';

export default {
  title:
    '🚀 Cleanup Components/DnD/Dnd Examples/Multiple list/Multiple DnD List(Portal)',
  direction: {
    options: ['vertical', 'horizontal'],
    control: {
      type: 'select',
    },
  },
} as Meta;

const portal: HTMLElement = document.createElement('div');
portal.classList.add('my-super-cool-portal');

if (!document.body) {
  throw new Error('body not ready for portal creation!');
}

document.body.appendChild(portal);

type StyledListItemProps = RcListItemProps & { inPortal: boolean };

const _StyledListItem = forwardRef<any, StyledListItemProps>(
  ({ inPortal, ...rest }, ref) => {
    return <RcListItem {...rest} ref={ref} />;
  },
);

const StyledListItem = styled(_StyledListItem)`
  position: relative;
  ${({ inPortal }) =>
    inPortal
      ? css`
          & ::after {
            position: absolute;
            background: lightgreen;
            left: none;
            top: none;
            bottom: 0;
            right: 0;
            content: 'in portal';
          }
        `
      : ''}
`;

const PortalAwareListItem: FunctionComponent<{
  provider: DraggableProvided;
  snapshot: DraggableStateSnapshot;
}> = (props) => {
  const { provider, snapshot, children } = props;

  const usePortal: boolean = snapshot.isDragging;

  const child = (
    <StyledListItem
      ref={provider.innerRef}
      {...provider.draggableProps}
      {...provider.dragHandleProps}
      inPortal={usePortal}
    >
      {children}
    </StyledListItem>
  );

  if (!usePortal) {
    return <>{child}</>;
  }

  // if dragging - put the item in a portal
  return ReactDOM.createPortal(child, portal);
};

type StyledGroupProps = {
  inPortal: boolean;
};

const StyledGroup = styled.div<StyledGroupProps>`
  position: relative;

  ${({ inPortal }) =>
    inPortal
      ? css`
          & > ::after {
            position: absolute;
            background: lightgreen;
            left: none;
            top: none;
            bottom: 0;
            right: 0;
            content: 'in portal';
          }
        `
      : ''}
`;

const PortalAwareGroup: FunctionComponent<{
  provider: DraggableProvided;
  snapshot: DraggableStateSnapshot;
}> = (props) => {
  const { provider, snapshot, children } = props;

  const usePortal: boolean = snapshot.isDragging;

  const child = (
    <StyledGroup
      ref={provider.innerRef}
      {...provider.draggableProps}
      {...provider.dragHandleProps}
      inPortal={usePortal}
    >
      {children}
    </StyledGroup>
  );

  if (!usePortal) {
    return <>{child}</>;
  }

  // if dragging - put the item in a portal
  return ReactDOM.createPortal(child, portal);
};

const Item: FunctionComponent<{
  item: ItemType;
  index: number;
}> = (props) => {
  return (
    <RcDraggable draggableId={props.item.id} index={props.index}>
      {(provider, snapshot) => {
        return (
          <PortalAwareListItem provider={provider} snapshot={snapshot}>
            {props.item.content}
          </PortalAwareListItem>
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
    <RcDraggable
      draggableId={props.group.id}
      index={props.index}
      classes={{
        root: 'my-custom-root',
        isDragging: 'my-custom-dragging',
      }}
    >
      {(provider, snapshot) => (
        <PortalAwareGroup provider={provider} snapshot={snapshot}>
          <RcListSubheader disableSticky {...provider.dragHandleProps}>
            {props.group.title}
          </RcListSubheader>
          <RcCollapse in timeout="auto" unmountOnExit>
            <RcDroppable
              droppableId={props.group.id}
              direction="vertical"
              type="items"
            >
              {(provider) => {
                return (
                  <RcList
                    innerRef={provider.innerRef}
                    {...provider.droppableProps}
                    style={{ minHeight: '1px' }}
                  >
                    <Items items={props.items} />
                    {provider.placeholder}
                  </RcList>
                );
              }}
            </RcDroppable>
          </RcCollapse>
        </PortalAwareGroup>
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
type DnDListProps = {
  direction: RcDraggableProps['directionOnly'];
};

export const DnDListPortal: Story<DnDListProps> = ({ direction }) => {
  const [data, setData] = useState(initialData);

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
    <div
      style={{
        display: 'flex',
        left: '80px',
        top: '20px',
        transform: 'translate3d(0,0,0)',
      }}
    >
      <RcDragDropContext onDragEnd={handleDragEnd}>
        <RcDroppable
          droppableId="all-groups"
          direction={direction}
          type="groups"
        >
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
    </div>
  );
};

DnDListPortal.args = { direction: 'vertical' };
DnDListPortal.storyName = 'Multiple DnD List(Portal)';
