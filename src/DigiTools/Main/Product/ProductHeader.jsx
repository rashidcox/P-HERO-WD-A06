import React from "react";
import ProductCard from "./ProductCard";

function ProductHeader() {
  const aa = [0, 1, 2, 3, 4, 5];
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
          <button className="mr-4 cursor-pointer bg-[#662df7] text-white px-5 py-2 rounded-full">
            Products
          </button>
          <button className="cursor-pointer hover:bg-[#662df7] hover:text-white px-5 py-2 rounded-full">
            Cart (2)
          </button>
        </div>
      </div>
      <div className="grid max-sm:grid-cols-1 grid-cols-3 gap-5">
        {aa.map((a) => (
          <ProductCard key={a} />
        ))}
      </div>
    </div>
  );
}

export default ProductHeader;
