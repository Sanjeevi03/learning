import { useMemo, useState } from "react";

const Index = () => {
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)
  
  const handl1 = () => {
    setCount1(count1 + 1)
  }
  const handl2 = () => {
    setCount2(count2 + 1)
  }
  // const isEven = () => {
  //   for (let i = 0; i < 900000000; i++) { }
  //   return count1 % 2 === 0
  // }
  
  const isEven = useMemo(() => {
    for (let i = 0; i < 900000000; i++) { }
    return count1 % 2 === 0
  }, [count1])

  return (
    <div>
      <h1>Count 1 - {count1}</h1> { isEven ? "Even" : "Odd"}
      <h1>Count 2 - {count2}</h1>
      <button onClick={handl1}>count 1</button>
      <button onClick={handl2}>count 2</button>
    </div>
  );
};

export default Index;


// useMemo: Optimize Expensive Computation
