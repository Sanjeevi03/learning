// // fibonacci series - 0 1 1 2 3 5 8 13

// function fibonacci(n) {
//   let l = [0,1]
//   for(let i = 0; i < n; i++) {
//     l.push(l[i] + l[i+1])
//   }
//   return l;
// }
// console.log(fibonacci(5))

// // Factorial - 5 = 5*4*3*2*1 = 120

// function factorial(n) {
//   let v = 1;
//   for(let i = 1;i <= n; i++) {
//     v = v * i;
//   }
//   return v
// }
// console.log(factorial(5))

// // Prime numbers
// function IsPrime(n) {
//   if(n < 2) {
//     return false;
//   }
//   for(let i = 2; i < n; i++ ) {
//     if(n % i == 0) {
//       return false
//     }
//   }
//   return true
// }
// console.log(IsPrime(5))

// Poer of two
// function powerOfTwo(n) {
//   if(n < 1) {
//     return false
//   }
//   while(n > 1) {
//     if(n%2 !== 0) {
//       return false 
//     }
//     n = n/2
//   }
//   return true

// }
// console.log(powerOfTwo(1))
// console.log(powerOfTwo(2))
// console.log(powerOfTwo(16))
// - O(logn)

// function powerOfTwoBitwise(n) {
//   if(n < 1) {
//     return false
//   }
//   return (n & (n-1)) === 0

// }
// console.log(powerOfTwoBitwise(1))
// console.log(powerOfTwoBitwise(2))
// console.log(powerOfTwoBitwise(16))
// - O(1) - code executes only one time


// // // ----- RECUSRION -----
// // fibonacci series - 0 1 1 2 3 5 8 13

// function fibonacci(n, l = [0, 1]) {
//   if(l.length === n) return l;
//   l.push(l[l.length - 1] + l[l.length - 2]);
//   return fibonacci(n, l)
// }
// console.log(fibonacci(5))
// - O(2^n) - worst case
// taking more time to solve - recursion is not good solution

// // Factorial - 5 = 5*4*3*2*1 = 120 
// formula  n*(n-1)

// function factorial(n, v = 1) {
//   if(n === 0) return v;
//   v = v * n;
//   n = n - 1;
//   return factorial(n, v)
// }
// console.log(factorial(5))
// O(n) - linear


// // Linear search
// function linearSearch(arr, f) {
//   for(let i = 0; i < arr.length;  i++) {
//     if(arr[i] === f) return i
//   }
//   return -1
// }

// console.log(linearSearch([1,2,6,7,4], 7 ))
// - O(n)

// // Binary search
// works only if array is sorted
// function binarySearch(arr, f) {
//   let left = 0;
//   let right = arr.length - 1;

//   while(left <= right) {
//     let mid = Math.floor((left+right)/2)
//     if(f === arr[mid]) {
//       return mid
//     }
//     if(f < arr[mid]) {
//       right = mid - 1
//     } else {
//       left = mid - 1
//     }
//   }
//   return -1
// }
// console.log(binarySearch([1,2,6,7, 34, 56], 7 ))
// O(logn)

// binary search using recursion
// function binarySearch(arr, f) {
//   return search(arr, f, 0, arr.length);
// }
// function search(arr, f, left, right) {
//   console.log(left, right)
//   if(left > right){
//     return -1
//   }
//   let mid = Math.floor((left+right) / 2 );

//   if(f == arr[mid]) return mid;
//   if(f < arr[mid]) {
//     return search(arr, f, left, mid - 1)
//   } else {
//     return search(arr, f, mid+1, right)
//   }
// }
// console.log(binarySearch([1,2,6,7, 34, 56, 67, 78, 89 ,90, 91, 93, 96 , 98, 107,], 9 ))
// O(logn)

// ----------- SORTING -----------

// bubble sort

// function bubbleSort(arr) {
//   let sp;
//   do {
//     sp = false;
//     for(let i = 0; i < arr.length -1 ;i++) {
//       if(arr[i] > arr[i+1]) {
//         let temp = arr[i];
//         arr[i] = arr[i+1]
//         arr[i+1] = temp
//         sp = true
//       }
//     }
//   } while(sp)
//   return arr;
// }
// const x = bubbleSort([1,3,89,3,65,-3])
// console.log(x)
// O(n^2)


// Insertion Sort
// function insertionSort(arr) {
  //   for (let i = 1; i < arr.length; i++) {
    //     let numberToInsert = arr[i]
    //     let j = i - 1
    //     while (j >= 0 && arr[j] > numberToInsert) {
      //       arr[j + 1] = arr[j]
      //       j = j - 1
      //     }
      //     arr[j + 1] = numberToInsert
//   }
// }

// const arr = [8, 20, -2, 30, 3]
// insertionSort(arr)
// console.log(arr)
// O(n^2)

// Quick Sort


function quickSort(arr) {


}
const arr = []
quickSort(arr)
console.log(arr)

