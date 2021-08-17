import { moveIndexInTwoDimension } from '../moveIndexInTwoDimension';

describe('moveIndexInTwoDimension()', () => {
  it.each`
    currIndex | columns | infinite | result
    ${0}      | ${1}    | ${true}  | ${[19, 0, 1, 0, 0, 19]}
    ${0}      | ${2}    | ${true}  | ${[18, 1, 2, 1, 0, 19]}
    ${0}      | ${3}    | ${true}  | ${[18, 1, 3, 2, 0, 19]}
    ${0}      | ${4}    | ${true}  | ${[16, 1, 4, 3, 0, 19]}
    ${0}      | ${5}    | ${true}  | ${[15, 1, 5, 4, 0, 19]}
    ${0}      | ${6}    | ${true}  | ${[18, 1, 6, 5, 0, 19]}
    ${0}      | ${7}    | ${true}  | ${[14, 1, 7, 6, 0, 19]}
    ${0}      | ${8}    | ${true}  | ${[16, 1, 8, 7, 0, 19]}
    ${0}      | ${9}    | ${true}  | ${[18, 1, 9, 8, 0, 19]}
    ${0}      | ${10}   | ${true}  | ${[10, 1, 10, 9, 0, 19]}
    ${1}      | ${5}    | ${true}  | ${[16, 2, 6, 0, 0, 19]}
    ${6}      | ${5}    | ${true}  | ${[1, 7, 11, 5, 0, 19]}
    ${4}      | ${5}    | ${true}  | ${[19, 0, 9, 3, 0, 19]}
    ${15}     | ${5}    | ${true}  | ${[10, 16, 0, 19, 0, 19]}
    ${19}     | ${5}    | ${true}  | ${[14, 15, 4, 18, 0, 19]}
    ${19}     | ${6}    | ${true}  | ${[13, 18, 1, 18, 0, 19]}
    ${5}      | ${6}    | ${true}  | ${[17, 0, 11, 4, 0, 19]}
    ${15}     | ${5}    | ${false} | ${[10, 16, 15, 15, 0, 19]}
    ${19}     | ${5}    | ${false} | ${[14, 19, 19, 18, 0, 19]}
    ${5}      | ${6}    | ${false} | ${[5, 5, 11, 4, 0, 19]}
    ${0}      | ${6}    | ${false} | ${[0, 1, 6, 0, 0, 19]}
    ${18}     | ${6}    | ${false} | ${[12, 19, 18, 18, 0, 19]}
    ${19}     | ${6}    | ${false} | ${[13, 19, 19, 18, 0, 19]}
  `(
    '[moveIndexInTwoDimension] moveIndexInTwoDimension correct with currIndex:$currIndex columns:$columns infinite:$infinite result',
    ({ currIndex, columns, infinite, result }) => {
      const keys = [
        'ArrowUp',
        'ArrowRight',
        'ArrowDown',
        'ArrowLeft',
        'Home',
        'End',
      ];

      const total = 20;

      keys.forEach((nextKey, i) => {
        const toIndex = moveIndexInTwoDimension(nextKey, {
          currIndex,
          columns,
          total,
          infinite,
        });

        expect(toIndex).toEqual(result[i]);
      });
    },
  );
});
