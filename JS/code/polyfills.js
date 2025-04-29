
Array.prototype.myMap = function(cb) {
  let result = [];
  for(let i = 0; i < this.length;i++) { // 'this' is reference of parent array
    result.push(cb(this[i], i));
  }
  return result;
}

const l = [0,1,2,3,4,5];
let j = l.myMap((i ,j) => i+1);

Array.prototype.myFilter = function(cb) {
  let result = [];
  for(let i = 0; i < this.length;i++) {
    if (cb(this[i], i)) {
      result.push(this[i]);
    }
  }
  return result;
}

let c = [
  { name:"san", age: 25},
  { name:"shivaji", age: 25},
  { name:"vijay", age: 26},
];

let f = c.myFilter(i => i.age >= 25)


Array.prototype.myReduce = function (cb, initialValue) {

  // method 1
  let acc = initialValue === undefined ? this[0] : initialValue;
  for(let i = initialValue === undefined ? 1 : 0; i < this.length;i++) {
    acc = cb(acc, this[i], i)
  }
  return acc
  
  // method 2
  // let acc = initialValue;
  // for(let i = 0; i < this.length;i++) {
  //   acc = acc ? cb(acc, this[i], i) : this[i]
  // }
  // return acc
}

console.log(c.myReduce((acc, cur, i) => acc + cur.age, 0))
