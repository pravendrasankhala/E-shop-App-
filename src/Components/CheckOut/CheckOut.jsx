import React from 'react'
import { useContexts } from '../../Contexts/Context'

const CheckOut = () => {

  const {carts} = useContexts();

  const getTotalAmt = ()=>{
    let total = 0;
    carts.map(cart => {
      return total = Number(total) + Number(cart.price)
    })
    return total;
  }


  return (
    <div className="w-full flex justify-between">
    <div className='basis-[50%] lg:basis-[75%] p-[20px]'>
      <img src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt=""/>
    </div>
    <div className="basis-[40%] lg:basis-[20%] text-[0.5rem] sm:text-[1rem] flex justify-center items-center">
      <div className="subtotal">
        <p>Subtotal({carts.length} items): <strong>Rs.{getTotalAmt()}</strong></p>
        <p><input type="checkbox"/>This order contains a gift</p>
        <button className='bg-[orange] py-[8px] px-[10px] rounded'>Proceed to Checkout</button>
      </div>
    </div>
  </div>
  )
}

export default CheckOut
