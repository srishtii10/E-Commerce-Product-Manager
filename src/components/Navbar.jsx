import React, { useContext } from 'react'
import { Link } from "react-router-dom"
import { ProductContext } from '../utils/Context';

const Navbar = () => {
    const [products] = useContext(ProductContext);

    let distinct_category = products && products.reduce((acc,currVal)=>[...acc,currVal.category],[]);
    distinct_category = [...new Set(distinct_category)]
    

    const color =()=>{
        return `rgba(${(Math.random()*255).toFixed()},${(Math.random()*255).toFixed()},${(Math.random()*255).toFixed()},0.6)`
    }
    
    
    
  return (
   <>
    <nav className="w-[15%] h-full bg-zinc-200 flex flex-col pt-5 items-center">
      <Link  className="p-3 border border-blue-400 text-blue-400 rounded-lg" to="/create">Add New Product</Link>
      <hr className="w-[80%] my-3 border-b  border-gray-400" />
      <h1 className="w-[80%] text-xl mb-3">Category</h1>
      <div className="w-[80%] ">
        {distinct_category.map((cat,index)=>{
            return (<Link to={`/?category=${cat}`}  key={index} className=" hover:bg-zinc-400 hover:text-white hover:font-bold p-2 flex items-center"> <span style={{backgroundColor:color()}}className="w-[13px] h-[13px]  mr-2 rounded-full"></span> {cat}</Link>)
        })}
        
      </div>
     </nav>
   </>
  )
}

export default Navbar