////////////////////////////////////////////////////////////////////////////////////////////////////////
// Выведите в цикле простые числа от 2 до 100. Простое число - это число, которое делится только на себя и на 1. Пример простых чисел.
////////////////////////////////////////////////////////////////////////////////////////////////////////

function simpleNumbers() {
  // Создаем массив для простых чисел
  const simpleNumberArray = []

  // Запускаем цикл от 2 до 100 включительно
  for (let index = 2; index <= 100; index++) {
    // Исключаем четные числа, кроме index === 2, т.к. четные числа имеют делители без остатка отличные от числа по index или 1
    if (index % 2 === 0 && index !== 2) continue

    // Создаем счетчик делителей, для нахождения делителя без остатка отличного от числа по index или 1
    let countNumbersDivisors = index

    // Булевая переменная, для определения, является ли число простым
    let simpleNumberByIndex = true

    // Проверка в цикле "countNumbersDivisors > 1" - позволяет исключить проверку деления index на 1
    for (; countNumbersDivisors > 1; countNumbersDivisors--) {
      // Исключаем проверку деления index на само себя и исключаем четные делители
      // Четные делители нас не интересуют, т.к. четные числа > 2 не являются простыми и при делении нечетного чила на четное всегда будет остаток
      if (countNumbersDivisors === index || countNumbersDivisors % 2 === 0) continue

      // Проверяем, имеет ли число по index остаток при делении на countNumbersDivisors
      if (index % countNumbersDivisors === 0) {
        // Если остаток от деления есть, то такое число не является простым
        simpleNumberByIndex = false
        break
      }
    }

    // Если число является простым, добавляем его в массив простых чисел
    if (simpleNumberByIndex === true) simpleNumberArray.push(index)
  }

  // Возвращаем массив простых чисел
  return simpleNumberArray
}

// Sample usage - do not modify
console.log(simpleNumbers()) // [2, 3, 5, 7, 11, 13, ...]

////////////////////////////////////////////////////////////////////////////////////////////////////////
// Напишите функцию, которая будет возвращать количество букв не зависящих от регистра, которые встречаются во входной строке более одного раза.
////////////////////////////////////////////////////////////////////////////////////////////////////////
// Пример вызова:
// "abcde"            // 0 ни один символ не повторяется более одного раза
// "aabbcde"          // 2 'a' и 'b'
// "aabBcde"          // 2 'a' встречается дважды, и 'b' дважды (b и B)
// "indivisibility"   // 1 'i' встречается шесть раз
// "Indivisibilities" // 2 'i' встречается семь раз, а 's' дважды
// "aA11"             // 2 'a' и '1'
// "ABBA"             // 2 'A' и 'B' каждый раз встречаются по два раза
////////////////////////////////////////////////////////////////////////////////////////////////////////

function duplicateCount(text) {
  // Проверка на длинну массива
  if (text.length === 0) return 0

  // Для удобства поиска повторений приводим строку к нижнему регистру
  const textToLowerCase = text.toLowerCase()

  //  Объект для повторяющихся значений
  const objectForLetters = {}

  // Счетчик для количества повторяющихся букв
  let result = 0

  // Итерируемся по элементам строки
  for (
    let indexOfLetterOfTextToLowerCase = 0;
    indexOfLetterOfTextToLowerCase < textToLowerCase.length;
    indexOfLetterOfTextToLowerCase++
  ) {
    // Если в объекте objectForLetters есть ключ === элементу строки, то данному ключу увеличиваем значение на 1
    if (Object.hasOwn(objectForLetters, textToLowerCase[indexOfLetterOfTextToLowerCase])) {
      objectForLetters[textToLowerCase[indexOfLetterOfTextToLowerCase]]++
    } else {
      // Иначе, создаем в объекте objectForLetters ключ по элементу строки со значением 0
      objectForLetters[textToLowerCase[indexOfLetterOfTextToLowerCase]] = 0
    }
  }

  // Интерируемся по объекту и если по ключю объекта значение больше 0, то значит данный символ строки присутствовал в строке более 1 раза
  for (const key in objectForLetters) {
    if (objectForLetters[key] > 0) {
      result++
    }
  }

  // Возвращаем количество букв, которые встречаются во входной строке более одного раза.
  return result
}

console.log(duplicateCount('')) // 0
console.log(duplicateCount('abcde')) // 0
console.log(duplicateCount('aabbcde')) // 2
console.log(duplicateCount('aabBcde')) // 2
console.log(duplicateCount('Indivisibility')) // 1
console.log(duplicateCount('Indivisibilities')) // 2
console.log(duplicateCount('aA11')) // 2
console.log(duplicateCount('ABBA')) // 2

////////////////////////////////////////////////////////////////////////////////////////////////////////
// Given an array of integers, find the one that appears an odd number of times.
//
// There will always be only one integer that appears an odd number of times.
//
// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).
////////////////////////////////////////////////////////////////////////////////////////////////////////

function findOdd(array) {
  if (!Array.isArray(array)) return "It's not array"
  if (array.length === 0) return 'Array is empty' // Если массив пустой, вернуть текстовую информацию
  if (array.length === 1) return array[0] // Если в массиве 1 элемент, вернуть его

  const objectOfKey = {} // Объект для хранения повторений, ключ = элемент массива, значение = счетчик

  // Итерируемся по каждому элементу массива
  // Если в объекте objectOfKey нет ключа по elem, то добавляем такой ключ со значением свойства = 1
  // Если в объекте objectOfKey найден ключ по elem, то значение свойства увеличиваем на +1
  for (const elem of array) {
    if (Object.hasOwn(objectOfKey, elem)) {
      objectOfKey[elem]++
    } else {
      objectOfKey[elem] = 1
    }
  }

  // Интерируемся по объекту objectOfKey
  // Ищем ключ, значение которого будет давать остаток при делении, это наш искомый результат функции
  for (const key in objectOfKey) {
    if (objectOfKey[key] % 2 !== 0) return key
  }
}

console.log(findOdd('String'))
console.log(findOdd([1, 1, 2]))
console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]))
