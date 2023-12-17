//////////////////////////////////////////////////////////////
// https://codesandbox.io/s/calculator-advanced-forked-zlcpvn?file=/src/js/run.js
//////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////
// Найти наименьшее число в массиве.
//////////////////////////////////////////////////////////////

function findSmallestInt(args) {
  let smallestIntOfArgs = +Infinity

  for (const arg of args) {
    if (arg < smallestIntOfArgs) smallestIntOfArgs = arg
  }

  return smallestIntOfArgs
}

/* function findSmallestInt(args) {
  return args.sort(function compare(a, b) {
    return a - b
  })[0]
} */

// Sample usage
console.log(findSmallestInt([34, 15, 88, 2])) // 2
console.log(findSmallestInt([34, -345, -1, 100])) // -345

//////////////////////////////////////////////////////////////
// Найти сумму всех чисел, которые кратны 3 или 5.
//////////////////////////////////////////////////////////////
function findSum(n) {
  let sum = 0

  for (let index = n; index > 0; index--) {
    if (index % 3 === 0 || index % 5 === 0) {
      sum += index
    }
  }

  return sum
}

// Sample usage
console.log(findSum(5)) // 8 (3 + 5)
console.log(findSum(10)) // 33 (3 + 5 + 6 + 9 + 10)
