/////////////////////////////////////////////////////////////
// JS: https://codesandbox.io/s/name-variations-forked-jq6q73
// TS: https://codesandbox.io/s/magical-hoover-strings-forked-hntfhw
/////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////
// Задача
// Реализуйте функцию, которая принимает в качестве аргумента последовательность и возвращает список элементов без дублей с сохранением исходного порядка элементов.
// Пример:
// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]
/////////////////////////////////////////////////////////////

const { RuleTester } = require('eslint')

// Пример:
// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

function uniqueInOrder(iterable) {
  const result = []

  for (let index = 0; index < iterable.length; index++) {
    if (!(iterable[index] === iterable[index - 1])) result.push(iterable[index])
  }

  return result
}

console.log(uniqueInOrder('AAAABBBCCDAABBB')) // ['A', 'B', 'C', 'D', 'A', 'B']
console.log(uniqueInOrder('ABBCcAD')) // ['A', 'B', 'C', 'c', 'A', 'D']
console.log(uniqueInOrder([1, 2, 2, 3, 3])) // [1,2,3]

/////////////////////////////////////////////////////////////
// Камень, ножницы, бумага! В случае ничьи возвращаем Draw!.
/////////////////////////////////////////////////////////////

function rockPaperScissors(firstPlayer, secondPlayer) {
  if (firstPlayer === secondPlayer) return 'Draw!'

  if (firstPlayer === 'scissors' && secondPlayer === 'paper') return 'Player 1 win'
  if (firstPlayer === 'rock' && secondPlayer === 'scissors') return 'Player 1 win'
  if (firstPlayer === 'paper' && secondPlayer === 'rock') return 'Player 1 win'

  return 'Player 2 win'
}

console.log(rockPaperScissors('scissors', 'rock')) // "Player 2 win"
console.log(rockPaperScissors('rock', 'scissors')) // "Player 1 win"
console.log(rockPaperScissors('scissors', 'scissors')) // "Draw!"
console.log(rockPaperScissors('rock', 'rock')) // "Draw!"

/////////////////////////////////////////////////////////////
// Функция принимает целое число и строку в качестве параметров. Необходимо вернуть строку, повторяющуюся n количество раз.
/////////////////////////////////////////////////////////////
function repeatStr(number, string) {
  let result = ''

  for (let index = 0; index < number; index++) {
    result += string
  }

  return result
}

console.log(repeatStr(6, 'I')) // "IIIIII"
console.log(repeatStr(5, 'Hello')) // "HelloHelloHelloHelloHello"
