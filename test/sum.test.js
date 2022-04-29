/* eslint-disable */
const { sum, person } = require('./sum');

describe('js run', function () {
  test('adds 1 + 2 equl 3', function () {
    expect(sum(1, 2)).toBe(3);
  });

  test('person looks', function () {
    expect(person.age).toBe(18);
    expect(person.eyes).toBe('black');
    expect(person.handsome).toBeTruthy();
  });
});
