import React,{useState} from 'react'
import Navbar from "./Components/Header/Navbar";
import Dropdown from "./Components/Header/Dropdown";
import Fotter from "./Components/Fotter/Fotter";
import Home from './pages/Home'
import Order from './pages/Order'
import List from "./pages/List";
import Error from './pages/Error';
import  {Routes,Route} from 'react-router-dom' 
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
        <Route path="/List" element={<List />} />
        <Route path="/Order" element={<Order />} />       
        <Route path="*" element={<Error />} />
      </Routes>
      <Fotter />
   
  </div>
  );
}

export default App;
