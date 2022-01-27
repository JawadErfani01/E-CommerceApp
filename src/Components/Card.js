import React from "react";
import { useGlobalContext } from "../context";
import Loading from './Extra/Loading'
function Card() {
  const { CardData, setuserList, userList,loading } = useGlobalContext();
  const addToCard = (item) => {
    setuserList([...userList, item]);
    localStorage.setItem("user-by",JSON.stringify(item));
  };
  if(loading){
    return(
      <Loading/>
    )
  }
  return (
    <div className="flex flex-wrap  p-4 justify-center items-center">
      {CardData.map((item) => {
        const { id, price, title, description, image,category, rating } = item;

        return (
          <div className="m-3 shadow-2xl w-4/5 md:w-64 p-4" key={id}>
            <img
              className="h-44 my-4 md:w-56 w-full overflow-hidden p-0"
              src={image}
              alt={title}
            />
            <div className="flex justify-between">
              <h3>
                <span className="font-bold ">Price: </span>
                {price}$
              </h3>
              <h3>
                <span className="font-bold">Rate: </span>
                {rating.rate}
              </h3>
            </div>
            <h1 className="text-start">
              <span className="font-bold">Name: </span>
              {title}
            </h1> <h1 className="text-start">
              <span className="font-bold">Category: </span>
              {category}
            </h1>

            <button
              className="px-2 py-1 w-full hover:scale-95 text-white my-2 bg-slate-800 hover:bg-slate-700"
              onClick={() => addToCard(item)}
            >
              Add to Card
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Card;
