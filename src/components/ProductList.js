import React, { useContext } from 'react';
import Product from "./Product";
import Title from "./Title";
import { ProductContext } from './Context';

const ProductList = () => {
  const { products } = useContext(ProductContext);

  return (
    <React.Fragment>
      <div className='py-5'>
        <div className='container'>
          <Title name="Our" title="Products" />
          <div className='row'>
            {products.map(product => (
              <Product key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProductList;
