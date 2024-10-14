import React, { createContext, useEffect, useState } from 'react'
import axios from './axios.jsx';

export const ProductContext = createContext();

const Context = (props) => {
   

    const getProducts = async () =>{
      try {
         const {data} = await axios("/products");
         setProducts(data);
         localStorage.setItem("products", JSON.stringify(data));
       
         
      } catch (error) {
        console.log(error);
        
      }
    }

    const [products,setProducts] = useState(JSON.parse(localStorage.getItem("products"))|| []);

    useEffect(() =>{
        getProducts();
    },[])
  return (
   < ProductContext.Provider value={[products,setProducts]}>{props.children}</ ProductContext.Provider>
  )
}

export default Context