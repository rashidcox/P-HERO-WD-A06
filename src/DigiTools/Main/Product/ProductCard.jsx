import React from "react";
import { MdCheck } from "react-icons/md";
import wn from "../../../assets/products/writing-note.png";

function ProductCard() {
  return (
    <div>
      <div>
        <div className="card w-96 bg-base-100 border-2 border-gray-200">
          <div className="card-body">
            <div className="flex justify-between my-1">
              <span className="w-15 h-15 rounded-full border-1 border-gray-200 flex justify-center items-center"><img src={wn} alt="" /></span>
              <span className="badge badge-xs badge-warning">Most Popular</span>
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="text-3xl font-bold">Premium</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
                aut magnam debitis in mollitia non et distinctio explicabo
                maxime quo aliquid, voluptates pariatur quasi temporibus ab
                libero recusandae neque. In?
              </p>
              <span className="text-xl">$29/mo</span>
            </div>
            <ul className="mt-6 flex flex-col gap-2 text-xs">
              <li className="inline-flex gap-1"> <span className="text-green-700"> <MdCheck /> </span> High-resolution image feneration</li>
            </ul>
            <div className="mt-6">
              <button className="btn bg-linear-to-bl from-[#9415fa] to-[#612ff7] btn-block rounded-full text-white">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
