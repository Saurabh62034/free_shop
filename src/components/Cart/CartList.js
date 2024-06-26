import React, {useContext} from 'react';
import CartItem from "./CartItem";
import { ProductContext } from "../Context";

export default function CartList() {
  const { cart } = useContext(ProductContext);
  
  return (
    <div className='container-fluid'>
        {cart.map(item=>{
            return <CartItem key={item.id} Item={item} />
        })}
        
    </div>
  )
}
