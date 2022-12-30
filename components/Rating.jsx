import React from 'react'

function Rating() {
    return (
        <div className='border border-black justify-center text-center'>
            <div>
                <div className='border border-black p-2 font-bold text-3xl  items-center'>
                    <p className='mt-8'>Trusted and loved by the world’s best teams</p>
                </div>
                <div className='space-y-20 sm:space-y-0 border border-black py-12 px-12  sm:space-x-40 font-sans text-2xl font-extralight  flex flex-col
                     sm:flex-row justify-center items-center'>
                    <p className='border border-black'>wetransfer</p>
                    <p>stamps</p>
                    <p>manter.</p>
                    <p>sugarcane</p>
                </div>
            </div>
            <div className='border border-black space-y-20 p-12 flex flex-col
                     sm:flex-row justify-center items-center sm:space-x-40 '>
                <div className='border border-black mt-20 space-y-2'>
                    <p className='font-bold text-4xl'>99.95%</p>
                    <p className='font-medium'>Accuracy rate</p>
                    <p className='font-light'>in  fulfilling  orders</p>
                </div>
                <div className='border border-black mt-20 space-y-2'>
                    <p className='font-bold text-4xl'>5,000+</p>
                    <p className='font-medium'>Ecommerce businesses</p>
                    <p className='font-light'>partner with Opus</p>
                </div>
                <div className='border border-black mt-20 space-y-2'>
                    <p className='font-bold text-4xl'>99.96%</p>
                    <p className='font-medium'>Of orders ship on time</p>
                    <p className='font-light'>within SLA</p>
                </div>
                <div className='border border-black mt-20 space-y-2'>
                    <p className='font-bold text-4xl'>#1</p>
                    <p className='font-medium'>Best Fulfillment Technology</p>
                    <p className='font-light'>by AdWeek’s Retail Awards</p>
                </div>
            </div>
        </div>
    )
}

export default Rating