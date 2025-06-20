import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./login";
import Register from "./register";
import Home from "./home";
import Protected from "./Protected";
import About from "./about";

const JWT = () => {

  const isAuthenticated = !!localStorage.getItem('accessToken');

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" index element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/" element={
          // <Protected>
            isAuthenticated ? <Home/> : <Navigate to='/login'/>
          // </Protected>
        }/>
        <Route path="/about" element={
          // <Protected>
            // <About/>
            isAuthenticated ? <About/> : <Navigate to='/login'/>
          // </Protected>
        }/>
      </Routes>
    </BrowserRouter>
  )
}

export default JWT;