import { isArrayOfSame } from './is-array-of-same';

describe('isArrayOfSame', () => {
  it('should return true for empty array (like Array.every)', () => {
    expect(isArrayOfSame([])).toBe(true);
  });

  it('should strictly check for equality', () => {
    const differentItemsArray = [1, '1', true];

    expect(isArrayOfSame(differentItemsArray)).toBe(false);
  });

  it('should check by reference', () => {
    const someObject = {
      value: 42,
    };
    const sameObjectsArray = [someObject, someObject, someObject];

    expect(isArrayOfSame(sameObjectsArray)).toBe(true);
  });

  it('should respect map fn', () => {
    const differentItemsArray = [1, '1', true];

    expect(isArrayOfSame(differentItemsArray)).toBe(false);
    expect(isArrayOfSame(differentItemsArray, Number)).toBe(true);
  });

  it('should respect map fn (2)', () => {
    const array = [
      {
        age: 42,
        weight: 80,
      },
      {
        age: 42,
        weight: 75,
      },
      {
        age: 42,
        weight: 20,
      },
    ];

    expect(isArrayOfSame(array)).toBe(false);
    expect(isArrayOfSame(array, (item) => item.age)).toBe(true);
  });
});
