import React from 'react'
import { FaCircleNotch } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';

function Navbar() {
    return (
        <>


            {/* //  #1355FF; blue color
            // #061237 dark blue */}

            <div className='flex items-center justify-evenly border font-bold text-xl p-5'>
                <div className='flex  items-center space-x-3 ' >
                    <FaCircleNotch className='text-[#1355FF] ' />
                    <p className='text-[#061237] mb-1  text-2xl'>opus</p>
                </div>
                <ul className='invisible sm:visible'>
                    <li>Overview</li>
                    <li>Pages</li>
                    <li>Template</li>
                </ul>
                <div className=' border  items-center'>
                    <p className=' invisible sm:visible float-right mt-9 border-black border'>Contact Us</p>
                    <GiHamburgerMenu className='text-[#1355FF] mb-3  sm:invisible text-5xl border p-3 ' />
                </div>
            </div>
        </>
    )
}

export default Navbar