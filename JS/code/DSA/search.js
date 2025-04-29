// ----------------------- *  LINEAR SEARCH * -----------------------

function linearSearch(arr, t) {

  for(let i = 0 ; i < arr.length; i++) {
    if(i === t) {
      return i
    }
  }
  return -1
}
const arr = [1, 2, 6, 9, 0, -5];
console.log(linearSearch(arr, 9))

/*
Time Complexity:
 - Best case: O(1)
 - Worst case: O(N)
*/


// ----------------------- *  BINARY SEARCH * -----------------------


// input is already sorted

function binarySearch(arr, t) {

  let s = 0;
  let e = arr.length - 1;

  while(s <= e) {
    let mid = Math.floor((s+e)/2)
    if(t === arr[mid]) {
      return mid;
    } else if(t < arr[mid]) {
      e = mid - 1
    } else {
      s = mid + 1
    }
  }
  return -1
}


const ar = [-5, 0, 1, 2, 6, 9, 34, 67];
console.log(binarySearch(ar, 67))


/*
Time Complexity:
 - Best case: O(1)
 - Worst case: O(logN)
*/

