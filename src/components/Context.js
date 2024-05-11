import React, { useState, useEffect, createContext, useContext } from 'react';
import { storeProducts, DetailProduct } from "../Data.js";

export const ProductContext = createContext();

export const useProductContext = () => useContext(ProductContext);

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [detailProduct, setDetailProduct] = useState(DetailProduct);
  const [cart, setCart] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalProduct, setModalProduct] = useState(detailProduct);
  const [cartSubTotal, setCartSubTotal] = useState(0);
  const [cartTax, setCartTax] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    setProducts([...storeProducts]);
  }, []);

  const setProduct = () => {
    let tempProducts = [];
    storeProducts.forEach(item => {
      const singleItem = { ...item };
      tempProducts = [...tempProducts, singleItem];
    });
    setProducts(tempProducts);
  };

  const getItem = (id) => {
    const product = products.find(item => item.id === id);
    return product;
  };

  const handleDetail = (id) => {
    const product = getItem(id);
    setDetailProduct(product);
  };

  const addToCart = (id) => {
    let tempProducts = [...products];
    const index = tempProducts.indexOf(getItem(id));
    const product = tempProducts[index];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = parseInt(price.replace(/,/g, ''), 10);

    setProducts(tempProducts);
    setCart([...cart, product]);
    addTotal();
  };

  
  const openModal = (id)=>{
    const product = getItem(id);
    setModalProduct(product);
    setModalOpen(true);
  }
  const closeModal =(id)=>{
    setModalOpen(false);
  }

  const increment = (id) =>{
    let tempCart = [...cart];
    let selectedProduct = tempCart.find(item=>item.id===id);

    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];

    product.count = product.count+1;
    let tempPrice = product.count * parseFloat(product.price.replace(/,/g, ''));
    product.total = tempPrice;

    setCart([...cart])
    addTotal();
  }

  const decrement = (id)=>{
    let tempCart = [...cart];
    let selectedProduct = tempCart.find(item => item.id === id);

    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];

    product.count = product.count -1;

    if(product.count === 0){
      remove(id);
    }
    else{
    let tempPrice = product.count * parseFloat(product.price.replace(/,/g, ''));
    product.total = tempPrice;
    
    setCart([...tempCart])
    addTotal();
  }
  }
  const remove=(id)=>{
    let tempProducts = [...products];
    let tempCart = [...cart];

    tempCart = tempCart.filter(item=>item.id!=id);

    const index = tempProducts.indexOf(getItem(id));
    let removedProduct = tempProducts[index];
    removedProduct.inCart = false;
    removedProduct.count = 0;
    removedProduct.total = 0;

    setCart([...tempCart]);
    setProduct([...tempProducts]);
    
    
    addTotal();
    
  }


  const clearCart=(cart)=>{
    cart.forEach((item)=>{
      const product = getItem(item.id);
      product.inCart = false;
    })
    
    
    setCart([])
    setProduct();
    addTotal();
    
  }
  const addTotal = ()=>{
    let subTotal=0;
    cart.map(item=>{
      (subTotal+=item.total)}
    );
    const tempTax = subTotal*0.1;
    const tax = parseFloat(tempTax.toFixed(2));
    const total = subTotal+tax;
    setCartSubTotal(subTotal.toLocaleString());
    setCartTax(tax.toLocaleString());
    setCartTotal(total.toLocaleString());
  }

  return (
    <ProductContext.Provider value={{
      products,
      setProduct,
      detailProduct,
      cart,
      modalOpen,
      modalProduct,
      cartSubTotal,
      cartTax,
      cartTotal,
      addToCart,
      handleDetail,
      openModal,
      closeModal,
      clearCart,
      increment,
      decrement,
      remove,

      // Add other methods here
    }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;