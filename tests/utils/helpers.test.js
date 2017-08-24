import { generateIdObject } from '../../dev/utils/helpers';

const assert = require('assert');

const array = [
  { id: 1, name: '1' },
  { id: 2, name: '2' },
  { id: 3, name: '3' },
];

const object = {
  1: { name: '1' },
  2: { name: '2' },
  3: { name: '3' },
};

describe('testing helpers', () => {
  describe('generateIdObject', () => {
    it('should return empty object if no args',
      () => assert.deepEqual(generateIdObject(), {}),
    );

    it('should return id object of array',
      () => assert.deepEqual(generateIdObject(array), object),
    );
  });
});
