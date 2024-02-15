// Существуют десятки алгоритмов сортировки, но есть три самых популярных алгоритма сортировки:
// - Пузырьковая сортировка
// - Сортировка выбором
// - Быстрая сортировка

const Person1 = {
    name: "Somebody",
    weight: 55,
};
const Person2 = new Object(
    {
    name: "Somebody",
    weight: 55,
    }
);
const Person02 = {};
Person02.__proto__ = Person1;
console.log(Person02.name);
Object.prototype.logInfo = "logInfo";
console.log(Person02.logInfo);

class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
};
class PersonThree extends Person {
   constructor(name, age) {
     super(name, age);
    };
    get name() {
   return this.name;
    };
  set name(newName) {
   this.name = newName;
    }
 }