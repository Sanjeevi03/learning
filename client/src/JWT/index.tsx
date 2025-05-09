import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./login";
import Register from "./register";
import Home from "./home";

const JWT = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" index element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default JWT;