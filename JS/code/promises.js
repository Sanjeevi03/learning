
// ALSO REFER GOOGLE DOC
/*
A Promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
  ✅ A Promise has 3 States:
  Pending – initial state, neither fulfilled nor rejected.
  Fulfilled – operation completed successfully.
  Rejected – operation failed.

*/

// syntax
const promise = new Promise((resolve, reject) => {
  // async task
  if (/* success */ true) {
    resolve('Success!');
  } else {
    reject('Error!');
  }
});

// 🔸 Using .then() and .catch()
promise
  .then(result => {
    console.log(result);     // if resolved
  })
  .catch(error => {
    console.log(error);      // if rejected
  });

// ✅ Real Example (with timeout)
const getData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data received ✅");
    }, 1000);
  });
};

getData()
  .then(res => {
    console.log(res);  // After 1 second: "Data received ✅"
  })
  .catch(err => {
    console.error(err);
  });




/*
  Promise chaining:
  Chaining means you can attach multiple .then() calls in sequence — the output of one becomes the input for the next.
*/

// Ex:
function add(num) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(num + 1);
    }, 500);
  });
}

add(1)
  .then(result => {
    console.log(result);     // 2
    return add(result);
  })
  .then(result => {
    console.log(result);     // 3
    return add(result);
  })
  .then(result => {
    console.log(result);     // 4
  }).catch(err => {
    console.error("Caught error:", err.message); // "Caught error: Oops"
  });

/* 
  explanation:
    Each .then():
      waits for the previous one to resolve,
      then passes the result to the next.
*/


// --------- Promise all  ---------
// Waits for all promises to fulfill
// If any fails, the whole thing fails

// eg:
const p1 = Promise.resolve(1);
const p2 = Promise.resolve(2);
const p3 = Promise.resolve(3);

Promise.all([p1, p2, p3])
  .then(results => console.log(results))  // [1, 2, 3]
  .catch(err => console.error(err));

// eg: with rejection
const p11 = Promise.resolve(1);
const p22 = Promise.reject("Failed");

Promise.all([p11, p22])
  .then(results => console.log(results))
  .catch(err => console.error("Error:", err)); // Error: Failed


// --------- Promise race  ---------
// Returns the first settled promise (fulfilled or rejected)

// eg:
const fast = new Promise(resolve => setTimeout(() => resolve("Fast"), 100));
const slow = new Promise(resolve => setTimeout(() => resolve("Slow"), 1000));

Promise.race([fast, slow])
  .then(result => console.log(result));  // "Fast"


// --------- Promise any  ---------
// Resolves with the first fulfilled promise
// Ignores rejections
// Fails only if all promises reject

// eg:
const p111 = Promise.reject("Err 1");
const p222 = Promise.resolve("Success!");
const p333 = Promise.reject("Err 2");

Promise.any([p111, p222, p333])
  .then(result => console.log(result))  // "Success!"
  .catch(err => console.error(err));


// eg: if all fail
Promise.any([Promise.reject("A"), Promise.reject("B")])
  .catch(e => console.log(e.errors)); // ["A", "B"]

// --------- Promise allSettled  ---------
// Waits for all promises to complete, regardless of success or failure
// Never rejects

// eg: 
const p51 = Promise.resolve("Done");
const p52 = Promise.reject("Failed");
Promise.allSettled([p51, p52])
  .then(results => console.log(results));

// output:
[
  { status: "fulfilled", value: "Done" },
  { status: "rejected", reason: "Failed" }
]
