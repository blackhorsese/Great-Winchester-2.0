import React from 'react'

export default function Art() {
  return (
    <>
        <div className='duration-500 bg-black'>
            <div className='bg-local md:h-24 px-5 pt-20 md:pt-0 md:px-0'>
                <img className='z-0 duration-500 w-full object-cover md:h-[44rem]' src='./evcar1.png' alt='image'/>
            </div>
            <div className='hidden md:block lg:block md:px-16 mx-auto justify-center overflow-hidden px-5 text-center'>
                <div className='text-white md:py-20 mt-36 md:mt-16 md:pb-0'>
                    <div className='text-center mx-auto max-w-screen-lg'>
                        <h1 className='second md:text-5xl text-4xl tracking-wider duration-500'>
                            The Driving Forces Shaping the Future of EV Charging Infrastructure
                        </h1>
                        <p className='second font-sans pt-3 tracking-widest text-[#d8bb6c]'>
                            Great Winchester
                        </p>
                    </div>
                    <div className='third md:pt-5 pt-5 pb-5 md:pb-0 md:text-2xl text-lg tracking-wider max-w-screen-lg justify-center text-center mx-auto duration-500'>
                        <div className='five border-[#fff] border-l-2 mx-auto items-center relative md:h-32 h-16 md:my-3 my-5 w-0 justify-center text-center flex rounded-sm'/>
                        <a 
                            href="#about" className="fourth text-[#fff] md:text-base text-xs font-semibold scroll-smooth duration-500 hover:border-[#d8bb6c] hover:text-[#d8bb6c] border-transparent border mx-auto items-center relative h-10 tracking-wider uppercase px-4 w-full max-w-xs justify-center text-center flex rounded-sm">
                            Learn More
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}