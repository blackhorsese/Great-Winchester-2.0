import React from 'react'

export default function Dashboard() {
  return (
    <>
        <div className='duration-500 min-h-screen'>
            <div className='bg-local md:h-44 h-32'>
                <img className='z-0 duration-500 w-full object-cover min-h-screen' src='./17.jpg' alt='images'/>
            </div>
            <div className='md:px-16 mx-auto justify-center overflow-hidden px-5 md:text-center'>
                <div className='text-white md:py-20 md:mt-0 md:pb-0 pb-32'>
                    <div className='md:text-center mx-auto'>
                        <span className='first md:text-6xl text-3xl font-light tracking-wider duration-500'>
                            Build with
                        </span>
                        <h1 className='second md:text-7xl font-semibold text-4xl tracking-wider duration-500 text-[#d8bb6c]'>
                            Great Winchester
                        </h1>
                    </div>
                    <div className='third md:pt-10 pt-5 md:pb-0 md:text-2xl text-lg tracking-wider max-w-screen-lg justify-center md:text-center mx-auto duration-500'>
                        <p className='font-semibold'> 
                            Our mission is to create lasting value for our family and friends who have believed in us and supported us on our journey.
                        </p>
                        <div className='md:block lg:block hidden five border-[#fff] border-l-2 mx-auto items-center relative md:h-40 h-24 md:my-12 my-5 w-0 justify-center text-center flex rounded-sm'/>
                        <a 
                            href="#about" className="fourth mt-20 hover:px-4 items-center text-[#fff] md:text-base text-xs font-semibold scroll-smooth duration-500 hover:border-[#d8bb6c] hover:text-[#d8bb6c] border-transparent border md:mx-auto relative h-10 tracking-wide uppercase md:px-4 w-full max-w-xs md:justify-center md:text-center flex rounded-sm">
                            Learn More
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}