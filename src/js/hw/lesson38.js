/* ***********************************
Завершите функцию, чтобы она возвращала ключи и значения объекта course.
*********************************** */

/**
 * @param {Object} course
 * @param {number} [course.id]
 * @param {string} [course.name]
 * @param {number} [course.year]
 */
const visualizeEntries = (course) => {
  const arrayOfKeysAndPropOfObj = [];

  for (const key in course) {
    arrayOfKeysAndPropOfObj.push([key, course[key]]);
  }
  return arrayOfKeysAndPropOfObj;
};

// Sample usage - do not modify
console.log(visualizeEntries({ id: 1, name: 'Learn JS', year: 2022 }));
// [ [ 'id', 1 ], [ 'name', 'Learn JS' ], [ 'year', 2022 ] ]

console.log(visualizeEntries({ name: 'Learn JS', category: 'Programming' }));
// [ [ 'name', 'Learn JS' ], [ 'category', 'Programming' ] ]

console.log(visualizeEntries({})); // []

/* ***********************************
Завершите функцию, чтобы она возвращала объект, объединяющий объекты options и defaultOptions.
*********************************** */

const options = {
  tabSize: 4,
};

const defaultOptions = {
  indentation: 'tab',
  tabSize: 2,
  language: 'javascript',
};

/**
 * @param {object} options
 * @param {object} defaultOptions
 */
const mergeOptions = (options, defaultOptions) => {
  return { ...options, ...defaultOptions };
};

// Sample usage - do not modify
console.log(mergeOptions(options, defaultOptions));
// { indentation: "tab", tabSize: 4, language: "javascript" }

/* ***********************************
Завершите функцию, чтобы она возвращала полное имя объекта пользователя.
В противном случае функция должна вернуть undefined.
*********************************** */

/**
 * @param {object} user
 * @param {object} [user.info]
 * @param {last} [user.info.name]
 */
const getFullName = (user) => {
  return user?.info?.name;
};

// Sample usage - do not modify
console.log(getFullName({ info: { name: 'Sam' } })); // "Sam"
console.log(getFullName({ info: null })); // undefined
console.log(getFullName({ info: null })); // undefined

/* ***********************************
Завершите функцию, чтобы она возвращала полное имя в нижнем регистре, если поле существует.
В противном случае функция должна вернуть undefined.
*********************************** */

/**
 * @param {object} user
 * @param {object} [user.info]
 * @param {last} [user.info.name]
 */
const getFullNameToLowerCase = (user) => {
  return user?.info?.name.toLowerCase();
};

// Sample usage - do not modify
console.log(getFullNameToLowerCase({ info: { name: 'ALEX' } })); // "alex"
console.log(getFullNameToLowerCase({ info: null })); // undefined
console.log(getFullNameToLowerCase({})); // undefined

/* ***********************************
Завершите функцию, чтобы она возвращала возраст пользователя.
Если возраст не определен, по умолчанию показывается строка "unknown".
*********************************** */

/**
 * @param {object} user
 * @param {number} [user.age]
 */
const getAge = (user) => {
  return user?.age ?? 'unknown';
};

// Sample usage - do not modify
console.log(getAge({ age: 19 })); // 19
console.log(getAge({})); // "unknown"
console.log(getAge()); // "unknown"
console.log(getAge(null)); // "unknown"

/* ***********************************
Необходимо реализовать функцию приветствия с использованием оператора ??.
*********************************** */
/**
 * @param {object} user
 * @param {string} [user.fullName]
 */
const getWelcomeMessage = (user) => {
  return `Welcome ${user?.fullName ?? 'user'}`;
};

// Sample usage - do not modify
console.log(getWelcomeMessage({ fullName: 'Sam Green' })); // "Welcome Sam Green"
console.log(getWelcomeMessage({})); // "Welcome user"
console.log(getWelcomeMessage()); // "Welcome user"
console.log(getWelcomeMessage(null)); // "Welcome user"

/* ***********************************
Необходимо отрефакторить (улучшить) работу кода с помощью switch/case или объекта.
*********************************** */

const basicOp = (operation, value1, value2) => {
  /*   if (operation === '+') {
  } else if (operation === '-') {
    return value1 - value2;
  } else if (operation === '*') {
    return value1 * value2;
  } else if (operation === '/') {
    return value1 / value2;
  } */

  const objOfOperators = {
    '+': value1 + value2,
    '-': value1 - value2,
    '*': value1 * value2,
    '/': value1 / value2,
  };

  return objOfOperators[operation];
};

// Sample usage, do not modify
console.log(basicOp('+', 4, 7)); // 11
console.log(basicOp('-', 15, 18)); // -3
console.log(basicOp('*', 5, 5)); // 25
console.log(basicOp('/', 49, 7)); // 7

/* ***********************************
Необходимо посчитать все встречающиеся символы в строке.
Например, для строки aba, результатом должен стать объект {'a': 2, 'b': 1}.
*********************************** */
function count(string) {
  const mapOfCounter = new Map();

  // Проверяем, есть ли уже такой ключ в mapOfCounter
  // Если да, то увеличиваем счетчик по ключу
  // Если нет, то записываем в mapOfCounter новый ключ со значением 1
  for (const elem of string) {
    mapOfCounter.has(elem) ? mapOfCounter.set(elem, mapOfCounter.get(elem) + 1) : mapOfCounter.set(elem, 1);
  }

  return mapOfCounter;
}

// Sample usage, do not modify
console.log(count('aba')); // { 'a': 2, 'b': 1 }
console.log(count('ABC')); // {'A': 1, 'B': 1, 'C': 1}
