// // Encapsulation example
// class person {
// 	constructor(name, id) {
// 		this.name = name;
// 		this.id = id;
// 	}
// 	add_Address(add) {
// 		this.add = add;
// 	}
// 	getDetails() {
// 		console.log(`Name is ${this.name},
// 		Address is: ${this.add}`);
// 	}
// }

// let person1 = new person('Mukul', 21);
// person1.add_Address('Delhi');
// person1.getDetails();



// // Abstraction example
// function person(fname, lname) {
// 	let firstname = fname;
// 	let lastname = lname;

// 	let getDetails_noaccess = function () {
// 		return (`First name is: ${firstname} Last 
// 			name is: ${lastname}`);
// 	}

// 	this.getDetails_access = function () {
// 		return (`First name is: ${firstname}, Last 
// 			name is: ${lastname}`);
// 	}
// }
// let person1 = new person('Mukul', 'Latiyan');
// console.log(person1.firstname);
// console.log(person1.getDetails_noaccess);
// console.log(person1.getDetails_access());


// // Inheritance example
// class person {
// 	constructor(name) {
// 		this.name = name;
// 	}
// 	// method to return the string
// 	toString() {
// 		return (`Name of person: ${this.name}`);
// 	}
// }
// class student extends person {
// 	constructor(name, id) {
// 		super(name);
// 		this.id = id;
// 	}
// 	toString() {
// 		return (`${super.toString()}, Student ID: ${this.id}`);
// 	}
// }
// let student1 = new student('Mukul', 22);
// console.log(student1.toString());



// The Person and Student objects both have the same method (i.e toString()), this is called Method Overriding. Method Overriding allows a method in a child class to have the same name(polymorphism) and method signature as that of a parent class. 
// In the above code, the super keyword is used to refer to the immediate parent class’s instance variable. 
