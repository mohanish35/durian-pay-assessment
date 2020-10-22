/* eslint-env jest */
const add = require('./stringcalculator')

describe('add()', () => {
  test('Given empty string, should returns 0', () => {
    const given = ""

    const expected = 0;

    const actual = add(given)

    expect(actual).toEqual(expected)
  })
})
