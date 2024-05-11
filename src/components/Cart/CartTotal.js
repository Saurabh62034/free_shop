
import {Link} from "react-router-dom";
import React, {useContext} from 'react';
import { ProductContext } from "../Context";

export default function CartTotal({cart}) {
    const {cartSubTotal, cartTax,cartTotal,clearCart} = useContext(ProductContext);
    
  return (
    <React.Fragment>
      <div className='container'>
        <div className='row'>
            <div className='col-10 mt-2 text-capitalize text-end mx-auto'>
                <Link to="/">
                <button className='btn btn-outline-danger text-uppercase mb-3 px-5' type='button' onClick={()=>clearCart(cart)}>
                    clear cart
                </button>
                </Link>
                <h5>
                <span className='text-title'>
                subtotal:</span>
                <strong>INR {cartSubTotal}</strong>
                </h5>
                  <h5>
                      <span className='text-title'>
                          Tax:</span>
                      <strong>INR {cartTax}</strong>
                  </h5>
                  <h5>
                      <span className='text-title'>
                          total:</span>
                      <strong>INR {cartTotal}</strong>
                  </h5>
            </div>
        </div>
    </div>
    </React.Fragment>
  )
}
