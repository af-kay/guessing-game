import { isArrayOfSameItems } from './is-array-of-same-items';

describe('isArrayOfSameItems', () => {
  it('should return true for empty array (like Array.every)', () => {
    expect(isArrayOfSameItems([])).toBe(true);
  });

  it('should strictly check for equality', () => {
    const array = [1, '1', true];

    expect(isArrayOfSameItems(array)).toBe(false);
  });
});
