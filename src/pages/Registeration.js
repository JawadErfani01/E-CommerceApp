import React, { useState,useEffect } from "react";
import axios from "axios";
import {useNavigate} from 'react-router-dom'
function Registeration() {
  const [Name, setName] = useState("");
  const [Password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate=useNavigate()

  const handelSubmit = async (e) => {
    e.preventDefault();
    navigate('/Card')
    setPassword('')
    setName('')
    setEmail('')
    let item = { Name, Password,email };
    let resault = await fetch("https://fakestoreapi.com/users", {
      method: "POST",
      body: JSON.stringify(item),
      headers:{
        "Content-Type":'application/json',
      }
    });
    resault = await resault.json();
     console.log("resault",resault)
  };

  return (
    <div className="w-2/6 my-16  h-2/6 m-auto  justify-center items-center shadow-slate-400 bg-slate-900 py-8 px-6 shadow-xl rounded-xl text-black">
      <h2 className="text-center text-3xl my-6 text-white">Registeration</h2>
      <form onSubmit={handelSubmit} className="m-4 ">
        <input
          value={Name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          required
          className="px-4 my-2 py-2 rounded-full shadow-slate-700 shadow-xl  outline-none w-full "
          placeholder="Name..."
        />
        <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        required
        className="px-4 my-2 py-2 rounded-full shadow-slate-700 shadow-xl  outline-none w-full "
        placeholder="Email..."
      />
        <input
          value={Password}
          onChange={(e) => setPassword(e.target.value)}
          required
          type="password"
          className="px-4 my-2 py-2 rounded-full shadow-slate-700 shadow-xl  outline-none w-full "
          placeholder="Password..."
        />  
    
        <button
          className="px-4 py-2 my-4 text-center justify-center bg-white rounded-full shadow-slate-700 shadow-xl mx-auto flex items-center cursor-pointer outline-none w-2/4 "
type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}



export default Registeration;
