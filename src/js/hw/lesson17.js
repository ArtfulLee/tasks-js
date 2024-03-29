/////////////////////////////////////////////////////////////////////////////////
// Напишите функцию для преобразования имени в инициалы. Данная ката состоит строго из двух слов с одним пробелом между ними.
/////////////////////////////////////////////////////////////////////////////////

function abbrevName(name) {
  return name
    .split(' ') // Массив в строку
    .map((name) => {
      return name[0] // У каждого элемента массива возвращаем первый символ строки
    })
    .join('.') // Полученный массив первых символов строк соединяем через точку.
}

console.log(abbrevName('Sam Harris')) // "S.H"

/////////////////////////////////////////////////////////////////////////////////
// Необходимо вернуть массив, в котором первый элемент - это количество положительных чисел, а второй элемент - сумма отрицательных чисел. 0 не является ни положительным, ни отрицательным. Если на входе пустой массив или null, верните пустой массив.
/////////////////////////////////////////////////////////////////////////////////

function countPositivesSumNegatives(arrOfNumbers) {
  if (!arrOfNumbers?.length) return [] // Проверка на длинну массива

  let result = [] // Массив для возврата решения
  let positiveCounter = 0 // Счетчик положительных чисел
  let negativeAmount = 0 // Контейнер для суммы отрицательных чисел

  for (let index = 0; index < arrOfNumbers.length; index++) {
    if (arrOfNumbers[index] > 0) {
      positiveCounter++ // Если число по индексу положительное, то увеличиваем счетчик положительный чисел
    } else {
      negativeAmount += arrOfNumbers[index] // Если число отрезательно, то считаем сумму отрицательных чисел
    }
  }

  result.push(positiveCounter, negativeAmount) // Добавляем счетчик положительных чисел и сумму отрицательных чисел в массив для возврата решения

  return result // возвращаем массив
}

console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15])) // [10, -65]
console.log(countPositivesSumNegatives([0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14])) // [8, -50]
console.log(countPositivesSumNegatives([])) // []
console.log(countPositivesSumNegatives()) // []

/////////////////////////////////////////////////////////////////////////////////
// Завершите функцию, которая принимает строковый параметр и переворачивает каждое слово в строке. Порядок слов и пробелы в строке должны быть сохранены.
/////////////////////////////////////////////////////////////////////////////////

function reverseWords(str) {
  let newStr = ''

  for (let index = str.length - 1; index >= 0; index--) {
    newStr += str[index]
  }

  return newStr
}

console.log(reverseWords('apple')) // 'elppa'
console.log(reverseWords('double  spaced  words')) // 'elbuod  decaps  sdrow'

// Напишите функцию, которая возвращает один массив с дублированными значениями.
// Пример: [1, 2, 3, 4, 5] => [1, 2, 3, 4, 5, 1, 2, 3, 4, 5]

function getDoubleOfArray(array) {
  return [...array, ...array]
}

console.log(getDoubleOfArray([1, 2, 3, 4, 5])) // [1, 2, 3, 4, 5, 1, 2, 3, 4, 5]

/////////////////////////////////////////////////////////////////////////////////
// Расширенная форма числа
/////////////////////////////////////////////////////////////////////////////////

function expandedForm(num) {
  let numToString = num.toString() // Перевод числа в строку
  let numberOfZeroRight = numToString.length // количество нулей справа от числа
  const tempNubersArr = [] // Массив для хранения полученых чисел с нулями справа

  // Итерируемся по элементам строки
  for (num of numToString) {
    numberOfZeroRight-- // Уменьшаем кол-во нулей справа при каждой интерации по элементу строки

    if (num === '0') continue // цифру 0 не обрабатываем

    tempNubersArr.push(`${num}${'0'.repeat(numberOfZeroRight)}`) // Складываем число в массив чисел с нулями справа
  }

  return tempNubersArr.join(' + ') // Конкатенируем элементы массива через  знак плюс и возвращаем требуемую строку
}

console.log(expandedForm(12)) // Should return '10 + 2'
console.log(expandedForm(42)) // Should return '40 + 2'
console.log(expandedForm(70304)) // Should return '70000 + 300 + 4
console.log(expandedForm(10205307)) // Should return '10000000 + 200000 + 5000 + 300 + 7
