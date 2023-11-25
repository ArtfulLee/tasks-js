// Скобочки с числами и буквами чуть-чуть запутали, так что будет два решения.
//
// 1 - вывод согласных, которые есть в строке
// 2 - вывод кол-ва согласных, которые есть в строке
//
// Напишите функцию countVowels, которая принимает строку в качестве аргумента и возвращает количество гласных букв a, e, i, o, u в этой строке.

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
  const arrayLettersOfStr = str.toLowerCase(str).split('')
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

// Напишите функцию uniqueLetters, которая принимает строку в качестве аргумента и возвращает новую строку, содержащую только уникальные буквы из исходной строки.

function uniqueLetters(str) {
  // your code
}

uniqueLetters('hello') // 'helo'
uniqueLetters('javascript') // 'javscript'
uniqueLetters('hello world') // 'helo wrd'
