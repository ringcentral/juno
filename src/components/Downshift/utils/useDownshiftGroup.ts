import { useMemo } from 'react';

import {
  combineProps,
  logInDev,
  omit,
  useChange,
  useEventCallback,
  useRefState,
} from '../../../foundation';
import { RcDownshiftProps } from '../Downshift';
import {
  RcDownshiftGroupedOption,
  RcDownshiftSelectedItem,
} from './SelectItem';

type UseDownshiftGroup = {
  filteredResult: RcDownshiftSelectedItem[];
  id: string;
} & Pick<
  RcDownshiftProps,
  | 'options'
  | 'groupBy'
  | 'getExpandIconProps'
  | 'onGroupExpanded'
  | 'groupExpanded'
  | 'groupVariant'
>;

export const useDownshiftGroup = ({
  groupBy,
  options,
  filteredResult,
  getExpandIconProps,
  groupExpanded,
  onGroupExpanded,
  groupVariant,
  id,
}: UseDownshiftGroup) => {
  const [groupExpandedMapRef, setGroupExpandedMap] = useRefState<
    Record<string, boolean>
  >({});
  const isTitleGroup = groupVariant === 'normal';

  useChange(
    () => {
      if (typeof groupExpanded === 'object') {
        setGroupExpandedMap(groupExpanded, false);
      }
    },
    () => groupExpanded,
  );

  const handleGroupExpandedChange = (key: string) => {
    const groupExpandedMap = groupExpandedMapRef.current;

    if (typeof groupExpanded === 'boolean') {
      return;
    }

    const toExpandedState = !groupExpandedMap[key];

    const newExpandedMap = {
      ...groupExpandedMap,
      [key]: toExpandedState,
    };

    setGroupExpandedMap(newExpandedMap);

    if (onGroupExpanded) {
      const group = optionsGroupList.find((x) => x.group === key);

      if (group) {
        onGroupExpanded(
          {
            ...(omit(group, ['getExpandIconProps']) as any),
            expanded: toExpandedState,
          },
          newExpandedMap,
        );
      }
    }
  };

  const handleExpandIconClick = useEventCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, key: string) => {
      handleGroupExpandedChange(key);
      e.preventDefault();
      e.stopPropagation();
    },
  );

  const optionsGroupList = useMemo(() => {
    /** key with this group count */
    if (groupBy && options) {
      // used to keep track of key and indexes in the result array
      const indexBy = new Map();
      let warn = false;

      return filteredResult.reduce<RcDownshiftGroupedOption[]>(
        (acc, option, index) => {
          const group = groupBy(option);

          if (acc.length > 0 && acc[acc.length - 1].group === group) {
            acc[acc.length - 1].options.push({
              ...option,
              group: acc[acc.length - 1],
            });
          } else {
            if (process.env.NODE_ENV !== 'production') {
              if (indexBy.get(group) && !warn) {
                logInDev({
                  component: 'useDownshift',
                  comment: `Material-UI: The options provided combined with the \`groupBy\` method returns duplicated headers.
                  You can solve the issue by sorting the options with the output of \`groupBy\``,
                });
                warn = true;
              }
              indexBy.set(group, true);
            }

            const newGroup: RcDownshiftGroupedOption = {
              key: index,
              index,
              group,
              options: [{ ...option }],
              expanded: false,
              getExpandIconProps: (additionExpandIconProps) => {
                return newGroup.options.length > 1
                  ? combineProps(
                      {
                        onClick: (e) => {
                          handleExpandIconClick(e, group);
                        },
                        onMouseDown: (e) => {
                          e.preventDefault();
                          e.stopPropagation();
                        },
                        tabIndex: -1,
                      },
                      combineProps(
                        additionExpandIconProps,
                        getExpandIconProps?.(newGroup),
                      ),
                    )
                  : undefined;
              },
            };
            newGroup.options[0].group = newGroup;

            if (isTitleGroup) {
              newGroup.options.unshift({
                id: `${id}-${group}`,
                label: group,
                disabled: true,
                group: newGroup,
              });
            }

            acc.push(newGroup);
          }

          return acc;
        },
        [],
      );
    }
    return [];
  }, [
    filteredResult,
    getExpandIconProps,
    groupBy,
    handleExpandIconClick,
    id,
    isTitleGroup,
    options,
  ]);

  const groupExpandedMap = groupExpandedMapRef.current;

  // * speared logic with group, prevent calculate every time.
  const groupedResult = useMemo(() => {
    const addExpandedResult = Object.entries(groupExpandedMap).reduce(
      (prev, [key, expended]) => {
        const group = prev.find((x) => x.group === key);
        if (group) {
          group.expanded = expended;
        }
        return prev;
      },
      [...optionsGroupList],
    );

    return addExpandedResult.reduce<RcDownshiftSelectedItem[]>((prev, curr) => {
      if (typeof groupExpanded === 'boolean' ? groupExpanded : curr.expanded) {
        prev.push(...curr.options);
      } else {
        prev.push(curr.options[0]);
      }

      return prev;
    }, []);
  }, [groupExpandedMap, optionsGroupList, groupExpanded]);

  return {
    optionsGroupList,
    groupedResult,
    groupExpandedMap,
    handleGroupExpandedChange,
  };
};
