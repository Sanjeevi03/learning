// sort

let x = [-2, -7, 1000, 5]

console.log(x.sort())

// ----------------------- * BUBBLE SORT * -----------------------

function bubbleSort(arr) {
  let swapped
  do {
    swapped = false;
    for(let i = 0; i < arr.length - 1; i++) {
      if(arr[i] > arr[i+1]) {
        [arr[i], arr[i+1]] = [arr[i+1], arr[i]]
        swapped = true;
      }
    }
  } while(swapped)

  return arr;
}

console.log(bubbleSort([23,45,23,45,89,67,4,3]))

/*
Time Complexity:
 - Best case: O(N)
 - Average case: O(N^2)
*/

// ----------------------- * SELECTION SORT * -----------------------

function selectionSort(arr) {
  for(let i = 0; i < arr.length; i++) {
    let minIndex = i; 
    for(let j = i+1; j < arr.length; j++) {
      if(arr[minIndex] > arr[j]) {
        minIndex = j;
      }
    }
    if(minIndex !== i) {
      [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]]
    }
  }
  return arr
}

console.log(selectionSort([45,56,15,13,89,10,4,3]))

/*
Time Complexity:
 - Best case: O(N^2)
 - Average case: O(N^2)
*/

// ----------------------- * INSERTION SORT * -----------------------

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let numberToInsert = arr[i]
    let j = i - 1
    while (j >= 0 && arr[j] > numberToInsert) {
      arr[j + 1] = arr[j]
      j = j - 1
    }
    arr[j + 1] = numberToInsert
  }
}

const arr = [8, 20, -2, 30, 3]
insertionSort(arr)
console.log(arr)
// O(n^2)


/*
Time Complexity:
 - Best case: O(N)
 - Average case: O(N^2)
*/