
//  ------------ Function Statement or Function Declaration  ------------
function a() {
  console.log("test")
}

//  ------------ Function Expression  ------------
  var b = function() {
    console.log("b") 
  }

//  ------------ Anonymous function  ------------
/*
  function () {
  }
  error: function statements require a function name

  without a name, doesn’t have their identity,
  where functions are used as a value.
}
*/

//  ------------ Named Function Expression   ------------
var b = function xyz() {
  console.log("")
}
/*
  we call b()
  if we call xyz(), face error like xyz is not defined
  xyz is not created in global scope

  we can access like this
  var b = function xyz() {
    console.log(xyz)
  }
*/

//  ------------ First class function ------------
/*
  In JavaScript, functions are treated like any other value —
  they can be:
  - Assigned to a variable
  - Passed as an argument to another function
  - Returned from another function
  That's why JavaScript functions are "first-class citizens."

*/
// 1
const greet = function() {
  console.log("Hello!");
};
greet(); // Hello!

// 2
function sayHello() {
  return "Hello";
}
function greet(fn) {
  console.log(fn());
}
greet(sayHello); // Hello

// 3
function outer() {
  return function inner() {
    console.log("Inner function called!");
  };
}
const fn = outer();
fn(); // Inner function called!

// using first class fn using map
const numbers = [1, 2, 3, 4];
const double = (n) => n * 2; // <-- Function assigned to variable
const doubledNumbers = numbers.map(double); // <-- Passing function as argument
console.log(doubledNumbers); // [2, 4, 6, 8]
//- Passing functions as values →
//- Which is only possible because JavaScript has First-Class Functions!

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//  ------------ Pure functions ------------
/*
  A pure function is a function that:
  - Always gives the same output for the same input.
  - Does not modify anything outside its own scope (no side effects).

  No Side Effects – Does not:
    - Modify global variables.
    - Change input parameters.
    - Perform I/O operations (like network requests, database, file system, etc.).
    - Affect anything outside itself.

  Why are Pure Functions Important?
    - Easier to test.
    - Easier to debug.
    - More predictable.
    - Help in functional programming and immutable design.

  Pure Function	                --  Impure Function
  Same input → Same output    	--  Output may vary
  No side effects	              --  Has side effects
  Doesn't modify external state -- 	Can modify external state

  map, filter, and reduce themselves are PURE functions
*/
function add(a, b) {
  return a + b;
}
console.log(add(2, 3)); // Always 5
console.log(add(2, 3)); // Always 5

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//  ------------ callback functions ------------
/*
A callback function is a function passed as an argument to another function,
and then it is called ("called back") inside that function.

✅ It is not immediately executed — it gets executed later, when needed.
*/

//  Ex:1
function greet(name) {
  console.log(`Hello, ${name}!`);
}
function processUser(callback) {
  const userName = "John";
  callback(userName); // <-- calling the callback
}
processUser(greet);

//  Ex:2
setTimeout(function() {
  console.log("Executed after 2 seconds!");
}, 2000);


// ----- synchronous callback -----
/* 
  The callback is executed immediately during the function call.
  No waiting, it runs line by line.
  called immediately inside the function
*/
function greet(name) {
  console.log(`Hello, ${name}!`);
}
function greetUser(callback) {
  console.log("Before greeting...");
  callback("John"); // <-- callback called immediately
  console.log("After greeting...");
}

greetUser(greet);

// ----- Asynchronous Callback -----
/* 
  The callback is executed later, after some time or event.
  It does NOT block the next lines of code.
  (called later using setTimeout)
*/
function greet(name) {
  console.log(`Hello, ${name}!`);
}

function greetUser(callback) {
  console.log("Before greeting...");
  setTimeout(() => {
    callback("John"); // <-- callback called after 2 seconds
  }, 2000);
  console.log("After greeting...");
}

greetUser(greet);

// Synchronous callback = runs immediately, blocks until done.
// Asynchronous callback = runs later, doesn't block, frees the main thread.


