import React from "react";
import user from "../../assets/user.png";
import packagee from "../../assets/package.png";
import rocket from "../../assets/rocket.png";

function GetStart() {
  return (
    <div>
      <div className="w-11/12 my-40 mx-auto">
        <div>
          <h1 className="text-5xl font-bold text-center">
            Get Started in 3 Steps
          </h1>
          <p className="text-center my-4">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>

        <div className="flex justify-between max-sm:flex-col max-sm:gap-5">
          <div className="card w-96 bg-base-100 p-5 card-md border-2 border-gray-200">
            <div className="flex justify-end">
              <div className="flex justify-center bg-blue-900 w-10 h-10 rounded-full items-center">
                <span className="font-semibold text-white">01</span>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="w-20 h-20 rounded-full p-5 bg-gray-200 ">
                <img src={user} alt="" />
              </div>
            </div>

            <div className="card-body">
              <h2 className="text-2xl font-bold text-center">Create Account</h2>
              <p className="text-center">
                Sign up for free in seconds. No credit card required to get
                started.
              </p>
            </div>
          </div>

          <div className="card w-96 bg-base-100 p-5 card-md border-2 border-gray-200">
            <div className="flex justify-end">
              <div className="flex justify-center bg-blue-900 w-10 h-10 rounded-full items-center">
                <span className="font-semibold text-white">02</span>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="w-20 h-20 rounded-full p-5 bg-gray-200 ">
                <img src={packagee} alt="" />
              </div>
            </div>

            <div className="card-body">
              <h2 className="text-2xl font-bold text-center">Choose Products</h2>
              <p className="text-center">
               Browse our catalog and select the tools that fit your needs.
              </p>
            </div>
          </div>

          <div className="card w-96 bg-base-100 p-5 card-md border-2 border-gray-200">
            <div className="flex justify-end">
              <div className="flex justify-center bg-blue-900 w-10 h-10 rounded-full items-center">
                <span className="font-semibold text-white">03</span>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="w-20 h-20 rounded-full p-5 bg-gray-200 ">
                <img src={rocket} alt="" />
              </div>
            </div>

            <div className="card-body">
              <h2 className="text-2xl font-bold text-center">Start Creating</h2>
              <p className="text-center">
               Download and start using your premium tools immediately.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetStart;
