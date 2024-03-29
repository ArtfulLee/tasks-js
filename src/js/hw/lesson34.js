/* ***********************************************************
Завершите функцию, чтобы она возвращала полное имя пользователя, где фамилия указана в верхнем регистре.
*********************************************************** */
const user1 = {
  firstName: 'Sam',
  lastName: 'Doe',
  age: 20,
}

const user2 = {
  firstName: 'Charlie',
  lastName: 'Fort',
  age: 31,
}

/**
 * @param {Object[]} user
 * @param {string} user[].firstName
 * @param {string} user[].lastName
 * @param {number} user[].age
 */
function getFormattedFullName(user) {
  // your code
}

// Sample usage - do not modify
getFormattedFullName(user1) // "Sam DOE"
getFormattedFullName(user2) // "Charlie FORT"

/* ***********************************************************
Завершите функцию, чтобы она возвращала инициалы пользователя.
*********************************************************** */
const user12 = {
  firstName: 'Sam',
  lastName: 'Doe',
  age: 20,
}

const user22 = {
  firstName: 'Charlie',
  lastName: 'Fort',
  age: 31,
}

/**
 * @param {Object[]} user
 * @param {string} user[].firstName
 * @param {string} user[].lastName
 * @param {number} user[].age
 */
function getInitials(user) {
  // your code
}

// Sample usage - do not modify
getInitials(user12) // "SD"
getInitials(user22) // "CF"

/* ***********************************************************
Завершите функцию, чтобы она возвращала строку:
"You can vote", когда возраст пользователя равен 18 лет или старше
"You cannot vote" во всех остальных случаях
*********************************************************** */
const user13 = {
  firstName: 'Sam',
  lastName: 'Doe',
  age: 15,
}

const user23 = {
  firstName: 'Charlie',
  lastName: 'Fort',
  age: 31,
}

/**
 * @param {Object[]} user
 * @param {string} user[].firstName
 * @param {string} user[].lastName
 * @param {number} user[].age
 */
function getVotingMessage(user) {
  // your code
}

// Sample usage - do not modify
getVotingMessage(user13) // "You cannot vote"
getVotingMessage(user23) // "You can vote"

/* ***********************************************************
Завершите функцию, чтобы она добавила ключ numberOfChapters в объект course.
*********************************************************** */
const course1 = {
  name: 'Learn English',
  isCompleted: true,
}

const course2 = {
  name: 'Learn JavaScript',
  isCompleted: false,
}

/**
 * @param {Object[]} course
 * @param {number} count
 */
function addNumberOfChapters(course, count) {
  // your code
}

// Sample usage - do not modify
addNumberOfChapters(course1, 80)
// { name: 'Learn English', isCompleted: true, numberOfChapters: 80 }
addNumberOfChapters(course2, 60)
// { name: 'Learn JavaScript', isCompleted: false, numberOfChapters: 60 }

/* ***********************************************************
Завершите функцию, чтобы она распечатывала количество тегов объекта game. Добавьте проверку для случаев, когда массив может отстутствовать. В этом случае, покажите строку 'такой ключ не найден'.
*********************************************************** */
const game = {
  name: 'Risk',
  tags: ['Strategy', 'War', 'Family friendly'],
  releaseYear: 1957,
}

/**
 * @param {Object} game
 * @param {string} game.name
 * @param {string[]} game.tags
 * @param {number} game.releaseYear
 */
function getNumberOfTags(game) {
  // your code
}

// Sample usage - do not modify
getNumberOfTags(game) // 3
