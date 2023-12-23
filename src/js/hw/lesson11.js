////////////////////////////////////////////////////
// Выведите в цикле простые числа от 2 до 100. Простое число - это число, которое делится только на себя и на 1. Пример простых чисел.
////////////////////////////////////////////////////
function simpleNumbers() {
  const simpleNumberArray = [] // Массив для простых чисел

  for (let index = 2; index <= 100; index++) {
    let countNumbersDivisors = index // счетчик делителей, для нахождения делителя без остатка отличного от числа по index или 1
    let simpleNumberByIndex = true // Переменная, для определения, является ли чесло простым

    for (; countNumbersDivisors > 0; countNumbersDivisors--) {
      if (countNumbersDivisors === 1 || countNumbersDivisors === index) continue
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
