import { getFormattedDate, getStringOfCurrentDate } from '../../dev/utils/date';

const assert = require('assert');

const now = new Date();

describe('testing date', () => {
  describe('getFormattedDate', () => {
    it('should return date in local format',
      () => assert.equal(getFormattedDate(+now), now.toLocaleString()),
    );

    it('should return empty string if 1 argument not a number',
      () => assert.equal(getFormattedDate(), ''),
    );
  });

  describe('getStringOfCurrentDate', () => {
    it('should return current date in ISO format',
      () => assert.equal(getStringOfCurrentDate(), `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`),
    );
  });
});
