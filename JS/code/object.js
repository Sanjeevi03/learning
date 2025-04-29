// function Bike(name) {

//   this.bike = name
//   this.ride = function () {
//     return "i will ride"
//   }
// }

// const x = new Bike('r15')

// console.log(x)

// Object.create() example a
// simple object with some properties
// const coder = {
// 	isStudying: false,
// 	printIntroduction: function () {
// 		console.log(`My name is ${this.name}. Am I studying?: ${this.isStudying}.`)
// 	}
// }
// // Object.create() method
// const me = Object.create(coder);
// coder.name = 'sanjeevi'
// // "name" is a property set on "me", but not on "coder"
// me.name = 'Mukul';

// // Inherited properties can be overwritten
// me.isStudying = true;

// me.printIntroduction();


// coder.printIntroduction()



// class Bike {
//   constructor(name, color) {
//     this.name = name;
//     this.color = color
//   }
//   get() {
//     return `${this.name} is ${this.color} color.`
//   }
// }

// const x = new Bike("R15", "blue");

// console.log(x.get())


// function Bike1(name, color) {
//   this.name = name
//   this.color = color
// }

// Bike1.prototype.get = function () {
//   return `${this.name} is ${this.color} color.`
// }

// const x1 = new Bike1("ninja", "green")

// console.log(x1.get())



