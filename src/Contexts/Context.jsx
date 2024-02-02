import { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext({
  carts: [],
  addCarts: () => { },
  removeCarts: () => { },
})


const ContextProvider = (props) => {
  const [carts, setCarts] = useState([]);
  console.log(carts);
  

  const addCarts = (items) => {
    setCarts((prev) => [{...items}, ...prev])
    
  }
  const removeCarts=(id)=>{
    setCarts((prev)=>prev.filter((cart) => cart.id !== id));
  }

  useEffect(()=>{
    const receiveCart = JSON.parse(localStorage.getItem("Carts"))

    if(receiveCart && receiveCart.length >0){
      setCarts(receiveCart);
    }
  },[])

  useEffect(()=>{
    localStorage.setItem('Carts',JSON.stringify(carts))
  },[carts])
  return (
    <UserContext.Provider value={{ carts, addCarts, removeCarts}}>
      {props.children}
    </UserContext.Provider>
  )

}

export default ContextProvider;

export const useContexts = () => {
  return useContext(UserContext);
}


