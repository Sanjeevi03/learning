import { useMemo, useState } from "react";

function UseMemoCOm() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);


  const double = useMemo(() => {
    for(let i=0;i<998765499;i++) {}
    return count1 * 2
  }, [count1])

  const handleClick1 = () => {
    setCount1((prev)=> prev + 1)
  }
  return (
    <div>
      <h1>count1 - {count1}</h1>
      <h1>{double}</h1>
      <button onClick={handleClick1}>Increment count1</button>
      
      <h1>count2 - {count2}</h1>
      <button onClick={() => {
        setCount2((prev)=> prev + 1)
      }}>Increment count2</button>
    </div>
  );
}

export default UseMemoCOm;
