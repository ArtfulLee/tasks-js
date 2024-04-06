/* ***********************************************************
Завершите функцию, чтобы она суммировала все оценки за курс learnEnglish в массиве.
*********************************************************** */
const students = [
  {
    name: 'Sam Doe',
    age: 24,
    learnEnglish: {
      startYear: 2020,
      grade: 18,
    },
  },
  {
    name: 'Charlie Bron',
    age: 31,
    learnEnglish: {
      startYear: 2021,
      grade: 19,
    },
  },
]

function getSumGrades(students) {
  const sumGrades = students.reduce((sum, student) => sum + student.learnEnglish.grade, 0)
  return sumGrades
}

// Sample usage - do not modify
console.log(getSumGrades(students)) // 37

/* ***********************************************************
Завершите функцию, чтобы она возвращала массив содержащий полное имя каждого пользователя.
*********************************************************** */

const users = [
  {
    firstName: 'Sam',
    lastName: 'Blue',
    age: 21,
  },
  {
    firstName: 'Charlie',
    lastName: 'Bon',
    age: 38,
  },
]

function getFullNames(users) {
  const fullNames = users.map((user) => `${user.firstName} ${user.lastName}`)
  return fullNames
}

// Sample usage - do not modify
console.log(getFullNames(users)) // [Sam Blue, Charlie Bon]
