/* eslint-env jest */
const add = require('./stringcalculator')

describe('add()', () => {
  test('Given empty string, should returns 0', () => {
    const given = ''

    const expected = 0

    const actual = add(given)

    expect(actual).toEqual(expected)
  })
  test('Given a single number, it should return that number', () => {
    const given = '20'

    const expected = 20

    const actual = add(given)

    expect(actual).toEqual(expected)
  })

  test('Given two numbers, it should return that number', () => {
    const given = '20,15'

    const expected = 35

    const actual = add(given)

    expect(actual).toEqual(expected)
  })
  test('Given a list of numbers, it should return their sum', () => {
    const given = '20,10,13,6'

    const expected = 49

    const actual = add(given)

    expect(actual).toEqual(expected)
  })
  test('Given a list of numbers, it should throw error for negative numbers', () => {
    try {
      const given = '-20,10,-13,6'

      add(given)

      // Fail test if above expression doesn't throw anything.
      expect(true).toBe(false)
    } catch (e) {
      expect(e.message).toBe('negatives not allowed: -20,-13')
    }
  })
  test('Given a list of numbers, it should ignore the numbers greater than 1000 and return the sum of remaining', () => {
    const given = '20,10,5000,1001,43121'

    const expected = 30

    const actual = add(given)

    expect(actual).toEqual(expected)
  })
  test('Given a list of numbers, it should support newline delimiter', () => {
    const given = '1\n2,3\n10,15'

    const expected = 31

    const actual = add(given)

    expect(actual).toEqual(expected)
  })
  test('Given a list of numbers with custom delimitter, it should return the sum', () => {
    const given = '//@\n1@2'

    const expected = 3

    const actual = add(given)

    expect(actual).toEqual(expected)
  })
})
