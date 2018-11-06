'use strict';

import { double, sum } from '../index';

it('work with import', () => {
  expect(double(2)).toBe(4);
});

it('pass 5 should return 10', () => {
  expect(double(5)).toBe(10);
});

it('2 + 2 should return 4', () => {
  expect(sum(2, 2)).toBe(4);
});
