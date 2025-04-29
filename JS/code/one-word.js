console.log("5"-3) // 2
console.log("5"+ 3) // 53

let a = 10
let b = a++
console.log(a,b)


console.log(5 + 5 + "5")

console.log("10" - "5");  // ✅ 5  
// Both are strings but `-` forces numeric conversion: 10 - 5 = 5  

console.log("10" * "2");  // ✅ 20  
// Both are strings but `*` forces numeric conversion: 10 * 2 = 20  

console.log("10" / "2");  // ✅ 5  
// Both are strings but `/` forces numeric conversion: 10 / 2 = 5  

console.log("10" + "2");  // ❌ "102" (not 102)  
// Both are strings, so `+` performs concatenation: "10" + "2" = "102"  

console.log("10" + 2);    // ❌ "102" (not 102)  
// "10" is a string, so `+` converts `2` to "2" and concatenates: "10" + "2" = "102"  

console.log("10" - "2" + 5);  // ✅ 13  
// "10" - "2" → 10 - 2 = 8  
// 8 + 5 = 13  

console.log("10" + "2" - 5);  // ❌ 97 (not 7)  
// "10" + "2" → "102" (string concatenation)  
// "102" - 5 → 102 - 5 = 97  

console.log("10" + 2 - 5);    // ✅ 97  
// "10" + 2 → "102" (string concatenation)  
// "102" - 5 → 102 - 5 = 97  

console.log("10" - 2 + "5");  // ❌ "85" (not 7)  
// "10" - 2 → 10 - 2 = 8  
// 8 + "5" → "85" (string concatenation)  

console.log("10" + (2 - 5));  // ✅ "10-3"  
// 2 - 5 → -3  
// "10" + (-3) → "10-3" (string concatenation)  


// ----


console.log(5 + true);  // ✅ 6  
// `true` is converted to `1`: 5 + 1 = 6  

console.log(5 - false);  // ✅ 5  
// `false` is converted to `0`: 5 - 0 = 5  

console.log("10" - true);  // ✅ 9  
// `"10"` is converted to `10`, `true` is converted to `1`: 10 - 1 = 9  

console.log("10" + true);  // ✅ "10true"  
// `"10"` is a string, `+` causes concatenation: "10" + "true" = "10true"  

console.log(5 + null);  // ✅ 5  
// `null` is converted to `0`: 5 + 0 = 5  

console.log("5" + null);  // ✅ "5null"  
// `"5"` is a string, `+` causes concatenation: "5" + "null" = "5null"  

console.log(5 - undefined);  // ✅ NaN  
// `undefined` cannot be converted to a number: 5 - NaN = NaN  

console.log("5" - undefined);  // ✅ NaN  
// `"5"` converts to `5`, but `undefined` is NaN: 5 - NaN = NaN  

console.log("10" * []);  // ✅ 0  
// `[]` is converted to `""` (empty string), which becomes `0`: 10 * 0 = 0  

console.log("10" + []);  // ✅ "10"  
// `[]` is converted to `""` (empty string), so: "10" + "" = "10"  

console.log("10" - {});  // ✅ NaN  
// `{}` is converted to `[object Object]`, which is NaN: "10" - NaN = NaN  

console.log("10" + {});  // ✅ "10[object Object]"  
// `"10"` is a string, `{}` is converted to `"[object Object]"`: "10" + "[object Object]"  

var status = '1'
setTimeout(()=> {
  let status = '2';
  const data = {
    status: "dat",
    getStatus() {
      return this.status
    }
  }
  console.log(data.getStatus())
  console.log(data.getStatus.call(this))
},0)


const animal = [
  { name:"Lion", nick: "jamba" },
  { name:"Wolf", nick: "rag" }
]

function callAnimal(i) {
  this.print = function() {
    return `${i} -> ${this.name} -> ${this.nick}`
  }
  return this.print()
}

for(let i = 0; i < animal.length;i++) {
  console.log(callAnimal.call(animal[i], i))
}


// ways of pushing array to another array

const a1 = [1,2,3]
const b1 = ['a','b']

a1.push.apply(a1,b1)

console.log(a1)


const arr = [3,5,4,2,1]

console.log(Math.max(...arr))
console.log(Math.max.apply(null, arr))


// bound function
function f() {
  console.log(this)
}

let user = {
  g: f.bind(null)
}

user.g()