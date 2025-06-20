{/* <input type="text" id="demo"/> <br>

<button id="button-click">click</button> */}

const id = document.getElementById("demo");

//    //  --  DEBOUNCE --         //
const debounce = (fn, delay = 1000) => {
  let timer;
  return (args) => {
    clearTimeout(timer)
    timer = setTimeout(()=> {
      fn(args)
    }, delay)
  }
}

function clickCall(e) {
  console.log("sanj", e.target.value)
}
document.addEventListener("keypress", debounce(clickCall, 1000))


// //      --  THROTTLE --         //
const btnID = document.getElementById("button-click");

function buttonClick() {
  console.log("button clicked");
}

const throttle = (fn, delay = 1000) => {
  let lastCall = 0;
  return function (...args) {
    const now = Date.now();
    console.log(now, lastCall, now-lastCall, delay)
    if (now - lastCall < delay) return;
    lastCall = now;
    return fn(...args);
  };
};

btnID.addEventListener("click", throttle(buttonClick, 3000));
