import React, { useState, useEffect } from "react";
import Rating from "../Rating/Ratings";
import { useContexts } from "../../Contexts/Context";

const Products = () => {
  const [product, setProduct] = useState([]);

  const { addCarts } = useContexts();

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProduct(data);
    };
    fetchProducts();
  }, []);

  const HandlreClick = (item) => {
    addCarts(item);
  };

  return (
    <div className="w-full bg-gradient-to-t from-[#ccc] from-100% sm:from-95% to-transparent  relative">
      <div className="container flex flex-col sm:flex-row sm:justify-between flex-wrap">
        {product.map((item) => (
          <div
            key={item.id}
            className="sm:basis-[40%] lg:basis-[20%] text-[0.75rem] lg:text-[1rem] h-[350px] p-[20px] m-[10px] bg-[#fff] mt-[20px] rounded box-border"
          >
            <p className="mb-[5px] text-center"> {item.title}</p>
            <p className="mb-[5px] text-center"> Rs.{item.price}</p>
            <p className="flex mb-[5px]">
              <Rating rating={item.rating.rate} />
            </p>
            <div className="h-[150px] w-[100%] flex items-center justify-center ">
              <img className="w-[75px]  " src={item.image} alt="" />
            </div>
            <div className="flex justify-center">
              <button
                onClick={(e) => HandlreClick(item)}
                className="p-[8px] bg-[orange] rounded"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
