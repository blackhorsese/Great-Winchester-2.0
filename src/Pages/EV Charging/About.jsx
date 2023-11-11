import React from 'react'

export default function About() {
  return (
    <>
        <section id='about' className='mx-auto items-center justify-center overflow-hidden pt-5 md:pt-10 scroll-smooth duration-500 md:mt-32 text-[#e0e0e0]'>
            <div className='md:flex md:grid-cols-2 mx-auto justify-between gap-x-20 max-w-screen-xl'>
                <div className='mx-auto justify-center md:pt-20 pb-10 md:px-10 px-5'>
                    <div className='justify-center mx-auto items-center'>
                        <p className='block md:hidden lg:hidden uppercase text-xs font-semibold text-[#999]'>
                            Electric Vehicle Network
                        </p>
                        <p className='uppercase font-semibold text-[#D8BB6C] pt-10 text-xs'>
                            WHAT WE DO
                        </p>
                        <h1 className='md:text-4xl text-2xl mx-auto md:pt-10 pt-3 text-[#fff]'>
                            Pioneering the Future of EV Charging Infrastructure in the UK
                        </h1>
                    </div>
                    <div className='block md:hidden lg:hidden md:py-0 pt-10'>
                        <img className='mx-auto' src='./39.jpeg' alt='logo'/>
                    </div>
                    <div className='mx-auto pt-8]'>
                        <div className='max-w-4xl justify-center mx-auto tracking-wide'>
                            <p className='md:pt-5 pt-3 md:text-lg text-sm'>
                                    Great Winchester is spearheading the electric mobility revolution with its state-of-the-art EV Charging Infrastructure venture. Recognizing the transformative potential of robust charging networks, 
                                    we are strategically placing ultra-fast charging stations in prime and strategic locations, ensuring maximum accessibility for EV users addressing the UK's EV infrastructure challenges. 
                                <br/> 
                                <br/>
                                    By partnering with global industry pioneers, we integrate cutting-edge technology that guarantees swift, durable, and reliable charging experiences. 
                                    Our stations are built to last, ensuring consistent performance and minimal downtime.
                                <br/>
                                <br/>
                                Our commitment transcends mere business objectives; it's about pioneering a sustainable, eco-friendly future. With ultra-fast charging capabilities, strategic placements, 
                                and an unwavering focus on durability and reliability, Great Winchester is poised to redefine the EV charging landscape. 
                            </p>
                        </div>
                    </div>
                </div>
                <div className='hidden md:block lg:block md:py-0 py-10 mt-40'>
                    <img className='mx-auto' src='./39.jpeg' alt='logo'/>
                </div>
            </div>

            <div className='justify-center w-full mx-auto pb-20 px-5 text-[#fff] pt-10 bg-[#101010] mt-20'>
                <div className='md:flex grid-cols-3 md:gap-x-16 mx-auto justify-center text-center'>
                    <div className='md:py-10 md:max-w-sm py-3'>
                        <img className='mx-auto md:w-20 w-16' src='./Icons/icons8-speed-100.png' alt='logo'/>
                        <h1 className='md:pt-10 pt-5 font-semibold md:text-base'>
                            Coverage
                        </h1>
                        <p className='text-[#999] md:text-base pt-2'>
                            We are building a <br className='hidden md:block lg:block'/> UK-wide network
                        </p>
                    </div>
                    <div className='md:py-10 md:max-w-sm py-3'>
                        <img className='mx-auto md:w-20 w-16' src='./Icons/icons8-invest-100.png' alt='logo'/>
                        <h1 className='md:pt-10 pt-5 font-semibold md:text-base'>
                            Speed
                        </h1>
                        <p className='text-[#999] pt-2'>
                            50kw-350kw <br className='hidden md:block lg:block'/> Charging power
                        </p>
                    </div>
                    <div className='md:py-10 md:max-w-sm py-3'>
                        <img className='mx-auto md:w-20 w-16' src='./Icons/icons8-protection-100.png' alt='logo'/>
                        <h1 className='md:pt-10 pt-5 font-semibold md:text-base'>
                            Fully Funded
                        </h1>
                        <p className='text-[#999] pt-2'>
                            No upfront CAPEX <br className='hidden md:block lg:block'/> requirements
                        </p>
                    </div>
                </div>
            </div>
    </section>
    </>
  )
}
