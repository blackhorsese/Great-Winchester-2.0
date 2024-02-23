import React from 'react'

export default function About() {
  return (
    <>
    <section id='about' className='mx-auto items-center justify-center overflow-hidden scroll-smooth duration-500 text-[#e0e0e0] lg:py-20 md:py-16'>
        <div className='mx-auto justify-center max-w-screen-xl md:px-10 px-5 md:pt-10 lg:pt-0'>
            <div className='mx-auto text-[#fff] lg:grid-cols-2 lg:flex gap-x-20 items-center'>
                <div className='block lg:hidden mt-5'>
                    <img src='./build.jpg' alt='image'/>
                </div>
                <div className='lg:max-w-lg lg:pt-5 pt-10 pb-8'>
                    <h1 className='md:text-5xl text-3xl mx-auto text-[#d8bb6c]'>
                        About Us
                    </h1>
                    <p className='pt-3 tracking-wide text-sm md:text-xl text-[#e0e0e0]'>
                        Great Winchester Investments is a leading business that invests in  different assets classes mainly fintech and health tech companies. 
                        Along side with our investment we offer cyber security solutions to all our portfolio of companies. Our mission is to create long-term value for our family & friends. 
                        Who believed in us and gives us the support which we need throughout our journey. Our Minimum ticket size is $3.5 Million US Dollars. 
                        Great Winchester will keep working around the clock to provide the best advice to our family & friends.
                    </p>
                </div>
                <div className='hidden lg:block mt-10'>
                    <img src='./build.jpg' alt='image'/>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
