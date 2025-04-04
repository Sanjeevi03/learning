import axios from "axios"
import { useEffect, useState } from "react"

export const Test2 = () => {

  const [state, setState] = useState([])

  useEffect(() => {
    (async () => {
      const { data } = await axios.get("http://localhost:5000/get");
      setState(data)
    })()
  }, [])
  
  console.log('res', state)
  
  return (
    <div>
      <h1>Test 2</h1>
      {
        state.map((i:any) => <li>{i.name}</li>)
      }
    </div>
  )
}

// export default Test2