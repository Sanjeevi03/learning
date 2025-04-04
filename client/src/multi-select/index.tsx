/* 
- multi select
- useCallback
- debounce
- throttle
*/

import axios from "axios";
import { useCallback, useEffect, useState } from "react"

export const MultiSelect = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [users, setUsers] :any= useState([]);
  const [selectedUsers, setSelectedUsers] :any= useState(new Set());
  const [count, setCount] = useState(0);

  const fetchName = async (searchTerm:string) => {
    if (!searchTerm.trim()) return;
    const {data} = await axios.get(`https://dummyjson.com/users/search?q=${searchTerm}`)
    setUsers(data.users);
  }

  const debounce = (fn:any, delay = 1000) => {
    let timer:any;
    return (...args:any) => {
      clearTimeout(timer)
      timer = setTimeout(() => {
        fn(...args)
      }, delay)
    }
  }

  const debounced = useCallback(debounce(fetchName, 1000), [])
  useEffect(() => {
    debounced(searchTerm)
  }, [searchTerm])

  const handleSelectUser = (user:any) => {
    setSelectedUsers(new Set([...selectedUsers, user]));
    setUsers(users.filter( (i:any) => i.firstName !== user.firstName));
    setSearchTerm("")
  };

  const removeUser = (user:any) => {
    const upd = [...selectedUsers].filter( (i:any) => i.firstName !== user.firstName);
    setSelectedUsers(new Set([...upd]));
    setUsers([...users, user])
  }

  const handleBlackSpace = (e:any) => {
    if(e.key === "Backspace" && selectedUsers.size > 0) {
      const len= [...selectedUsers].length - 1
      const user = [...selectedUsers][len]
      const upd = [...selectedUsers].filter( (i:any) => i.firstName !== user.firstName);
      setSelectedUsers(new Set([...upd]));
      setUsers([...users, user])
    }
  }

  const throttle = (func:any, delay:number) => {
    let lastCall = 0;
    return (...args:any) => {
      const now = new Date().getTime();
      if (now - lastCall < delay) return;
      lastCall = now;
      func(...args);
    };
  };

  const handleClick = useCallback(
    throttle(() => {
      setCount((prev) => prev + 1);
      console.log("Button Clicked!");
    }, 2000),
    []
  );

  return (
    <div>
      <div className="border-1 w-full h-14 rounded-3xl px-3 my-5 text-lg flex items-center gap-x-2">
        <div>{
          [...selectedUsers].map(i => <span className="border-2 bg-gray-900 text-blue-50 py-2 px-4 rounded-3xl">{i.firstName + " " + i.lastName} <span className="hover:cursor-pointer" onClick={() => removeUser(i)}>&times;</span></span>)
        }</div>
        <input onKeyDown={handleBlackSpace} type="text" className="outline-none" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="Search a name..."/>
      </div>
      <div className="mx-8">
        {
          users.map((i:any) =>(
            <li className="list-none border-1 p-2 flex w-xs hover:bg-gray-200 hover:cursor-pointer" onClick={() => handleSelectUser(i)}>{i.firstName + " " + i.lastName}</li>
          ))
        }
        {/* {
          users.length === 0 && <>No record found</>
        } */}
      </div>
      <div>
        <h2>Count: {count}</h2>
        <button onClick={handleClick}>Click Me (Throttle)</button>
      </div>
    </div>
  )
}
