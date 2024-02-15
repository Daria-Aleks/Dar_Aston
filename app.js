// Почему массив является "неправильным"?
// Массив - это объект. Значит, что он может содержать в себе элементы любого типа, а также их размер может изменяться. Это ведет к непредсказуемому поведению. 

function logger() {
    console.log(`I output only external context: ${this.item}`);
  }
const obj = { item: "some value" };
const bindLogger = logger.bind(obj);
bindLogger();
logger.call(obj);
logger.apply(obj);

const Arr = [1, 2, 3, 4, 5];
console.log(Arr.reduce((that, next) => that + next));

const stringArr = ["Hello", "world", "again", "..."];
console.log(stringArr.join(" "));

const numberArr = [5, 3, 6, 8, 7, 2, 22];
console.log(Math.max(...numberArr)); 
console.log(Math.min(...numberArr)); 

const stack = [];
const stackIn = (i) => {
  stack.push(i);
  return stack;
};
const stackOut = () => stack.pop();
console.log(stackIn(2));
console.log(stackIn(4));
console.log(stackIn(9));
console.log(stackIn(1));
console.log(stackOut());

const queue = [];
const queueIn = (i) => {
  queue.unshift(i);
  return queue;
};
const queueOut = () => queue.pop();
console.log(queueIn(5));
console.log(queueIn(9));
console.log(queueIn(2));
console.log(queueOut());
