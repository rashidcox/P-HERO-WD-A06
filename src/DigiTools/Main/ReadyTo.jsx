import React from 'react'

function ReadyTo() {
  return (
    <div>
        <div className='w-full bg-linear-to-bl from-[#9415fa] to-[#612ff7] p-10 text-white text-center'>
            <div>
                <h1 className='text-4xl font-bold'>Ready to Transform Your Workflow?</h1>
                <p className='my-5 text-sm'>Join thousands of professionals who are already using Digitools to work smarter. Start your free trial today.</p>
                <div>
                    <button className='corsor-pointer mr-5 bg-white text-blue-900 p-2 rounded-full text-sm font-semibold'>Explore Products</button>
                    <button className='consor-pointer border border-white text-balck p-2 rounded-full text-sm font-semibold'>View Pricing</button>
                </div>
                <p className='my-5 text-sm'>14-day free trial • No credit card required • Cancel anytime</p>
            </div>
        </div>
    </div>
  )
}

export default ReadyTo