import React from "react";
import { useGlobalContext } from "../context";

function Card() {
  const { CardData, setuserList, userList } = useGlobalContext();
  const addToCard = (item) => {
    setuserList([...userList, item]);
  };
  return (
    <div className="flex flex-wrap  p-4 justify-center items-center">
      {CardData.map((item) => {
        const { id, price, title, description, image,rating } = item;
        console.log(rating.rate);
        return (
          <div className="m-3 shadow-2xl w-64 p-4" key={id}>
            <img
              className="h-56 w-full overflow-hidden p-0"
              src={image}
              alt={title}
            />
            <div className="flex justify-between">
            <h3><span className="font-bold">Price: </span>{price}</h3>
            <h3><span className="font-bold">Rate: </span>{rating.rate}</h3>
            </div>
            <h1  className="text-start "><span className="font-bold">Name: </span>{title}</h1>
            
            <button
              className="px-2 py-1 w-full hover:scale-95  my-2 bg-blue-500 rounded-xl"
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
