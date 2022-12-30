import React from 'react'
import { AiOutlineArrowUp } from 'react-icons/ai';
import { RiRocketFill } from 'react-icons/ri';
function More() {
    return (
        <div className='border border-black mt-28'>
            <div className='border border-black p-2 space-y-10 mt-8'>
                <p className='font-bold text-5xl'>
                    Make your site better with Opus
                </p>
                <p className='text-lg'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem est enim ab atque. Repudiandae quae perferendis necessitatibus accusantium dicta temporibus eaque? Consequatur maxime delectus earum non suscipit nostrum libero possimus.</p>
                <button className=' px-8 py-2 text-white bg-[#1355FF]'>Learn More</button>
            </div>
            <div className='border border-black px-8 mt-24 text-4xl py-2 space-y-20'>
                <div className=' items-center  '>
                    <AiOutlineArrowUp className='text-[#1355FF] text-4xl' />
                    <p >Build or Customize a Website in Minutes</p>
                </div>
                <div className=' items-center'>
                    <RiRocketFill className='text-[#1355FF] text-4xl' />
                    <p >Our UI was made for creativity</p>
                </div>
            </div>
        </div>
    )
}

export default More