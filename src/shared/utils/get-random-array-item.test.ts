import { getRandomArrayItem } from './get-random-array-item';

const genValues = (length = 5) => Array.from({ length }).map((_, i) => i);

describe('utils/getRandomArrayItem', () => {
  it('does not mutate input array', () => {
    const values = genValues();

    getRandomArrayItem(values);
    getRandomArrayItem(values);
    getRandomArrayItem(values);

    expect(values).toStrictEqual(genValues());
  });

  it('returns null for empty array', () => {
    expect(getRandomArrayItem([])).toBeNull();
  });

  it('always returns a value from non-empty array', () => {
    for (let len = 1; len < 20; len++) {
      const values = genValues(len);

      const pickedValue = getRandomArrayItem(values);

      expect(pickedValue).not.toBeUndefined();
      expect(pickedValue).not.toBeNull();
    }
  });

  it('depends on Math.random', () => {
    const originalRandom = Math.random;

    genValues(20).forEach((expectedValue, index, array) => {
      Math.random = vi.fn(() => index / array.length);

      const pickedValue = getRandomArrayItem(array);

      expect(pickedValue).toEqual(expectedValue);
    });

    Math.random = originalRandom;
  });
});
