//////////////////////////////////////
// Необходимо отрефакторить код.
//////////////////////////////////////

function countEvenNumbers(numbers) {
  return numbers.filter((element) => {
    return element % 2 === 0
  }).length

  // return numbers.filter((element) => element % 2 === 0).length
}

console.log(countEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8])) // 4

//////////////////////////////////////
// Необходимо вернуть строку, в которой только первый символ будет в верхнем регистре, остальные буквы должны остаться без изменений.
//////////////////////////////////////
function capitalizeNames(name) {
  return name[0].toUpperCase() + name.slice(1)
}

console.log(capitalizeNames('emma')) // "Emma"
console.log(capitalizeNames('sam')) // "Sam"
//////////////////////////////////////
// Функция capitalizeNames принимает массив имен в качестве аргумента и должна возвращать новый массив, в котором каждое имя начинается с заглавной буквы.
//////////////////////////////////////
function capitalizeArrayOfNames(names) {
  return names.map((element) => capitalizeNames(element))
}

console.log(capitalizeArrayOfNames(['alice', 'bob', 'charlie'])) // ["Alice", "Bob", "Charlie"]
console.log(capitalizeArrayOfNames(['emma', 'sam', 'tom'])) // ["Emma", "Sam", "Tom"]