// ----- function constructor -----
const myFunction = new Function("a", "b", "return a * b");

let x = myFunction(4, 3);

// ----- Self invoking -----

(function () {
  let x = "Hello!!"; 
})();

// ----- function reset parameter -----
function sum(...args) {
  let sum = 0;
  for (let arg of args) sum += arg;
  return sum;
}

let x1 = sum(4, 9, 16, 25, 29, 100, 66, 77)
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//  ------------ Higher order functions ------------
/*
 A higher-order function in JavaScript is a function that either:
  - Takes another function as an argument, or
  - Returns a function.
*/

// Higher-order function that takes a function as an argument
function greetUser(greetFunction, name) {
  return greetFunction(name);
 }
 
 
 // Simple function to pass as an argument
 function sayHello(name) {
  return `Hello, ${name}!`;
 }
 
 
 // Using the higher-order function
 console.log(greetUser(sayHello, "John")); // Output: Hello, John!
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//  ------------ Callback hell ------------
/*
  When you use too many nested callbacks,
  the code becomes:
    - Messy
    - Hard to read
    - Hard to maintain
  This situation is called Callback Hell.

  It usually looks like a "pyramid" or "staircase" in your code.
  That's why people also call it "Pyramid of Doom" 

  How Developers Solve Callback Hell?
    Promises
    ➔ To chain operations cleanly.

    Async/Await
    ➔ To write asynchronous code like synchronous code.
*/


// Without promises or async/await, using nested callbacks, it looks like:

getUser(function(user) {
  getOrders(user.id, function(orders) {
    getShippingStatus(orders[0], function(status) {
      console.log("Shipping Status:", status);
    });
  });
});

// Same Example using Promises (No Callback Hell)
getUser()
  .then(user => getOrders(user.id))
  .then(orders => getShippingStatus(orders[0]))
  .then(status => console.log("Shipping Status:", status))
  .catch(error => console.error(error));

// Same Example using async/await (No Callback Hell)
async function getShippingStatusForUser() {
  try {
    const user = await getUser(); // Wait for user data
    const orders = await getOrders(user.id); // Wait for orders
    const status = await getShippingStatus(orders[0]); // Wait for shipping status
    console.log("Shipping Status:", status); // Finally, log the status
  } catch (error) {
    console.error(error); // Handle any errors
  }
}

getShippingStatusForUser();
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//  ------------ Memoizefunctions ------------
/*
  Memoization is a technique to cache the results of expensive function calls,
    - if the same inputs come again, the function returns the cached result instead of computing it again.
  ✅ It helps to speed up the program.

  Real-World Uses of Memoization:
  1. Heavy mathematical calculations (like Fibonacci, factorial, prime check)
  2. API response caching
  3. React performance optimization (React.memo internally uses similar concept)

*/
function memoize(fn) {
  
  let cache = {};
  return function(...args) {
    const key = JSON.stringify(args);

    if(cache[key]) {
      return cache[key]
    }

    console.log(this)
    let b = fn.apply(this, args);
    // let b = fn(...args);
    cache[key] = b;
    return b;
  }
}

const obj = {
  name:"sanjeevi-in",
  greet: function(a,b) {
    return this.name + " " +(a + b)
  }
}

const dc = memoize(obj.greet);

console.log(dc(5 , 5))

// const obj = {
//   name: "Hello",
//   greet: function(a, b) {
//     console.log(this.name, a + b);
//     return this.name + (a + b);
//   }
// };

// function memoize(fn) {
//   const cache = {};
//   return function(...args) {
//     const key = JSON.stringify(args);
//     if (cache[key]) return cache[key];

//     // let l = fn(...args);   // <--- Direct call, no apply
//     let l = fn.apply(this, args);
//     cache[key] = l;
//     return l
//   }
// }

// const memoizedGreet = memoize(obj.greet);

// memoizedGreet.call(obj, 5, 5);  
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//  ---- arrow and this -----

const arrowFunc = () => {
  console.log(this);
};

arrowFunc();


