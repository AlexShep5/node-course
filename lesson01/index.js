const colors = require("colors/safe")
const argv = process.argv.slice(2)
const min = Number(argv[0])
const max = Number(argv[1])

// Возвращает массив простых чисел в диапазоне min - max
function getEasy(min, max) {

  // проверка типов
  if (isNaN(min) || isNaN(max)) {
    console.log(colors.red('Incorrect numbers'))
    return null
  }

  const findNum = [] // простые числа в диапазоне
  if (min <= 2 && max >= 2) {
    findNum.push(2)
  }
  // массив для простых чисел
  let easyNumbers = [2]
  // простое ли число
  let isEasy = false

  // проходим от 2 до max
  for (let i = 3; i <= max; i++) {
    isEasy = true
    // проходим по всем уже найденым простым числам
    for (let j = 0; j < easyNumbers.length; j++) {
      if (!(i % easyNumbers[j])) {
        isEasy = false
      }
    }
    // если очередное число простое, то добавляем в массив
    if (isEasy) {
      easyNumbers.push(i)
      if (i >= min) {
        // простые числа в диапазоне
        findNum.push(i)
      }
    }
  }
  return findNum
}

// Выводит числа в консоль
function displayNum(numbers) {
  let colorNum = 0
  for (let i = 0; i < numbers.length; i++) {
    switch (colorNum) {
      case 0:
        console.log(colors.green(numbers[i]))
        break
      case 1:
        console.log(colors.yellow(numbers[i]))
        break
      case 2:
        console.log(colors.red(numbers[i]))
        break
      default:
        break
    }
    colorNum++
    if (colorNum == 3) {
      colorNum = 0
    }
  }
}

const numbers = getEasy(min, max)

if (numbers) {
  if (numbers.length) {
    displayNum(numbers)
  } else {
    console.log(colors.red('No digits in diapason'))
  }
}
