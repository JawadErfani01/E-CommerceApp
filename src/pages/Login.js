import React, { useState,useEffect } from "react";
import {Link, useNavigate} from 'react-router-dom'
import {FcLeft} from 'react-icons/fc'
import {useGlobalContext} from '../context'
function Login() {
  const [UserName, setUserName] = useState("");
  const [UserPassword, setUserPassword] = useState("");
  const {userInfo,setuserInfo,setuserList,order,setorder,userList}=useGlobalContext()


  const navigate=useNavigate()

  const handelSubmit = async (e) => {

    e.preventDefault(); 
    const item = { UserName, UserPassword };
    setuserInfo([...userInfo,item])
    setorder(userList)
    setuserList([])
    navigate('/')
   

    let resault = await fetch("https://fakestoreapi.com/auth/login", {
      method: "POST",
      body: JSON.stringify(item),
    });
    resault = await resault.json();
    localStorage.setItem("user-info",JSON.stringify(resault));
  };
 
  return (
    <div className="w-2/6 my-16  h-2/6 m-auto  justify-center items-center shadow-slate-400 bg-slate-900 py-8 px-6 shadow-xl rounded-xl text-black">
      <h2 className="text-center my-6 text-3xl text-white">Login</h2>
      <form onSubmit={(e)=>handelSubmit(e)} className="m-4 ">
        <input
          value={UserName}
          onChange={(e) => setUserName(e.target.value)}
          required
          type="text"
          className="px-4 my-2 py-2 rounded-full shadow-slate-700 shadow-xl  outline-none w-full "
          placeholder="UserName..."
        />
        <input
          value={UserPassword}
          onChange={(e) => setUserPassword(e.target.value)}
          type="password"
          required
          className="px-4 my-3 py-2 rounded-full shadow-slate-700 shadow-xl  outline-none w-full "
          placeholder="Password..."
        />
        <button
          className="px-4 py-2 my-4 text-center justify-center bg-white rounded-full shadow-slate-700 shadow-xl mx-auto flex items-center cursor-pointer outline-none w-2/4 "
       
        >
          Submit
        </button>
        <Link className="flex justify-center items-center text-lg text-white" to="/Registeration"><span className="text-xl"><FcLeft/></span>Create account</Link>
      </form>
    </div>
  );
}

export default Login;
