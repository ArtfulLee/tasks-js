// Дана строка чисел, разделенных пробелами. Необходимо вернуть наибольшее и наименьшее число в виде строки разделенных пробелом.

function highAndLow(numbers) {
  const numbersToArray = numbers.split(' ') // Преобразуем строку в массив

  return `${Math.max(...numbersToArray)} ${Math.min(...numbersToArray)}` // Используем методы класса "Math" для нахождения максимального и минимального числа в массиве
}

// Sample usage, do not modify
console.log(highAndLow('1 2 3 4 5')) // "5 1"
console.log(highAndLow('1 2 -3 4 5')) // "5 -3"
console.log(highAndLow('1 9 3 4 -5')) // "9 -5"

// Необходимо написать функцию, которая будет дублировать символы в строке n кол-во раз через дефис -.
// accum("abcd") ->    "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") ->    "C-Ww-Aaa-Tttt"

function accum(str) {
  const strToArray = str.split('') // Преобразуем строку в массив

  return strToArray // Возвращаем новый массив через метод "map"
    .map((letter, index) => {
      // Каждый элемент массива начинаем с заглавной буквы и следом повторяем его "index" раз
      return `${letter.toUpperCase()}${letter.repeat(index).toLowerCase()}`
    })
    .join('-') // Возвращаемый массив преобразуем в строку, разделяя каждый элемент массива через "-"
}

// Sample usage, do not modify
console.log(accum('abcd')) // "A-Bb-Ccc-Dddd"
console.log(accum('RqaEzty')) // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
console.log(accum('cwAt')) // "C-Ww-Aaa-Tttt"
