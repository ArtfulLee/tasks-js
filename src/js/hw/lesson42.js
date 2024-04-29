/* *********************************************************** */
// Создайте объект `math` со свойствами `x` и `y`. Добавьте к нему методы `sum` и `multiply`.
// Методы должны возвращать сумму и произведение принимаемых параметров.
// Также добавьте метод `reWrite`, который принимает два числа и перезаписывает значения полей `x` и `y` на новые.
/* *********************************************************** */

const math = {
  x: 1,
  y: 2,

  sum() {
    console.log(this.x + this.y);
  },

  multiply() {
    console.log(this.x * this.y);
  },

  reWrite(x, y) {
    this.x = x;
    this.y = y;
  },
};

math.reWrite(10, 10);
console.log(math.multiply());

/* *********************************************************** */
// Завершите определение класса Recipe, чтобы он записывал переменные экземпляра name и calories в качестве ключей объекта.
/* *********************************************************** */

// class definition
class Recipe {
  constructor(name, colories) {
    this.name = name;
    this.colories = colories;
  }
}

// class usage
const pasta = new Recipe('Pasta', 600);
console.log(pasta); // Recipe {name: "Pasta", calories : 600 }

const salad = new Recipe('Salad', 400);
console.log(salad); // Recipe {name: "Salad", calories : 400 }

/* *********************************************************** */
// Реализуйте следующие методы экземпляра для класса Recipe:
// isLowCaloric, который возвращает true, когда калорийность рецепта составляет 400 или ниже
// isHighCaloric, который возвращает true, когда калорийность рецепта составляет 600 или выше
/* *********************************************************** */

// class definition
class Recipe1 {
  constructor(name, calories) {
    this.name = name;
    this.calories = calories;
  }

  isLowCaloric() {
    if (this.calories <= 400) return true;
  }

  isHighCaloric() {
    if (this.calories >= 600) return true;
  }
}

// class usage
const pasta1 = new Recipe1('Pasta', 700);
const salad1 = new Recipe1('Salad', 350);

console.log(pasta1.isHighCaloric());
console.log(salad1.isLowCaloric());

/* *********************************************************** */
// Реализуйте следующие методы экземпляра для класса User:
// getFullName возвращает имя и фамилию пользователя, разделенные пробелом
// getInitials возвращает первый символ имени, сразу за которым следует первый символ фамилии
// canVote возвращает true, когда пользователю исполнилось 18 лет или больше
/* *********************************************************** */

// class definition
class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  getFullName() {
    return `${this?.firstName || ``} ${this?.lastName || ``}`;
  }

  getInitials() {
    // Если есть Имя, то возвращаем первый символ с точкой в конце, иначе - пустоту
    let initialFirstName = this?.firstName[0] ? this.firstName[0] + '.' : ``;
    // Если есть Фамилия, то возвращаем первый символ с точкой в конце, иначе - пустоту
    let initialLastName = this?.lastName[0] ? this.lastName[0] + '.' : ``;

    return `${initialFirstName}${initialLastName}`;
  }

  canVote() {
    return this.age >= 18;
  }
}

// class usage
const sam = new User('Sam', 'Blue', 49);
console.log(sam.getFullName());

const charlie = new User('Charlie', 'Doe', 13);
console.log(charlie.getFullName());

/* *********************************************************** */
// Определите класс Writer, содержащий следующие методы экземпляра:
// getFullName возвращает полное имя писателя
// canVote возвращает истину, когда возраст 18 или выше
// publishArticle выводит в консоль строку: "Article published"
/* *********************************************************** */

// class definition
class User1 {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  canVote() {
    return this.age >= 18;
  }
}

class Writer1 extends User1 {
  publishArticle() {
    console.log(`Article published`);
  }
}

// your code

// class usage
const user1 = new User1('Sam', 'Smith', 30);
// {firstName: 'Sam', lastName: 'Smith', age: 30}

const writer1 = new Writer1('Tom', 'Roth', 20);
// {firstName: 'Tom', lastName: 'Roth', age: 20}

console.log(writer1.publishArticle()); // Article published
