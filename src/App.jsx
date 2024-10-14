
import Navbar from "./components/Navbar.jsx"
import Home from "./components/Home.jsx"
import { Link, Route, Routes, useLocation } from "react-router-dom"
import Details from "./components/Details.jsx"
import Create from "./components/Create.jsx";



function App() {
    
  const {search,pathname} = useLocation();
  console.log(search,pathname);
  
   
  return (
    <>
    <div className="h-screen w-screen  bg-zinc-100  flex">
      {(pathname!="/" || search.length > 0) && (<Link to="/" className="bg-green-300 px-1  rounded-lg h-7 w-20 text-center absolute left-[16%] top-[1%] ">Home</Link>) }
   
      <Routes>
         
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        
        <Route path="/details/:id" element={<Details />} />
      </Routes>

   
    
     

      
   

    </div>
    
    </>
  )
}

export default App
