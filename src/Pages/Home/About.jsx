import React from 'react'

export default function About() {
  return (
    <>
    <section id='about' className='mx-auto items-center justify-center overflow-hidden md:pt-10 scroll-smooth duration-500 md:mt-32 text-[#e0e0e0]'>
        <div className='mx-auto justify-center md:pt-10 md:pb-20 max-w-screen-xl md:px-10 px-5'>
            <div className='justify-center mx-auto items-center'>
                <p className='uppercase text-xs font-semibold text-[#d8bb6c]'>
                    WHAT WE Build
                </p>
                <h1 className='md:text-5xl text-3xl mx-auto md:pt-5 pt-3 text-[#fff]'>
                    Delivering for Investors
                </h1>
            </div>
            <div className='md:flex md:grid-cols-3 mx-auto pt-3 md:pt-10 md:gap-x-52 text-[#fff]'>
                <div className='lg:max-w-3xl'>
                    <p className='md:text-2xl font-semibold text-[#999]'>
                        Unmatched scale
                    </p>
                    <p className='pt-3 tracking-wide text-sm md:text-xl text-[#e0e0e0]'>
                        Great Winchester Investments is a leading business that gives solutions in space of cyber security and particularly in the fintech startup. 
                        Our mission is to create long-term value for our family & friends. Who believed in us and gives us the support which we need throughout our journey. 
                        We invest across the different assets classes from our earning through services we provide. 
                        Great Winchester will keep working around the clock to provide the best service to our clients and family & friends.
                    </p>
                </div>
                <div className='md:max-w-screen-sm pt-10 text-center'>
                    <h1 className='md:text-6xl text-4xl font-sans font-semibold text-[#fff]'>
                        $3.5M
                    </h1>
                    <p className='pt-2 font-semibold text-[#fff]'>
                        Assets Under Management
                    </p>
                    <p className='font-light text-sm tracking-wide pt-3'>
                        All figures as of June 30, 2022, unless <br/>otherwise indicated.
                    </p>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
