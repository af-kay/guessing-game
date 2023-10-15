import { popRandomArrayItem } from './pop-random-array-item';

const generateValues = (length = 5) => Array.from({ length }).map((_, i) => i);

describe('utils/popRandomArrayItem', () => {
  it('mutates input array', () => {
    const values = generateValues(5);

    popRandomArrayItem(values);
    popRandomArrayItem(values);
    popRandomArrayItem(values);

    expect(values).toHaveLength(2);
  });

  it('returns null for empty array', () => {
    expect(popRandomArrayItem([])).toBeNull();
  });

  it('always returns a value from non-empty array', () => {
    for (let len = 1; len < 20; len++) {
      const values = generateValues(len);

      const pickedValue = popRandomArrayItem(values);

      expect(pickedValue).not.toBeUndefined();
      expect(pickedValue).not.toBeNull();
    }
  });

  it('depends on Math.random', () => {
    const originalRandom = Math.random;

    generateValues(20).forEach((expectedValue, index, array) => {
      Math.random = vi.fn(() => index / array.length);

      const pickedValue = popRandomArrayItem(array);

      expect(pickedValue).toEqual(expectedValue);
    });

    Math.random = originalRandom;
  });
});