let name = 'sa'
const obj1 = {
  name: "Sanjeevi",
  greet: () => {
    console.log(this.name);
  }
};

obj1.greet(); // undefined ❌ (because arrow function's `this` is NOT `obj`)

function normalFunc() {
  let name = 'sanje'
  const arrow = () => {
    console.log(this);
  };
  arrow();
}

normalFunc(); // `this` is window/global (or undefined if strict)
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// -------- Partial function call --------
/*
  Fixing (pre-filling) some arguments of a function now,
  and returning a new function that takes the remaining arguments later.
*/

function mul(f) {
  return function (a,b) {
    return f + a + b
  }
}
const m = mul(5)
console.log(m(1,2))
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// -------- Immutability --------
/*
Immutability in JavaScript refers to the concept where data cannot be changed after it is created. Instead of modifying the original object or array, you create a new copy with the desired changes.

This is especially important in functional programming and frameworks like React, where tracking changes efficiently (e.g., for re-rendering components) depends on data not being mutated directly.

Why Immutability Matters
  - Predictability – No unexpected side effects.
  - Debugging – Easier to track changes.
  - Change Detection – Libraries like React can easily detect state changes.
  - Concurrency – Safer when multiple operations are running.

*/

// mutable
const person = { name: "Alice" };
person.name = "Bob"; // person is mutated

// immutable
const person = { name: "Alice" };
const newPerson = { ...person, name: "Bob" }; // new object
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// -------- Prototypal Inheritance --------
/*
objects can inherit properties and methods from other objects. This is called prototypal inheritance.
 Real-World Analogy
  Imagine you have a child who doesn’t know how to ride a bike, but the parent does.
  If the child is asked, "Can you ride a bike?", and they don't know, they will look up to their parent.
  That’s prototypal inheritance — the child "inherits" the ability to ride a bike from the parent.
*/
const parent = {
  greet() {
    console.log("Hello from parent!");
  }
};
const child = Object.create(parent);  // 🔥 Inherit from parent
child.greet();  // Output: Hello from parent!
//child doesn’t have a greet() method.
// But because its prototype is parent, JavaScript looks up the chain and finds greet() on the parent.

// Behind the Scenes:
console.log(child.__proto__ === parent); // true
// child's internal [[Prototype]] (accessible via __proto__) points to parent.
// This forms a prototype chain.


// Prototype chain
/*
When you access a property or method:
  - JS checks the object itself.
  - If not found, it looks up to its prototype.
  - Continues up the chain until it either finds the property or reaches null.
*/

const grandparent = {
  walk() {
    console.log("Walking...");
  }
};

const parent1 = Object.create(grandparent);
const child1 = Object.create(parent1);

child1.walk();  // Inherited all the way from grandparent!


// Custom Constructor Example
function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function () {
  console.log(`${this.name} makes a sound.`);
};

const dog = new Animal("Buddy");

dog.speak();  // Buddy makes a sound.

/*
       Concept           |            Meaning
  Prototype              |  An object that another object inherits from.
  Prototypal Inheritance |  The mechanism where an object inherits properties/methods from another object via the prototype chain.
  Prototype Chain        |  A series of linked objects, followed when trying to access properties.
  Object.create(obj)     |  Creates a new object that inherits from obj.
*/

// Bind, Call, Apply (Manual control over this)




// LRU
function cache(size) {
    let store = new Map()

    function get(key) {
        if(!store.has(key)) {
            console.log('key doesnt exist')
            return
        }

        let v = store.get(key)

        store.delete(key)
        store.set(key, v)
        console.log(v)
    }

    function put(key, val) {
        if(store.has(key)) {
            store.delete(key)
        } else if(store.size >= size) {
            let old = store.keys().next().value
            store.delete(old)
        }
        store.set(key, val)
    }

    function display() {
        console.log(store)
    }
    return {get, display, put}
}

let n = cache(3)

n.put('a', "sanjeevi1")
n.put('b', "sanjeevi2")
n.put('c', "sanjeevi3")

n.get('a')
n.get('c')

n.put('v', 'tes')

n.display()