

const checkPrime = (num) => {

  if(num < 2) return false;
  for(let i = 2; i <= Math.sqrt(num);i++) {
    if(num % i === 0) return false;
  }
  return true;

}

function call() {

  let l = []
  for(let i = 0; i <= 100; i++) {
    if(checkPrime(i)) {
      l.push(i)
    }
  }
  console.log(l)
}

call()