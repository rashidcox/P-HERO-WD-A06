import React from "react";
import Logo from "../../assets/DigiTools.png";
import { FiShoppingCart } from "react-icons/fi";

function Navigation({ cart }) {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Products</a>
            </li>
            <li>
              <a>Features</a>
            </li>
            <li>
              <a>Pricing</a>
            </li>
            <li>
              <a>Testimonials</a>
            </li>
            <li>
              <a>FAQ</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">
          <img src={Logo} alt="" />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Products</a>
          </li>
          <li>
            <a>Features</a>
          </li>
          <li>
            <a>Pricing</a>
          </li>
          <li>
            <a>Testimonials</a>
          </li>
          <li>
            <a>FAQ</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end ">
        {
          cart > 0 ?
          <span className="mx-4 font-bold text-white bg bg-red-600 rounded-full w-5 h-5 flex justify-center items-center">{cart} </span>
          :
          <span className="hidden">0 </span>
        }
        <a href="#"><FiShoppingCart /> </a>
        <a className="mx-4 font-bold text-gray-600 max-sm:hidden" href="#">Login</a>
        <a className="btn bg-linear-to-bl from-[#9415fa] to-[#612ff7] rounded-full text-white max-sm:hidden">Get Started</a>
      </div>
    </div>
  );
}
export default Navigation;
