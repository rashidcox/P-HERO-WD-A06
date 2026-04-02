import React, { useState } from "react";
import { MdCheck } from "react-icons/md";

function ProductCard({ data, setCart, cart, setCartlist, cartlist }) {
  const [buy , setBuy] = useState(false);
  const clickHandler = () => {
    setBuy(!buy);
    setCart(cart + 1);
    setCartlist([...cartlist, data]);
  };
  return (
    <div>
      <div>
        <div className="card w-96 bg-base-100 border-2 border-gray-200">
          <div className="card-body">
            <div className="flex justify-between my-1">
              <span className="w-15 h-15 rounded-full border border-gray-200 flex justify-center items-center"><img src={data.icon} alt="" /></span>
              <span className="badge badge-xs badge-warning">{data.tagType}</span>
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="text-3xl font-bold">{data.name}</h2>
              <p>
                {data.description}
              </p>
              <span className="text-xl">${data.price}/{data.period}</span>
            </div>
            <ul className="mt-6 flex flex-col gap-2 text-xs">
              {
                data.features.map((a, index) => (
                  <li className="inline-flex gap-1" key={index}> <span className="text-green-700"> <MdCheck /> </span> {a} </li>
                ))
              }
            </ul>
            <div className="mt-6">
              <button disabled={buy} onClick={() => clickHandler()} className="btn bg-linear-to-bl from-[#9415fa] to-[#612ff7] btn-block rounded-full text-white">{buy? "Purchased" : "Buy Now"}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
