//1
// Regular function
function sayHello() {
  return "Hello, world!";
}

// Arrow function
const sayHello2 = () => "Hello, world!";

//2
// Regular function
function double(x) {
  return x * 2;
}

// Arrow function
const double2 = (x) => x * 2;

//3
// Regular function
function add(x, y) {
  return x + y;
}

// Arrow function
const add2 = (x, y) => x + y;

//4
// Regular function
const person = {
  name: "Alice",
  sayHi: function () {
    return "Hi, " + this.name + "!";
  },
};

// Arrow function

// Regular function
const personArrow = {
  name: "Alice",
  sayHi: () => "Hi, " + this.name + "!",
};

//5
// Regular function
const numbers = [1, 2, 3, 4, 5];

const doubled = [];
numbers.forEach(function (num) {
  doubled.push(num * 2);
});

// Arrow function
numbers.forEach((num) => doubled.push(num * 2));
