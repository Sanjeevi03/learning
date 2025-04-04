// ------------------ map ------------------
// let n = [
//   { name:"sanjeevi", age: 25 },
//   { name:"moni", age: 25 },
//   { name:"dev", age: 23 },
// ]

// console.log(n.map(i => i.name))

// Array.prototype.myMap = function(cb) {
//   const l = []
//   console.log(this)
//   for (let i = 0; i < this.length; i++) {
//     l.push(cb(this[i], i, this))
//   }
//   return l;
// }

// console.log("map", n.myMap(i => i.name))


//  ------------------ filter ------------------

// Array.prototype.myFilter = function (cb) {
//   const l = []
//   console.log(this)
//   for (let i = 0; i < this.length; i++) {
//     if(cb(this[i], i, this)) {
//       l.push(this[i])
//     }
//   }
//   return l;
// }

// console.log("filter", n.myFilter(i => (i.age >= 25) ))

//  ------------------ reduce ------------------

// Array.prototype.myRedu = function (cb, initialValue) {
//   let acc = initialValue === undefined ? this[0] : initialValue
//   for (let i = initialValue === undefined ? 1 : 0; i < this.length; i++) {
//     acc = cb(acc, this[i], i, this)
//   }
//   return acc;
// }

// const total = n.myRedu(function (a, cur) {
//   return a + cur.age
// }, 0);

// console.log('reduce', total)

// console.log([1,2,3,4,{name: 5}].reduce((ac,c) => {
//   if(c.name) {
//     return ac+c.name
//   }
//   return ac+c
// }, 0))

//  ------------------ highest word length ------------------

// const words = ['apple', 'banana', 'cherry', 'dragonfruit', 'elderberry'];
// let res = ""
// words.map(i => {
//   if(i.length > res.length) {
//     res = i
//   }
// })  

// console.log(res)


//  ------------------ factorial ------------------
// let a = 5;
// let c = Array.from({length: a}).map((_, i) => i+1).reduce((a,c) => a*c, 1)
// console.log(c)


// ------------------ array methods ------------------ 
// let a1 = [ 1,2,3,4,5]
// a1[0] // O(1)
// a1[a.length-1] // O(1)
// a1.pop() // O(1)
// a1.push() // O(1)

// a1.unshift() // O(n) - adds
// a1.shift() // O(n) - removes

// a1.sort() // O(nlogn)
// let xa = [1,2,3]
// let xb = [4,5,6]

// .flat()
// console.log(xa +  xb)
// console.log(xa.concat(xb))

// https://www.youtube.com/watch?v=I9BNxqZSShk


// ------------------ sum of digits ------------------ 

// let s = 12345
// let sum = 0
// while(s > 0) {
//   sum = sum + s % 10
//   s = Math.floor(s / 10)
// }
// console.log(sum)

// ------------------  digit count ------------------ 
// let count = 0
// let s1 = 9876543210
// while(s1 > 0){
//   count++;
//   s1 = Math.floor(s1/10)
// }
// console.log(count)


// ------------------  missing number ------------------ 

// let a = [ 3, 2, 1, 0] // missing is 2
// // => take sum of digits and minus from sum of digit
// // formula => (a.length*a.length+1)/2  -  sum of digits
// let sumOfGivenArray = a.reduce((a,c) => a + c, 0)
// let sumOfDigit = Math.floor((a.length * (a.length + 1))/2)
// console.log(sumOfDigit , sumOfGivenArray);
// console.log(sumOfDigit  - sumOfGivenArray);


// let n = 43;

// let l = []
// for(let i = 2; i < n+1; i++) {
//   if(checkPrime(i)) {
//     l.push(i)
//   }
// }
// console.log(l)


// function checkPrime(num) {
//   console.log(num, Math.floor(Math.sqrt(num)));

//   for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
//     if (num % i === 0) return false;
//   }
//   return true;
// }

let a = ['1\n','2\n','1']

console.log(a)