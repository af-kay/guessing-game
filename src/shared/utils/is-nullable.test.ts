import { isNullable } from './is-nullable';

describe('utils/isNonNullable', () => {
  it('recognizes null as nullable', () => {
    expect(isNullable(null)).toBe(true);
  });

  it('does not recognize other falsies as nullable', () => {
    const otherFalsies = [-0, 0, NaN, undefined, false, ''];

    expect(otherFalsies.map(isNullable)).toEqual(otherFalsies.map(() => false));
  });

  it('does not recognize truthy values as nullable', () => {
    const truthyValues = [2, {}, { values: 20 }, [], () => {}, '0', 'false'];

    expect(truthyValues.map(isNullable)).toEqual(truthyValues.map(() => false));
  });
});
