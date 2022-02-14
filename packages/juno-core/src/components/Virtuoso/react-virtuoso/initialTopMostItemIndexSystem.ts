import * as u from '@virtuoso.dev/urx';

import { empty } from './AATree';
import { domIOSystem } from './domIOSystem';
import { propsReadySystem } from './propsReadySystem';
import { scrollToIndexSystem } from './scrollToIndexSystem';
import { sizeSystem } from './sizeSystem';

export const initialTopMostItemIndexSystem = u.system(
  ([
    { sizes, listRefresh },
    { scrollTop },
    { scrollToIndex },
    { didMount },
  ]) => {
    const scrolledToInitialItem = u.statefulStream(true);
    const initialTopMostItemIndex = u.statefulStream(0);

    u.connect(
      u.pipe(
        didMount,
        u.withLatestFrom(initialTopMostItemIndex),
        u.filter(([, index]) => index !== 0),
        u.mapTo(false),
      ),
      scrolledToInitialItem,
    );

    u.subscribe(
      u.pipe(
        listRefresh,
        u.withLatestFrom(scrolledToInitialItem, sizes),
        u.filter(([, scrolledToInitialItem, { sizeTree }]) => {
          return !empty(sizeTree) && !scrolledToInitialItem;
        }),
        u.withLatestFrom(initialTopMostItemIndex),
      ),
      ([, initialTopMostItemIndex]) => {
        u.handleNext(scrollTop, () => {
          u.publish(scrolledToInitialItem, true);
        });

        u.publish(scrollToIndex, initialTopMostItemIndex);
      },
    );

    return {
      scrolledToInitialItem,
      initialTopMostItemIndex,
    };
  },
  u.tup(sizeSystem, domIOSystem, scrollToIndexSystem, propsReadySystem),
  { singleton: true },
);
