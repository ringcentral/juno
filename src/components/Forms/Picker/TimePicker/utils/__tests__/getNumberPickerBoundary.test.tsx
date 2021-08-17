/* eslint-disable jest/no-conditional-expect */
import { getNumberPickerBoundary } from '../getNumberPickerBoundary';
import { getRangeBoundary } from '../TimeBoundary';

const sameAMPeriod = {
  min: new Date('2021/5/25 3:18'),
  max: new Date('2021/5/25 11:18'),
};

const samePMPeriod = {
  min: new Date('2021/5/25 16:18'),
  max: new Date('2021/5/25 19:18'),
};

const differentPeriod = {
  min: new Date('2021/5/25 3:18'),
  max: new Date('2021/5/25 19:18'),
};

describe('getNumberPickerBoundary', () => {
  it.each`
    index | range              | currHour | isTwelveHourSystem | result
    ${1}  | ${sameAMPeriod}    | ${1}     | ${true}            | ${{ hour: { min: 3, max: 11 }, minute: { min: 30, max: 45 } }}
    ${2}  | ${sameAMPeriod}    | ${3}     | ${true}            | ${{ hour: { min: 3, max: 11 }, minute: { min: 30, max: 45 } }}
    ${3}  | ${sameAMPeriod}    | ${6}     | ${true}            | ${{ hour: { min: 3, max: 11 }, minute: { min: 0, max: 45 } }}
    ${4}  | ${sameAMPeriod}    | ${11}    | ${true}            | ${{ hour: { min: 3, max: 11 }, minute: { min: 0, max: 15 } }}
    ${5}  | ${sameAMPeriod}    | ${12}    | ${true}            | ${{ hour: { min: 0, max: 11 }, minute: { min: 0, max: 15 } }}
    ${6}  | ${sameAMPeriod}    | ${1}     | ${false}           | ${{ hour: { min: 3, max: 11 }, minute: { min: 30, max: 45 } }}
    ${7}  | ${sameAMPeriod}    | ${3}     | ${false}           | ${{ hour: { min: 3, max: 11 }, minute: { min: 30, max: 45 } }}
    ${8}  | ${sameAMPeriod}    | ${6}     | ${false}           | ${{ hour: { min: 3, max: 11 }, minute: { min: 0, max: 45 } }}
    ${9}  | ${sameAMPeriod}    | ${11}    | ${false}           | ${{ hour: { min: 3, max: 11 }, minute: { min: 0, max: 15 } }}
    ${10} | ${sameAMPeriod}    | ${12}    | ${false}           | ${{ hour: { min: 3, max: 11 }, minute: { min: 0, max: 15 } }}
    ${11} | ${samePMPeriod}    | ${1}     | ${true}            | ${{ hour: { min: 4, max: 11 }, minute: { min: 30, max: 45 } }}
    ${12} | ${samePMPeriod}    | ${16}    | ${true}            | ${{ hour: { min: 4, max: 7 }, minute: { min: 30, max: 45 } }}
    ${13} | ${samePMPeriod}    | ${17}    | ${true}            | ${{ hour: { min: 4, max: 7 }, minute: { min: 0, max: 45 } }}
    ${14} | ${samePMPeriod}    | ${19}    | ${true}            | ${{ hour: { min: 4, max: 7 }, minute: { min: 0, max: 15 } }}
    ${15} | ${samePMPeriod}    | ${20}    | ${true}            | ${{ hour: { min: 4, max: 7 }, minute: { min: 0, max: 15 } }}
    ${16} | ${samePMPeriod}    | ${1}     | ${false}           | ${{ hour: { min: 16, max: 19 }, minute: { min: 30, max: 45 } }}
    ${17} | ${samePMPeriod}    | ${16}    | ${false}           | ${{ hour: { min: 16, max: 19 }, minute: { min: 30, max: 45 } }}
    ${18} | ${samePMPeriod}    | ${17}    | ${false}           | ${{ hour: { min: 16, max: 19 }, minute: { min: 0, max: 45 } }}
    ${19} | ${samePMPeriod}    | ${19}    | ${false}           | ${{ hour: { min: 16, max: 19 }, minute: { min: 0, max: 15 } }}
    ${20} | ${samePMPeriod}    | ${20}    | ${false}           | ${{ hour: { min: 16, max: 19 }, minute: { min: 0, max: 15 } }}
    ${21} | ${differentPeriod} | ${1}     | ${true}            | ${{ hour: { min: 3, max: 11 }, minute: { min: 30, max: 45 } }}
    ${22} | ${differentPeriod} | ${3}     | ${true}            | ${{ hour: { min: 3, max: 11 }, minute: { min: 30, max: 45 } }}
    ${23} | ${differentPeriod} | ${6}     | ${true}            | ${{ hour: { min: 3, max: 11 }, minute: { min: 0, max: 45 } }}
    ${24} | ${differentPeriod} | ${19}    | ${true}            | ${{ hour: { min: 0, max: 7 }, minute: { min: 0, max: 15 } }}
    ${25} | ${differentPeriod} | ${20}    | ${true}            | ${{ hour: { min: 0, max: 7 }, minute: { min: 0, max: 15 } }}
    ${26} | ${differentPeriod} | ${1}     | ${false}           | ${{ hour: { min: 3, max: 19 }, minute: { min: 30, max: 45 } }}
    ${27} | ${differentPeriod} | ${3}     | ${false}           | ${{ hour: { min: 3, max: 19 }, minute: { min: 30, max: 45 } }}
    ${28} | ${differentPeriod} | ${6}     | ${false}           | ${{ hour: { min: 3, max: 19 }, minute: { min: 0, max: 45 } }}
    ${29} | ${differentPeriod} | ${19}    | ${false}           | ${{ hour: { min: 3, max: 19 }, minute: { min: 0, max: 15 } }}
    ${30} | ${differentPeriod} | ${20}    | ${false}           | ${{ hour: { min: 3, max: 19 }, minute: { min: 0, max: 15 } }}
  `(
    `[getNumberPickerBoundary] (%#): check that boundary correct on hour $currHour and isTwelveHourSystem $isTwelveHourSystem`,
    ({ index, range, currHour, isTwelveHourSystem, result }) => {
      const rangeBoundary = getRangeBoundary(range);

      const boundary = getNumberPickerBoundary(currHour, {
        range: rangeBoundary,
        isTwelveHourSystem,
      });

      expect(boundary).toEqual(result);
    },
  );
});
