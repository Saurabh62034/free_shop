import React, { useContext } from 'react';
import {ProductContext} from './Context';
import {Link} from 'react-router-dom';
import {ButtonContainer} from './Button';

const Details = ()=> {
  const { detailProduct, openModal, addToCart } = useContext(ProductContext);
  const{id, company, img, info, price, title, inCart} = detailProduct;
    
        
          return(
            <div className='container py-5'>
              <div className='row'>
                <div className='col-10 mx-auto text-center text-slanted text-blue my-5'>
                  <h1>{title}</h1>
                </div>
              </div>
              <div className='row'>
                <div className='col-10 mx-auto col-md-6 my-3 text-capitalize'>
                  <img src={img} className='img-fluid' alt='product'></img>
                </div>
                <div className='col-10 mx-auto col-md-6 my-3 text-capitalize'>
                  <h1>model: {title}</h1>
                  <h4 className='text-title text-uppercase text-muted mt-3 mb-2'>
                    made by: <span className='text-uppercase'>
                      {company}
                    </span>
                    <strong>price: {price}</strong>
                  </h4>
                  <p className='text-capitalize font-weight-bold mt-3 mb-0'>
                    some info about product:
                  </p>
                  <p className='text-muted lead'>{info}</p>
                  <Link to="/">
                    <ButtonContainer>
                      back to products
                    </ButtonContainer>
                  </Link>
                  <ButtonContainer $cart={true}
                  disabled={inCart?true:false}
                  onClick={()=>{
                    addToCart(id);
                    openModal(id);
                  }}>
                    {inCart?"in Cart":"Add to Cart"}
                  </ButtonContainer>
                </div>
              </div>
            </div>
          )
          
        
      
  
}

export default Details;