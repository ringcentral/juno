import { useMemo } from 'react';

import {
  combineProps,
  logInDev,
  omit,
  useDepsChange,
  useEventCallback,
  useRefState,
} from '../../../foundation';
import { RcDownshiftProps } from '../Downshift';
import {
  RcDownshiftGroupedOption,
  RcDownshiftSelectedItem,
} from './SelectItem';

type UseDownshiftGroup<
  T extends RcDownshiftSelectedItem = RcDownshiftSelectedItem,
> = {
  filteredResult: T[];
  id: string;
} & Pick<
  RcDownshiftProps<T>,
  | 'options'
  | 'groupBy'
  | 'getExpandIconProps'
  | 'onGroupExpanded'
  | 'groupExpanded'
  | 'groupDefaultExpanded'
  | 'groupVariant'
  | 'getOptionDisabled'
>;

type ExpandedMapState = Record<string, boolean>;

export const useDownshiftGroup = <
  T extends RcDownshiftSelectedItem = RcDownshiftSelectedItem,
>({
  groupBy,
  options,
  filteredResult,
  getExpandIconProps,
  groupExpanded,
  groupDefaultExpanded,
  onGroupExpanded,
  groupVariant,
  getOptionDisabled,
  id,
}: UseDownshiftGroup<T>) => {
  const [groupExpandedMapRef, setGroupExpandedMap] =
    useRefState<ExpandedMapState>({});
  const isTitleGroup = groupVariant === 'normal';

  const handleGroupExpandedChange = (groupName: string) => {
    const groupExpandedMap = groupExpandedMapRef.current;

    if (typeof groupExpanded === 'boolean') {
      return;
    }

    const toExpandedState = !groupExpandedMap[groupName];

    const newExpandedMap = {
      ...groupExpandedMap,
      [groupName]: toExpandedState,
    };

    setGroupExpandedMap(newExpandedMap);

    if (onGroupExpanded) {
      const group = optionsGroupList.find((x) => x.group === groupName);

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
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, groupName: string) => {
      handleGroupExpandedChange(groupName);
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

      const afterGroupFn: (() => void)[] = [];

      const result = filteredResult.reduce<RcDownshiftGroupedOption<T>[]>(
        (acc, option, index) => {
          const group = groupBy(option);

          if (acc.length > 0 && acc[acc.length - 1].group === group) {
            const currGroup = acc[acc.length - 1];
            acc[acc.length - 1].options.push({
              ...option,
              group: currGroup,
              indexInOwnGroup: currGroup.options.length - 1,
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

            const newGroup: RcDownshiftGroupedOption<T> = {
              key: index,
              index,
              group,
              order: acc.length,
              options: [{ ...option, indexInOwnGroup: 0 }],
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
              const groupTitleOption = {
                id: `${id}-${group}`,
                label: group,
                disabled: true,
                // * here cause by self Type reference
                group: newGroup as any,
              } as T;

              // push fn to array, do that after all options be add into group
              if (getOptionDisabled) {
                afterGroupFn.push(() => {
                  groupTitleOption.disabled =
                    getOptionDisabled(groupTitleOption);
                });
              }

              newGroup.options.unshift(groupTitleOption);
            }

            acc.push(newGroup);
          }

          return acc;
        },
        [],
      );

      afterGroupFn.forEach((fn) => {
        fn();
      });

      return result;
    }

    return [];
  }, [
    filteredResult,
    getExpandIconProps,
    getOptionDisabled,
    groupBy,
    handleExpandIconClick,
    id,
    isTitleGroup,
    options,
  ]);

  const initGroupExpandedState = (
    expandedState: UseDownshiftGroup<T>['groupExpanded'],
  ) => {
    if (typeof expandedState === 'object') {
      setGroupExpandedMap(expandedState, false);
    } else if (typeof expandedState === 'boolean') {
      setGroupExpandedMap(
        optionsGroupList.reduce((prev, curr) => {
          prev[curr.group] = expandedState;
          return prev;
        }, {}),
        false,
      );
    }
  };

  useDepsChange(() => {
    initGroupExpandedState(groupDefaultExpanded);
  }, []);

  useDepsChange(() => {
    initGroupExpandedState(groupExpanded);
  }, [groupExpanded]);

  const groupExpandedMap = groupExpandedMapRef.current;

  // * speared logic with group, prevent calculate every time.
  const groupedResult = useMemo(() => {
    const addExpandedResult = Object.entries(groupExpandedMap).reduce(
      (prev, [key, expended]) => {
        const group = prev.find((x) => x.group === key);

        if (group) group.expanded = expended;

        return prev;
      },
      [...optionsGroupList],
    );

    return addExpandedResult.reduce<T[]>((prev, curr) => {
      if (curr.expanded) {
        prev.push(...curr.options);
      } else {
        prev.push(curr.options[0]);
      }

      return prev;
    }, []);
  }, [groupExpandedMap, optionsGroupList]);

  return {
    optionsGroupList,
    groupedResult,
    groupExpandedMap,
    handleGroupExpandedChange,
  };
};
