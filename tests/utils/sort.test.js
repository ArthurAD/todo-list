import { sortNumbers } from '../../dev/utils/sort';

const assert = require('assert');

describe('testing sort', () => {
  describe('sortNumbers', () => {
    it('should return dif of numbers',
      () => assert.equal(sortNumbers(1, 2), -1),
    );
  });
});
