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
