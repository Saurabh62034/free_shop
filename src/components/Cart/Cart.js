import React, { useContext } from 'react';
import Title from "../Title";
import CartColumns from "./CartColumns";
import EmptyCart from "./EmptyCart";
import { ProductContext } from "../Context";
import CartList from "./CartList";
import CartTotal from "./CartTotal";

const Cart = () => {
  const { cart } = useContext(ProductContext);
  console.log(cart);

  return (
    
    <div>
      {cart.length > 0 ? (
        <>
          <Title name="Your" title=" Cart" />
          <CartColumns />
          <CartList />
          <CartTotal cart={cart} />
        </>
      ) : (
        <EmptyCart />
      )}
    </div>
  );
};

export default Cart;
