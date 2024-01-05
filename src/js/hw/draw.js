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
