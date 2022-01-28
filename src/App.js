import React, { useState } from "react";
import Navbar from "./Components/Header/Navbar";
import Dropdown from "./Components/Header/Dropdown";
import Fotter from "./Components/Fotter/Fotter";
import Home from "./pages/Home";
import Order from "./pages/Order";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Error from "./pages/Error";
import './styles/App.css'
import { Routes, Route } from "react-router-dom";
import Registeration from "./pages/Registeration";
function App() {
  const [isOpane, setisOpane] = useState(false);
  const toggle = () => {
    setisOpane(!isOpane);
  };

  return (
    <div className=" font-serif flex flex-col min-h-screen">
      <Navbar toggle={toggle} isOpane={isOpane} />
      <Dropdown toggle={toggle} isOpane={isOpane} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Order" element={<Order />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Registeration" element={<Registeration />} />

       
        <Route path="*" element={<Error />} />
      </Routes>
      <Fotter />
    </div>
  );
}

export default App;
