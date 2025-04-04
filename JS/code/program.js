

function add(n) {
  return function(i) {
    if(i) return add(n+i)
    return n
  }
}

console.log(add(1)(2)(2)())



let count = 0

let nums = [0,1,2,3]

nums.forEach(num => {
  if(num) {
    count = count + 1
  }
})

console.log(count)


let a = [2,3,4, 5]

let x = a.slice(0,1) // slice won't change the original array

console.log(x)

console.log(a)


// // function call() {
// //   console.log(this)
// // }

// // call()

// function Test() {
//   this.val = val;
//   console.log(this)
// }


// Test.prototype.call = function() {
//   console.log("sanjevi")
// }

// const n  = new Test();
// console.log(n, "klpx")

// n.call()

// function Test () {
//   function call() {
//     console.log("sanjeevi")
//   }
// }


Array.prototype.Ravi = function (a, b) {
  console.log("this---1", this)
  return a + b;
}
console.log(Array.prototype)

// console.log(Ravi(1,2))

console.log([11,22].Ravi(1,3))


let n = [
  { name:"sanjeevi", age: 25 },
  { name:"moni", age: 25 },
  { name:"dev", age: 23 },
]

let r = [
  { name: "Ravi", age: "26"}
]

console.log(n.map(i => i.name))

Array.prototype.myMap = function(cb) {
  const l = []
  console.log('this', this)
  console.log('cb', cb)
  for (let i = 0; i < this.length; i++) {
    l.push(cb(this[i], i))
  }
  return l;
}

console.log("map", n.myMap((i, index) => i.name+index))
