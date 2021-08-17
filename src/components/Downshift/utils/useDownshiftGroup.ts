import { useMemo, useState } from 'react';

import {
  combineProps,
  logInDev,
  omit,
  useEventCallback,
} from '../../../foundation';
import { RcDownshiftProps } from '../Downshift';
import {
  RcDownshiftGroupedOption,
  RcDownshiftSelectedItem,
} from './SelectItem';

type UseDownshiftGroup = {
  filteredResult: RcDownshiftSelectedItem[];
} & Pick<
  RcDownshiftProps,
  'options' | 'groupBy' | 'getExpandIconProps' | 'onGroupExpanded'
>;

export const useDownshiftGroup = ({
  groupBy,
  options,
  filteredResult,
  getExpandIconProps,
  onGroupExpanded,
}: UseDownshiftGroup) => {
  const [groupExpandedMap, setGroupExpandedMap] = useState<
    Record<string, boolean>
  >({});

  const handleGroupExpandedChange = (key: number) => {
    const toExpandedState = !groupExpandedMap[key];
    const newExpandedMap = {
      ...groupExpandedMap,
      [key]: toExpandedState,
    };

    setGroupExpandedMap(newExpandedMap);

    if (onGroupExpanded) {
      const group = groupedOptionsSource.find((x) => x.key === key);

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
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, key: number) => {
      handleGroupExpandedChange(key);
      e.preventDefault();
      e.stopPropagation();
    },
  );

  const groupedOptionsSource = useMemo(() => {
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
                          handleExpandIconClick(e, index);
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
    options,
  ]);

  // * speared logic with group, prevent calculate every time.
  const groupedResult = useMemo(() => {
    const addExpandedResult = Object.entries(groupExpandedMap).reduce(
      (prev, [key, expended]) => {
        const group = prev.find((x) => `${x.key}` === key);
        if (group) {
          group.expanded = expended;
        }
        return prev;
      },
      [...groupedOptionsSource],
    );

    return addExpandedResult.reduce<RcDownshiftSelectedItem[]>((prev, curr) => {
      if (curr.expanded) {
        prev.push(...curr.options);
      } else {
        prev.push(curr.options[0]);
      }

      return prev;
    }, []);
  }, [groupExpandedMap, groupedOptionsSource]);

  return {
    groupedResult,
    groupExpandedMap,
    handleGroupExpandedChange,
  };
};
