
import React, { useContext, useEffect, useState } from 'react'
import Navbar from './Navbar'
import { Link, useLocation } from 'react-router-dom'
import { ProductContext } from '../utils/Context.jsx'
import Loading from './Loading.jsx'
import Pagination from './Pagination.jsx'

const Home = () => {
  const [products] = useContext(ProductContext);
  const { search } = useLocation();
  const category = decodeURIComponent(search.split('=')[1]);
  
  const [filteredProducts, setFilteredProducts] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  useEffect(() => {
    if (!filteredProducts || category === "undefined") setFilteredProducts(products);
    if (category !== "undefined") {
      setFilteredProducts(products.filter((p) => p.category === category));
    }
  }, [category, products]);

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredProducts ? filteredProducts.slice(indexOfFirstItem, indexOfLastItem) : [];

  return products ? (
    <>
      <Navbar />
      <div className="homepage flex flex-wrap gap-x-10 gap-y-10 h-full w-[85%] px-6 pt-10 overflow-x-hidden overflow-y-auto">
        {currentItems && currentItems.map((p, i) => (
          <Link to={`/details/${p.id}`} key={p.id} className="card overflow-auto h-72 w-60 bg-white border-gray-400 rounded-lg p-3 shadow-lg">
            <div className="hover:scale-110 h-[70%] w-full mb-2 rounded-lg overflow-hidden">
              <img className="w-full h-full object-contain" src={p.image} alt="" />
            </div>
            <h1 className='text-sm leading-4 mb-2 '>{p.title}</h1>
            <h1 className='font-bold'>${p.price}</h1>
          </Link>
        ))}
        <div className='basis-full'>
          <Pagination 
            currentPage={currentPage} 
            setCurrentPage={setCurrentPage} 
            totalItems={filteredProducts ? filteredProducts.length : 0} 
            itemsPerPage={itemsPerPage} 
          />
        </div>
      </div>
    </>
  ) : <Loading />
}

export default Home
