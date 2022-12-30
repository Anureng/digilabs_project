import React from 'react'
import { BiRightArrowAlt } from 'react-icons/bi';
import { BsMouse } from 'react-icons/bs';
import { first } from '../public/first.png'
import Image from 'next/image'
function Header() {
    return (
        <div>
            <div className='w-16 h-16 bg-[#1355FF]'></div>
            <div className=' h-[859px] md:h-[578.5px] bg-[#061237]'>
                <div className=' text-white border-black border flex   sm:flex-row flex-col justify-center items-center space-x-4 space-y-8'>
                    <div className=' max-w-sm border flex flex-col item-center justify-center'>
                        <p className=' mt-20 text-5xl sm:text-left text-center'>Built for enterprise businesses.</p>
                        <p className='text-center text-lg px-2 sm:text-left'>Opus includes everything you need to build a beautiful website for your business. Built to perform and look good doing so.</p>
                        <p className='flex flex-row space-x-8 bg-[#1355FF] p-4'>Contact Us </p>
                        <BiRightArrowAlt className='text-xl' />
                        <button>Explore Pages</button>
                    </div>
                    <Image
                        src='/first.png'
                        height='300'
                        width='300'
                        alt='first'
                        className='bg-contain bg-fixed px-8'
                    />
                </div>
            </div>
            <div className='flex items-center border border-black h-24 text-lg '>
                <BsMouse />
                <p>Scroll for more</p>
            </div>
        </div>
    )
}

export default Header