import { lazy } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

const Test1 = lazy(() => import("../code-splitting-lazyload/Test1"))
const Test2 = lazy(() => import("../code-splitting-lazyload/Test2").then((x)=> ({default: x.Test2})))

const CodeSplitting = () => {
  return (
    <div>
      <BrowserRouter>
      <Link to="/test1">Test 1</Link> {" "}
      <Link to="/test2">Test 2</Link>
      <h1>Code splitting and Lazy loading</h1>
      <Routes>
        <Route path="/test1" element={<Test1/>}/>
        <Route path="/test2" element={<Test2/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default CodeSplitting;

// When we move to particular routes at that only react loads the required files to the browser