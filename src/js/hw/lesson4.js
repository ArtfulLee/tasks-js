//////////////////////////////////////////////////////
// Скобочки с числами и буквами чуть-чуть запутали, так что будет два решения.
//
// 1 - вывод согласных, которые есть в строке
// 2 - вывод кол-ва согласных, которые есть в строке
//
// Напишите функцию countVowels, которая принимает строку в качестве аргумента и возвращает количество гласных букв a, e, i, o, u в этой строке.
//////////////////////////////////////////////////////

function getVowels(str) {
  const arrayVowels = ['a', 'e', 'i', 'o', 'u']
  const arrayLettersOfStr = str.toLowerCase(str).split('')
  const result = []

  arrayLettersOfStr.forEach((letter) => {
    if (arrayVowels.includes(letter)) {
      result.push(letter)
    }
  })
  return result
}

function countVowels(str) {
  const arrayVowels = ['a', 'e', 'i', 'o', 'u']
  const arrayLettersOfStr = str.toLowerCase().split('')
  let result = 0

  arrayLettersOfStr.forEach((letter) => {
    if (arrayVowels.includes(letter)) {
      ++result
    }
  })
  return result
}

console.log(getVowels('Hello')) // e, o
console.log(getVowels('JavaScript')) // a, i, a
console.log(countVowels('Hello')) // 2
console.log(countVowels('JavaScript')) // 3

//////////////////////////////////////////////////////
// Напишите функцию uniqueLetters, которая принимает строку в качестве аргумента и возвращает новую строку, содержащую только уникальные буквы из исходной строки.
//////////////////////////////////////////////////////

function uniqueLetters(str) {
  const arrayLettersOfStr = str.split('')
  let result = []

  arrayLettersOfStr.forEach((letter) => {
    if (!result.includes(letter)) {
      result.push(letter)
    }
  })

  return result.join('')
}

console.log(uniqueLetters('hello')) // 'helo'
console.log(uniqueLetters('javascript')) // 'javscript'
console.log(uniqueLetters('hello world')) // 'helo wrd'

//////////////////////////////////////////////////////
// Напишите функцию reverseString без использования метода reverse(), которая принимает строку в качестве аргумента и возвращает строку, символы в которой расположены в обратном порядке.
//////////////////////////////////////////////////////

function reverseString(str) {
  const arrayLettersOfStr = str.split('')
  let newArrayLettersOfStr = []
  for (let index = arrayLettersOfStr.length; index >= 0; index--) {
    newArrayLettersOfStr.push(arrayLettersOfStr[index])
  }

  const newStr = newArrayLettersOfStr.join('')
  return newStr
}

console.log(reverseString('hello')) // 'olleh'
console.log(reverseString('JavaScript')) // 'tpircSavaJ'

//////////////////////////////////////////////////////
// Пример с избыточными проверками условий:
//////////////////////////////////////////////////////
const quantity = 5
const price = 10

function calculatePrice(quantity, price) {
  let totalPrice = 0

  if (quantity > 0 && price > 0) {
    return (totalPrice = quantity * price)
  }

  return totalPrice
}

console.log(calculatePrice(quantity, price))
