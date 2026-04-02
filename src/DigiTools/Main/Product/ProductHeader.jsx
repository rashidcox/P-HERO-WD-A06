import React, { useState } from "react";
import ProductCard from "./ProductCard";
import SelectCart from "./SelectCart";



function ProductHeader({ data, cart, setCart, setCartlist, cartlist }) {
  const [isSelected, setIsSelected] = useState(true);
  return (
    <div className="w-11/12 p-10 mx-auto">
      <div className="mb-10">
        <h1 className="text-5xl font-bold text-center text-gray-800">
          Premium Digital Tools
        </h1>
        <p className="text-center my-4">
          Choose from our curated collection of premium digital products
          designed to boost your productivity and creativity.
        </p>
        <div className="my-4 flex justify-center">
          <button onClick={()=> setIsSelected(!isSelected)} className={`"mr-5 cursor-pointer ${!isSelected ? "bg-[#662df7] hover:bg-[#662df7] hover:text-white px-5 py-2 rounded-full text-white" : "bg-white text-[#662df7]"}`}>
             Cart( {cart} )
          </button>
          <button onClick={()=> setIsSelected(!isSelected)} className={`"cursor-pointer ${isSelected ? "bg-[#662df7] hover:bg-[#662df7] hover:text-white px-5 py-2 rounded-full text-white" : "bg-white px-5 py-2 rounded-full  text-[#662df7]"}`}>
           Products
          </button>
        </div>
      </div>
      {isSelected ? (<div className="grid max-sm:grid-cols-1 grid-cols-3 gap-5">
        {data.map((a, index) => (
          <ProductCard key={index} data={a} cart={cart} setCart={setCart} setCartlist={setCartlist} cartlist={cartlist} />
        ))}
      </div>) : (<div className="grid grid-cols-1 gap-2">
        <SelectCart cartlist={cartlist} setCartlist={setCartlist} cart={cart} setCart={setCart} />
      </div>)
    
      }
      
    </div>
  );
}

export default ProductHeader;
