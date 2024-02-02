import React from "react";
import { useContexts } from "../../Contexts/Context";
import Rating from "../Rating/Ratings";

const ShoppingBox = () => {
  const { carts, removeCarts } = useContexts();

  const removeHandlre = (id) => {
    removeCarts(id);
  };
  return (
    <div className="w-full p-[20px]">
      <h2 className="text-xl md:text-2xl mb-[20px]">Your Shopping Basket</h2>
      <hr />
      <ul className="my-[1rem] text-[0.5rem] md:text-[1rem]">
        {carts.map((addproducts) => (
          <li key={addproducts.id} className="flex mb-[1rem]">
            <div className="my-[10px] p-[20px] w-[150px]">
              <img src={addproducts.image} alt="img" />
            </div>
            <div className="itemDeatils ml-[10px]">
              <div>{addproducts.title}</div>
              <p>
                <strong>Rs.{addproducts.price}</strong>
              </p>
              <div className="flex my-[8px]"><Rating rating={addproducts.rating.rate}/></div>
              <button
                className="bg-[orange] py-[5px] px-[10px] rounded mt-[25px]"
                onClick={() => removeHandlre(addproducts.id)}
              >
                Remove from Cart
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingBox;
