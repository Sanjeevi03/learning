// currying

function call(op) {
  return function(value) {
    let result = value;
    function next(value) {
      if(value === undefined) return result;
      if(op == "add") result = result + value
      if(op == "sub") result = result - value
      if(op == "mul") result = result * value
      return next
    }

    return next

  }
}

console.log(call("add")(3)(4)(3)())
console.log(call("sub")(3)(4)())
console.log(call("mul")(3)(4)(4)())
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




function call() {
  console.log(this)
}

call()

function Test() {
  this.val = val;
  console.log(this)
}


Test.prototype.call = function() {
  console.log("sanjevi")
}

const n  = new Test();
console.log(n, "klpx")

n.call()

function Test () {
  function call() {
    console.log("sanjeevi")
  }
}


const obj = {
  a: 1,
  b: 3,
  sum() {
    return this.a + this.b
  }
}

console.log(obj.sum()) // what is the output


// // lumel
// let a = [1,2,3,null,5,6,null,7,null,8,9,10,null,34,45,null];
// let l = []
// let temp = []

// for(let i = 0; i < a.length; i++) {
//   if(a[i]) {
//     temp.push(a[i])
//   } else {
//     l.push([...temp])
//     temp.length = 0
//   }
//   if(i+1 ===  a.length && a[i]) {
//     l.push(temp)
//   }
// }

// console.log(l)