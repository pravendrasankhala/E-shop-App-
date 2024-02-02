import React from "react";
import { AiTwotoneShop } from "react-icons/ai";
import { MdAddShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
import { useContexts } from "../../Contexts/Context";

const Header = () => {
  const { carts } = useContexts();

  return (
    <header className=" w-[100vw] bg-[#131921] py-2">
      <div className="container flex justify-between items-center">
        {/* Logo section */}
        <div  className="text-white font-bold text-1xl md:text-3xl">
        <Link
            to="/" className="flex items-center gap-2 "
          >
            <AiTwotoneShop />
            <span>
              E-<span className="text-[orange]">S</span>hop
            </span>
          </Link>
        </div>
        {/* search bar and card section */}
        <div className="w-[60%] sm:w-[85%] md:w-[80%] flex justify-between items-center">
          {/* search bar section */}
          <div className="sm:w-[50%] lg:w-[60%] hidden sm:block relative">
            <input type="text" className="w-[100%] p-[0.5rem] rounded-l-md" />
            <button className="bg-[orange] p-[0.5rem] rounded-r-md cursor-pointer absolute">
              Search
            </button>
          </div>
          {/* nav section */}
          <div className="w-[90%] sm:w-[35%] lg:w-[30%] text-[12px] lg:text-[1rem] flex items-center justify-between">
          <div className="text-white w-[70%] flex items-center justify-around gap-2">
            <span className="block">Hello Guest</span>
            <span className="block">Sign In</span>
          </div>
          {/* cart section */}
          <div className="text-white">
          <Link to="checkout" className="flex items-center gap-2">
              <div>
              <MdAddShoppingCart />
              <span className="absolute top-[4px] bg-[orange] rounded-full px-[3px] text-[10px] ">{carts.length}</span>
              </div>
              <div> Carts</div>
              </Link>
          </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
