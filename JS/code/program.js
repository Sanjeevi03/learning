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



function cal(a) {
  if(a < 1000) {
    console.log(a)
  } 
  else if(a < 1000000) {
    console.log((a/1000).toFixed(2),"K")
  }
  else if(a < 1000000000) {
    console.log(a/1000000,"M")
  }
  else {
    console.log(a/1000000000,"B")
  }
}

cal(988)
cal(1088)
cal(10088)
cal(100488)
cal(1000000)
cal(1000000000)

let s = "Success"

s = s.toLowerCase()

let co = {};

for(let i of s.split("")) {
  if(co[i]) {
    co[i] = co[i] + 1
  } else {
    co[i] = 1
  }
}


let k =""

for(let i of s.split("")) {
  if(co[i] === 1) {
    k = k+ "("
  } else {
    k = k+ ")"
  }
}

console.log(k)

function isValidSudoku(board) {
  let row = new Set()
  let col = new Set()
  let box = new Set()

  for(let i = 0;i < 9; i++) {
    for(let j = 0;j < 9; j++) {
      let val = board[i][j];
      if( val ==="."  || val === 0) continue
      let x = `r${i}-${val}`
      let y = `r${j}-${val}`
      let z = `b${Math.floor(i/3)}${Math.floor(j/3)}-${val}}`

      if(row.has(x) || col.has(y) || box.has(z)) {
        return false
      }
      row.add(x)
      col.add(y)
      box.add(z)

    }
  }
  return true
}

// function isValidSudoku(board) {
//   const rows = new Set();
//   const cols = new Set();
//   const boxes = new Set();

//   for (let r = 0; r < 9; r++) {
//     for (let c = 0; c < 9; c++) {
//       const val = board[r][c];
//       if (val === '.' || val === 0) continue;

//       const rowKey = `row${r}-${val}`;
//       const colKey = `col${c}-${val}`;
//       const boxKey = `box${Math.floor(r / 3)}${Math.floor(c / 3)}-${val}`;

//       if (rows.has(rowKey) || cols.has(colKey) || boxes.has(boxKey)) {
//         return false;
//       }

//       rows.add(rowKey);
//       cols.add(colKey);
//       boxes.add(boxKey);
//     }
//   }

//   return true;
// }

const board = [
  [5, 3, '.', '.', 7, '.', '1', '.', '.'],
  [6, '.', '.', 1, 9, 5, '.', '.', '.'],
  ['.', 9, 8, '.', '.', '.', '.', 6, '.'],
  [8, '.', '.', '.', 6, '.', '.', '.', 3],
  [4, '.', '.', 8, '.', 3, '.', '.', 1],
  [7, '.', '.', '.', 2, '.', '.', '.', 6],
  ['.', 6, '.', '.', '.', '.', 2, 8, '.'],
  ['.', '.', '.', 4, 1, 9, '.', '.', 5],
  [5, '.', '.', '.', 8, '.', '.', 7, 9]
];

console.log(isValidSudoku(board)); // true



// removing duplicates from array of objects
let res = n.filter((ele, index, arr) => {
  let dup = arr.findIndex(item => item.label == ele.label && item.name == ele.name)
  console.log(index, dup)
  return index === dup
})
console.log(res)



// prime number and range

function main(s,e) {

  let l = [];

  for(let i = s; i <= e;i++) {
    if(checkPrime(i)) {
      l.push(i)
    }
  }


  return l;

}


console.log(main(2,100))


function checkPrime(n) {
  if(n < 2) return false;


  for(let i = 2; i <= Math.sqrt(n);i++) {
    if(n%i === 0) {
      return false
    }
  }

  return true;

}

console.log(checkPrime(73))