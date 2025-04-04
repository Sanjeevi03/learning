// 1. JSX
// {React.createElement("div", {}, React.createElement("h1", {className:"s"}, "Sanjeevi"))}

// 2. createElement and cloneElement
// const v = React.createElement('h1', {}, "Sanjeevi")

// {React.cloneElement(v, {style:{color:"red"}})}
// {React.cloneElement(v, {style:{color:"blue"}})}

// 3. child prop

// const App = () => {
 

//   return (
//     <div>
//       <My>
//         <span>Sanjeevi</span>
//       </My>

//     </div>
//   );
// };

// export default App;


// const My = ({children}) => {
//   return (
//     <>
//       {children}
//     </>
//   )
// }

// 4. switching component
// const PAGES = {
//   home: HomePage,
//   about: AboutPage,
//   services: ServicesPage,
//   contact: ContactPage,
// };

// const Page = (props) => {
//   const Handler = PAGES[props.page] || ContactPage;

//   return <Handler {...props} />;
// };

// 5. useContext and useReducer;

// export const UserContext = createContext();

// const App = () => {
//   const [state, setState] = useState(0);

//   const handleClick = () => {
//     // setState(state + 1)
//     setState(pre => pre + 1);
//     setState(pre => pre + 1);
//   };

//   useEffect(() => {
    
//   }, [state]);

//   const [reduState, dispatch] = useReducer(reducer, initialValue);

//   return (
    
//     <UserContext.Provider value={reduState}>
//       <h1>Count - {reduState.count}</h1>
//       <h1>Array - {JSON.stringify(reduState.array)}</h1>
//       <h1>Objec - {JSON.stringify(reduState.obj)}</h1>
      
//       <button onClick={()=>dispatch({type:'count', value: 1})}>Count</button>
//       <button onClick={()=>dispatch({type:'array', value: reduState.count})}>Array</button>
//       <button onClick={()=>dispatch({type:'obj', value: {name1:"sanjeevi"}})}>Object</button>
//       <button onClick={()=>dispatch({type:'obj', value: {name2:"monisha"}})}>Object</button>

//       <Test dispatch={dispatch}/>
//       </UserContext.Provider>
//   );
// };

// const initialState = {
//   loading: false,
//   data: [],
// };

// const reducer = (state, action) => {
//   switch(action.type) {
//     case "+": {
//       return {...state, data: action.value}
//     }
//     case "load": {
//       return {...state, loading: action.value}
//     }
    
//     default:
//       return state;
//   }
// };

// export const Test = ({dispatch}) => {
//   const { count, array } = useContext(UserContext);

//   const [reduState, dispatch1] = useReducer(reducer, initialState);

//   useEffect(() => {
//     (async() => {
//       dispatch1({type:"load", value: true})
//       try {
//         const x = await axios.get("https://jsonplaceholder.typicode.com/posts")
//         dispatch1({type:"+", value:x.data})
//         dispatch1({type:"load", value: false})
//       } catch(e) {
//         dispatch1({type:"load", value: false})
//       }
//     })()
//   }, [])

//   return (
//     <div>
//       <h1>Test Component</h1>
//       <h1>From - {count}</h1>

//       {JSON.stringify(array)}
//       {JSON.stringify(reduState.data)}

//       <button onClick={()=> dispatch({type:'array', value: "sanjeevi"})}>click to add</button>

//     </div>
//   )
// }

// https://kentcdodds.com/blog/usememo-and-usecallback
// https://www.ambitionbox.com/skills/javascript-interview-questions


// ------  Intersection Observer


// UI

import { useState, useEffect, useRef, useCallback } from "react";
import axios from "axios";

const API_URL = "http://localhost:5000/news";

const App = () => {
  const [news, setNews] :any = useState([]);
  const [page, setPage] = useState(1)
  const loaderRef = useRef(null)
  const [hasMore, setHasMore] = useState(true);

  const fetchNews = useCallback(async () => {
    try {
      const { data } = await axios.get(`${API_URL}?page=${page}`);
      if (data.news.length === 0) {
        setHasMore(false); // No more data available
      } else {
        setNews((prev) => [...prev, ...data.news]); // Append new data
        setPage((prev) => prev + 1); // Increment page
      }
    } catch (error) {
        console.error("Error fetching news:", error);
    }
  }, [page]);  

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
          if (entries[0].isIntersecting && hasMore) {
              fetchNews();
          }
      },
      { threshold: 1 }
    );

    if(loaderRef.current) {
      observer.observe(loaderRef.current);
    }
    return () => observer.disconnect(); // Cleanup observer
  }, [news.length]);

  console.log('news', news)
  console.log('loaderRef', loaderRef)
  return (
    <div>
      <div>   
        {
          news.map(i =>(
            <li style={{height:"100px"}}>{i.title}</li>
          ))
        } 
      </div>
      {hasMore && <h1 ref={loaderRef}>Loading....</h1>}
    </div>
  );
};

export default App;


// server

const totalRecords = 50;
const sampleNews = Array.from({ length: totalRecords }, (_, i) => ({
    id: i + 1,
    title: `News Headline ${i + 1}`,
    content: `This is the content for news article ${i + 1}.`,
    publishedAt: new Date(),
}));

// Pagination API (returns news based on requested page)
app.get("/news", (req, res) => {
  console.log(req.query)
  const {page} = req.query;
  let limit = 10
  
  const skip = (parseInt(page) - 1) * parseInt(limit);

  console.log(skip, skip + limit)
  const paginatedNews = sampleNews.slice(skip, skip + parseInt(limit));
  res.json({ news: paginatedNews, totalRecords });
});
// ------