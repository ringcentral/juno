import { TimeBoundary } from '../TimeBoundary';

describe('TimeBoundary', () => {
  it.each`
    value                          | direction   | timeGap | result
    ${new Date('2021/5/25 10:18')} | ${'after'}  | ${15}   | ${{ hour: 10, minute: 30 }}
    ${new Date('2021/5/25 10:18')} | ${'before'} | ${15}   | ${{ hour: 10, minute: 15 }}
    ${new Date('2021/5/25 10:30')} | ${'after'}  | ${15}   | ${{ hour: 10, minute: 30 }}
    ${new Date('2021/5/25 10:29')} | ${'after'}  | ${15}   | ${{ hour: 10, minute: 30 }}
    ${new Date('2021/5/25 10:30')} | ${'after'}  | ${15}   | ${{ hour: 10, minute: 30 }}
    ${new Date('2021/5/25 10:31')} | ${'after'}  | ${15}   | ${{ hour: 10, minute: 45 }}
    ${new Date('2021/5/25 10:29')} | ${'before'} | ${15}   | ${{ hour: 10, minute: 15 }}
    ${new Date('2021/5/25 10:30')} | ${'before'} | ${15}   | ${{ hour: 10, minute: 30 }}
    ${new Date('2021/5/25 10:31')} | ${'before'} | ${15}   | ${{ hour: 10, minute: 30 }}
    ${new Date('2021/5/25 10:31')} | ${'before'} | ${10}   | ${{ hour: 10, minute: 30 }}
    ${new Date('2021/5/25 10:31')} | ${'after'}  | ${10}   | ${{ hour: 10, minute: 40 }}
    ${new Date('2021/5/25 10:31')} | ${'after'}  | ${5}    | ${{ hour: 10, minute: 35 }}
    ${new Date('2021/5/25 10:18')} | ${'before'} | ${15}   | ${{ hour: 10, minute: 15 }}
    ${new Date('2021/5/25 10:18')} | ${'after'}  | ${15}   | ${{ hour: 10, minute: 30 }}
    ${new Date('2021/5/25 10:17')} | ${'after'}  | ${2}    | ${{ hour: 10, minute: 18 }}
    ${new Date('2021/5/25 10:17')} | ${'before'} | ${2}    | ${{ hour: 10, minute: 16 }}
  `(
    '[TimeBoundary] time boundary should get correct value, when currHour is same',
    ({ value, direction, timeGap, result }) => {
      const boundary = new TimeBoundary(value, direction, timeGap);

      expect(boundary.hour).toEqual(result.hour);
      expect(boundary.minute).toEqual(result.minute);
    },
  );
});
