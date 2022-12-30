import React from 'react'
import Image from 'next/image'
function Video() {
    return (
        <div className='border border-black flex justify-center items-center sm:justify-start flex-col space-y-6'>
            <div className='flex flex-col text-left p-6 space-y-8'>
                <p>VIDEO TITLE</p>
                <p className='text-3xl font-bold'>Trusted and loved by the world’s best teams</p>
            </div>
            <div>
                <Image
                    src='/video.png'
                    height='430'
                    width='430'
                    alt='first'
                    className='bg-contain bg-fixed sm:w-[1000px] sm:h-[600px]  '
                />
            </div>
            <div className='border border-black px-6 py-2 text-lg sm:w-[40rem] '>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Cras eget consectetur eros. Aliquam erat volutpat.
                    Praesent pulvinar arcu non lectus dapibus, a pulvinar mauris aliquam.</p>
            </div>
        </div>
    )
}

export default Video