// Valgesis
// Array = ([1, 3, 2, 2, 4, 5, 6]
// K= 6
// // Output: [[2, 4], [1, 5]]

// method 1
let arr = [1,3,2,2,4,5,6]
let k = 6

let ans =[]
for(let i = 0; i < arr.length;i++) { // n
    let temp = []
    let m = arr.map(j => { // n
        if(arr[i]+j == k) {
            temp.push(arr[i], j)
            return
        }
    })
    temp.sort((a,b)=>a-b)
    temp = [...new Set(temp)]

    if(temp.reduce((ac, cu) => ac+cu, 0) == k) {
          ans.push(temp)
    }
}
let fin = []
// n^2
let temp =[]
for(let [k1,k2] of ans) {
    let f = k1+""+k2
    if(!temp.includes(f)) {
        temp.push(f)
        fin.push([k1,k2])
    }
}

console.log(fin)

// method 2
function findPairsWithSumK(arr, K) {
    
  let seen = new Set();
  let res = new Set();

  for(let num of arr) {

    let com = K - num;

    if(seen.has(com)) {
      let m = [num, com].sort((a,b)=>a-b)
      if(num !== com) {
        res.add(JSON.stringify(m))
      }
    }
    seen.add(num)
  }
  
  return [...res].map(pairString => JSON.parse(pairString));
}

// Test cases
const Array1 = [1, 3, 2, 2, 4, 5, 6, 9];
const K1 = 8;
console.log(findPairsWithSumK(Array1, K1)); // Expected: [[2, 4], [1, 5]]
