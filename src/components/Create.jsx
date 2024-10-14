import React, { useContext, useState } from 'react'
import {ProductContext} from "../utils/Context.jsx"
import {nanoid} from "nanoid";
import { useNavigate } from 'react-router-dom';


const Create = () => {
  const navigate = useNavigate();
 const [products,setProducts] = useContext(ProductContext);

   const [image,setImage]= useState("");
   const [title,setTitle]= useState("");
   const [category,setCategory]= useState("");
   const [price,setPrice]= useState("");
   const [description,setDescription]= useState("");

  

  const addProductHandler = (e)=>{
        e.preventDefault();
        if( image.trim().length < 5 || title.trim().length < 5 || category.trim().length < 5 || price.trim().length < 1 || description.trim().length<5){
          alert('All fields should be filled and minimum length for each field is 5');
          return;
          
        }
        const product = {id:nanoid(),image,title,category,price,description};

        

       
        const updatedProducts =  [...products, product] ;
        console.log("Before updating products:", products); // Debug
        setProducts(updatedProducts);
        console.log("After updating products:", updatedProducts); // Debug
          localStorage.setItem("products", JSON.stringify(updatedProducts));

        
        navigate("/");
        console.log(product);
        
  
  }

 
  return (
    <div>
       
        <form onSubmit={addProductHandler} className='flex p-[5%] w-screen h-screen flex-col items-center'>
        <h1 className='w-1/2 mb-5 text-3xl'>Add Product Details</h1>
            <input type="url" className='bg-zinc-300 p-3 text-xl w-1/2 rounded-md mb-3 'placeholder='Image Link' onChange={(e)=>setImage(e.target.value)} value={image}  />
            <input type="text" className='bg-zinc-300 p-3 text-xl w-1/2 rounded-md mb-3 'placeholder='Title' onChange={(e)=>setTitle(e.target.value)} value={title}  />
            <div className='w-1/2 flex justify-between'>
            <input type="text" className='bg-zinc-300 p-3 text-xl w-[48%] rounded-md mb-3 'placeholder='Category' onChange={(e)=>setCategory(e.target.value)} value={category}  />
            <input type="number" className='bg-zinc-300 p-3 text-xl w-[48%]  rounded-md mb-3 'placeholder='price' onChange={(e)=>setPrice(e.target.value)} value={price}  />
            </div>
           
           <textarea className='bg-zinc-300 p-3 text-xl w-1/2 rounded-md mb-3 'placeholder='Enter product description here...' onChange={(e)=>setDescription(e.target.value)} value={description} rows={8}></textarea>
           <div className='w-1/2'>
           <button className="px-3 py-2 border border-blue-400 text-blue-400 rounded-lg">Add New Product</button>
           </div>
           
        </form>
    </div>
  )
}

export default Create