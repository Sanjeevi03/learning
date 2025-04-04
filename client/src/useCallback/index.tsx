import { useCallback, useState } from 'react'
import { Test } from './Test';
import { Count } from './Count';
import { Button } from './Button';

const Index = () => {
 
  const [age, setAge] = useState(0)
  const [salary, setSalary] = useState(0)

  const handleAge = useCallback(() => {
    setAge(age+1)
  }, [age])
  
  const handleSalary = useCallback(() => {
    setSalary(salary+1)
  }, [salary])

  return (
    <div>
     <Test />
     <Count title='Age' count={age}/>
     <Button handleClick={handleAge}>Increment age</Button>
     
     <Count title='Salary' count={salary}/>
     <Button handleClick={handleSalary}>Increment salary</Button>
    </div>
  );
}

export default Index;


// useCallBack: Prevent Unnecessary Function Recreation