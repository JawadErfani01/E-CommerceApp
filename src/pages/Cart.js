import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";

const UserBy = () => {
  const [add, setadd] = useState(1);

  const { userList, setuserList } = useGlobalContext();

  console.log(userList.length);
  const removeCart = (id) => {
    setuserList(userList.filter((item) => item.id !== id));
  };

  return (
    <div>
      <h1 className="text-3xl text-blue-600 text-center p-4">
        You order this products
      </h1>
      <div className="flex flex-wrap flex-col m-1 md:m-4 justify-center items-center">
        {userList.map((item) => {
          const { image, price, title, description, id,category } = item;

          return (
            <div key={id} className="shadow-2xl p-2   m-2 md:w-3/5 w-4/5">
              <div className=" flex flex-col md:flex-row">
                <div className="md:w-1/2 w-full">
                  <img
                    className="h-56 mt-6 md:w-4/5 w-full mx-auto "
                    src={image}
                    alt={title}
                  />
                  <h2>
                    <span className="font-bold mr-2">Name:</span>
                    {title}
                  </h2>
                  <h3>
                    <span className="font-bold mr-2">Price:</span> {price}$
                  </h3>
                  <h3>Quantitiy: {add}</h3>
                </div>
                <div className="w-full md:w-1/2">
                  <p className="text-lg mt-4 md:mt-10">
                    <span className="font-bold mr-2">Description:</span>{" "}
                    {description}
                  </p>
                  <p className="text-lg mt-10">
                    <span className="font-bold mr-2">Category:</span>{" "}
                    {category}
                  </p>
                </div>
              </div>
              <div className="flex mb-4 justify-center items-center">
                <button
                  onClick={() => setadd(add + 1)}
                  className=" mx-2 px-6 py-2 rounded-lg bg-blue-400 blue:bg-red-500"
                >
                  Add
                </button>
                <button
                    onClick={() => removeCart(id)}
                    className="  px-6 py-2 rounded-lg w-1/4 bg-red-400 hover:bg-red-500"
                  >
                
                Remove
                </button>
                <button
                  onClick={() => setadd(add - 1)}
                  className="flex  px-6 py-2 rounded-lg mx-2 bg-green-400 hover:bg-green-500"
                > Sub
                 </button>
                
              </div>
            </div>
          );
        })}
      </div>
      {userList.length >= 1 ? (
        <Link
          to="/Login"
          className="flex mx-auto  items-center justify-center px-6 py-3 duration-200 transform ease-linear text-white font-mono w-2/5 m-4  hover:scale-95 bg-slate-800 hover:bg-slate-700"
        >
          Checkout
        </Link>
      ) : (
        <h2 className="p-6 text-3xl text-center font-serif capitalize text-red-600">
          Your Cart is empty
        </h2>
      )}
    </div>
  );
};

export default UserBy;
