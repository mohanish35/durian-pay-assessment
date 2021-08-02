const constructError = (type, argument) => {
  switch (type) {
    case 'negativeNumbers':
      let errorMessage = 'negatives not allowed: '

      argument.forEach(number => {
        errorMessage += `${number},`
      })

      // remove trailing comma
      errorMessage = errorMessage.slice(0, -1)

      return errorMessage
  }
}

const getCustomDelimitter = (numbers) => {
  let customDelimitter = ''

  if (numbers.substring(0, 2) === '//') {
    customDelimitter = numbers[2]
  }

  return customDelimitter
}

module.exports = (numbers) => {
  let customDelimitter = getCustomDelimitter(numbers)
  let splittedNumbers = []
  let result = 0
  let negativeNumbers = []

  if (customDelimitter !== '') {
    numbers = numbers.slice(2)
    splittedNumbers = numbers.split('\n').join(',').split(customDelimitter).join(',').split(',')
  } else {
    splittedNumbers = numbers.split('\n').join(',').split(',')
  }

  splittedNumbers.forEach(number => {
    const numberInteger = Number(number)

    if (numberInteger < 0) { negativeNumbers.push(numberInteger) } else if (numberInteger >= 1000) return

    result += numberInteger
  })

  if (negativeNumbers.length > 0) {
    throw new Error(constructError('negativeNumbers', negativeNumbers))
  }

  return result
}
