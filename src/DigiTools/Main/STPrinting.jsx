import React from "react";
import { MdCheck } from "react-icons/md";

function STPrinting() {
  return (
    <div>
      <div>
        <div className="w-11/12 py-10 mx-auto">
          <div className="my-20">
            <h1 className="text-4xl font-bold text-center text-gray-800">
              Simple, Transparent Pricing
            </h1>
            <p className="text-center my-4">
              Choose the plan that fits your needs. Upgrade or downgrade
              anytime.
            </p>
          </div>

          <div className="flex justify-center  gap-1 max-sm:flex-col max-sm:items-center">

            <div className="card w-96 bg-gray-200 border-2 border-gray-200">
              <div className="card-body">
                <div className="flex flex-col gap-4">
                  <h2 className="text-3xl font-bold">Starter</h2>
                  <p>
                    Perfect for getting started
                  </p>
                  <span className="text-xl">$0/Month</span>
                </div>
                <ul className="mt-6 flex flex-col gap-2 text-xs">
                  <li className="inline-flex gap-1">
                    {" "}
                    <span className="text-green-700">
                      {" "}
                      <MdCheck />{" "}
                    </span>{" "}
                    Access to 10 free tools
                  </li>
                  <li className="inline-flex gap-1">
                    {" "}
                    <span className="text-green-700">
                      {" "}
                      <MdCheck />{" "}
                    </span>{" "}
                    Basic templates
                  </li>
                  <li className="inline-flex gap-1">
                    {" "}
                    <span className="text-green-700">
                      {" "}
                      <MdCheck />{" "}
                    </span>{" "}
                    Community support
                  </li>
                  <li className="inline-flex gap-1">
                    {" "}
                    <span className="text-green-700">
                      {" "}
                      <MdCheck />{" "}
                    </span>{" "}
                    1 project per month
                  </li>
                </ul>
                <div className="mt-6">
                  <button className="btn bg-linear-to-bl from-[#9415fa] to-[#612ff7] btn-block rounded-full text-white">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>

            <div className="card w-96 bg-linear-to-bl from-[#9415fa] to-[#612ff7] border-2 border-gray-200 text-white">
              <div className="card-body">
                <div className="relative mb-5">
                  <p className=" absolute  right-0 top-0 left-0 mx-auto mb-20 badge badge-xm badge-warning">Most Popular</p>
                </div>
                <div className="flex flex-col gap-4">
                  <h2 className="text-3xl font-bold">Pro</h2>
                  <p>
                    Perfect for getting started
                  </p>
                  <span className="text-xl">$29/Month</span>
                </div>
                <ul className="mt-6 flex flex-col gap-2 text-xs">
                  <li className="inline-flex gap-1">
                    {" "}
                    <span className="text-white">
                      {" "}
                      <MdCheck />{" "}
                    </span>{" "}
                    Access to 10 free tools
                  </li>
                  <li className="inline-flex gap-1">
                    {" "}
                    <span className="text-white">
                      {" "}
                      <MdCheck />{" "}
                    </span>{" "}
                    Basic templates
                  </li>
                  <li className="inline-flex gap-1">
                    {" "}
                    <span className="text-white">
                      {" "}
                      <MdCheck />{" "}
                    </span>{" "}
                    Community support
                  </li>
                  <li className="inline-flex gap-1">
                    {" "}
                    <span className="texgreen-700t-">
                      {" "}
                      <MdCheck />{" "}
                    </span>{" "}
                    1 project per month
                  </li>
                </ul>
                <div className="mt-6">
                  <button className="btn bg-white btn-block rounded-full text-blue-700">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>

            <div className="card w-96 bg-gray-200 border-2 border-gray-200">
              <div className="card-body">
                    <div className="flex flex-col gap-4">
                  <h2 className="text-3xl font-bold">Enterprise</h2>
                  <p>
                    Perfect for getting started
                  </p>
                  <span className="text-xl">$99/Month</span>
                </div>
                <ul className="mt-6 flex flex-col gap-2 text-xs">
                  <li className="inline-flex gap-1">
                    {" "}
                    <span className="text-green-700">
                      {" "}
                      <MdCheck />{" "}
                    </span>{" "}
                    Access to 10 free tools
                  </li>
                  <li className="inline-flex gap-1">
                    {" "}
                    <span className="text-green-700">
                      {" "}
                      <MdCheck />{" "}
                    </span>{" "}
                    Basic templates
                  </li>
                  <li className="inline-flex gap-1">
                    {" "}
                    <span className="text-green-700">
                      {" "}
                      <MdCheck />{" "}
                    </span>{" "}
                    Community support
                  </li>
                  <li className="inline-flex gap-1">
                    {" "}
                    <span className="text-green-700">
                      {" "}
                      <MdCheck />{" "}
                    </span>{" "}
                    1 project per month
                  </li>
                </ul>
                <div className="mt-6">
                  <button className="btn bg-linear-to-bl from-[#9415fa] to-[#612ff7] btn-block rounded-full text-white">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default STPrinting;
