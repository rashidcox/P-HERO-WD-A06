import React from 'react'

function RatingS() {
  return (
    <div>
      <div className="w-12/12 p-10 mx-auto bg-linear-to-bl from-[#9415fa] to-[#612ff7]">
        <div className="grid grid-cols-3 gap-5 text-white text-center">
          <div>
            <h1 className="text-6xl font-bold">50K+</h1>
            <p>Active Users</p>
          </div>
          <div>
            <h1  className="text-6xl font-bold">200+</h1>
            <p>Premium Tools</p>
          </div>
          <div>
            <h1  className="text-6xl font-bold">4.9</h1>
            <p>Rating</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RatingS