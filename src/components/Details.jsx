import React, { useContext, useEffect, useState } from 'react'
import { ProductContext } from '../utils/Context.jsx';
import axios from '../utils/axios.jsx';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Loading from './Loading.jsx';

const Details = () => {
 const navigate =  useNavigate();
 const[products,setProducts] =  useContext(ProductContext);
 const [prod,setProd] = useState(null);
const {id} = useParams();

 useEffect(()=>{
   
    if(!prod){
        setProd(products.filter((p)=>p.id==id)[0]) ;
    }
 },[]);

 const productDeleteHandler =  (id)=>{
     const filteredProducts = products.filter((p)=>p.id != id);
     setProducts(filteredProducts);
      localStorage.setItem('products', JSON.stringify(filteredProducts));
     navigate(`/`);
 }

  return ( prod ? 
    <>
    <div className=' h-full w-[80%] flex m-auto p-[10%]'>
        <div className='image  m-10 mr-5 h-[85%] w-[35%] overflow-hidden '><img className='w-full h-full object-contain' src={prod.image} alt="" /></div>
        <div className='content  m-10 ml-5 h-[80%] w-[55%]'>
            <h1 className='text-3xl mb-1'>{prod.title}</h1>
            <h3 className='mb-3 text-lg'>{prod.category}</h3>
            <h1 className='font-bold mb-3 text-xl'>${prod.price}</h1>
            <p className='mb-3'>{prod.description}</p>
            {prod.rating ? (<h3 className='mb-3 text-md'>Rating : {prod.rating.rate}</h3>) : ""}
            

           
            <button onClick={()=>productDeleteHandler(prod.id)} className=' text-red-600 border border-red-600 hover:bg-red-600 hover:text-white rounded-lg p-1 mt-3 px-2  mr-3'>Delete</button>
        </div>
    </div>
    </> : <Loading />
  )
}

export default Details