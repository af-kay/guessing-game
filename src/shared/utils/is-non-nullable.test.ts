import { isNonNullable } from './is-non-nullable';

describe('utils/isNonNullable', () => {
  it('recognizes null as nullable', () => {
    expect(isNonNullable(null)).toBe(false);
  });

  it('recognizes other falsies as non-nullable', () => {
    const otherFalsies = [-0, 0, NaN, undefined, false, ''];

    expect(otherFalsies.map(isNonNullable)).toEqual(
      otherFalsies.map(() => true),
    );
  });

  it('recognizes truthy values as non-nullable', () => {
    const truthyValues = [2, {}, { values: 20 }, [], () => {}, '0', 'false'];

    expect(truthyValues.map(isNonNullable)).toEqual(
      truthyValues.map(() => true),
    );
  });
});
