////////////////////////////////////////////////////
// Выведите в цикле простые числа от 2 до 100. Простое число - это число, которое делится только на себя и на 1. Пример простых чисел.
////////////////////////////////////////////////////

function simpleNumbers() {
  // Создаем массив для простых чисел
  const simpleNumberArray = []

  for (let index = 2; index <= 100; index++) {
    // Исключаем четные числа, кроме index === 2
    if (index % 2 === 0 && index !== 2) continue

    // Создаем счетчик делителей, для нахождения делителя без остатка отличного от числа по index или 1
    let countNumbersDivisors = index

    // Переменная, для определения, является ли число простым
    let simpleNumberByIndex = true

    // "countNumbersDivisors > 1" - исключаем проверку деления index на 1
    for (; countNumbersDivisors > 1; countNumbersDivisors--) {
      // исключаем проверку деления index на само себя и исключаем четные делители
      if (countNumbersDivisors === index || countNumbersDivisors % 2 === 0) continue

      if (index % countNumbersDivisors === 0) {
        simpleNumberByIndex = false
        break
      }
    }
    if (simpleNumberByIndex === true) simpleNumberArray.push(index)
  }

  return simpleNumberArray
}

// Sample usage - do not modify
console.log(simpleNumbers()) // [2, 3, 5, 7, 11, 13, ...]
