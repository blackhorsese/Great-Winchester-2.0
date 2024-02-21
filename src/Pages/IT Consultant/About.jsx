import React from 'react'

export default function About() {
  return (
    <>
        <section id='about' className='mx-auto items-center justify-center overflow-hidden pt-5 md:pt-10 scroll-smooth duration-500 md:mt-32 text-[#e0e0e0]'>
        <div className='mx-auto justify-center md:pt-20 max-w-screen-xl md:px-10 px-5 md:text-center'>
            <div className='justify-center mx-auto items-center'>
                <p className='block md:hidden lg:hidden uppercase text-xs font-semibold text-[#999]'>
                    IT consultants
                </p>
                <p className='uppercase font-semibold text-[#D8BB6C] pt-10 text-xs'>
                    WHAT WE DO
                </p>
                <h1 className='md:text-4xl text-2xl mx-auto md:pt-10 pt-3 md:max-w-screen-sm text-[#fff]'>
                    Comprehensive IT Expertise to Drive Your Business Forward
                </h1>
            </div>
            <div className='mx-auto pt-8'>
                <div className='max-w-4xl tracking-wide justify-center md:text-center mx-auto'>
                    <p className='md:pt-5 pt-3 md:text-lg text-sm'>
                        As technology continues to advance at a rapid pace, businesses need to keep up in order to stay competitive. That’s where our expert IT consulting services come in. 
                        Our team of experienced IT consultants can provide your business with the guidance and support it needs to navigate the ever-changing landscape of technology.
                        <br/> <br/>
                        We understand that every business is unique, which is why we offer customized IT consulting services that are tailored to meet the specific needs of your organization. 
                        Whether you need help with IT strategy development, network design and implementation, cloud computing, cybersecurity, or any other aspect of IT, we have the expertise to help.
                        <br/> <br/>
                        Our IT consultants stay up-to-date on the latest technology trends and best practices, and can help you make informed decisions that will drive your business 
                        forward. With our help, you can optimize your IT infrastructure, increase efficiency and productivity, and reduce costs.
                    </p>
                </div>
            </div>
        </div>
            <div className='justify-center w-full mx-auto pb-20 text-[#fff]'>
                <div className='md:flex grid grid-cols-3 md:gap-x-10 mx-auto justify-center text-center'>
                    <div className='md:py-10 md:max-w-sm py-3'>
                        <img className='mx-auto md:w-16 w-12' src='./Icons/icons8-augmented-reality-100.png' alt='logo'/>
                        <h1 className='md:pt-10 pt-5 font-semibold md:text-base text-xs'>
                            Augmented Reality
                        </h1>
                    </div>
                    <div className='md:py-10 md:max-w-sm py-3'>
                        <img className='mx-auto md:w-16 w-12' src='./Icons/Security/icons8-artificial-intelligence-100.png' alt='logo'/>
                        <h1 className='md:pt-10 pt-5 font-semibold md:text-base text-xs'>
                            Articial Intelligence
                        </h1>
                    </div>
                    <div className='md:py-10 md:max-w-sm py-3'>
                        <img className='mx-auto md:w-16 w-12' src='./Icons/Security/icons8-internet-of-things-100.png' alt='logo'/>
                        <h1 className='md:pt-10 pt-5 font-semibold md:text-base text-xs'>
                            Internet Of Things
                        </h1>
                    </div>
                    <div className='md:py-10 md:max-w-sm py-3'>
                        <img className='mx-auto md:w-16 w-12' src='./Icons/icons8-cloud-computing-100.png' alt='logo'/>
                        <h1 className='md:pt-10 pt-5 font-semibold md:text-base text-xs'>
                            Cloud Computing
                        </h1>
                    </div>
                    <div className='md:py-10 md:max-w-sm py-3'>
                        <img className='mx-auto md:w-16 w-12' src='./Icons/icons8-fintech-100.png' alt='logo'/>
                        <h1 className='md:pt-10 pt-5 font-semibold md:text-base text-xs'>
                            FinTech
                        </h1>
                    </div>
                </div>
            </div>
            <div className='justify-center mx-auto w-full bg-[#101010] px-5'>
                <div className='text-[#aaa] max-w-screen-xl mx-auto justify-center md:py-20 py-10 text-center md:text-xl text-sm'>
                    <p>
                        Don’t let technology hold your business back. Contact us today to learn how our IT consulting services can help you achieve your goals and stay ahead of the competition.
                    </p>
                </div>
            </div>
    </section>
    </>
  )
}