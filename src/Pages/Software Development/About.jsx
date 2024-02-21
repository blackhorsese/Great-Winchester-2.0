import React from 'react'

export default function About() {
  return (
    <>
        <section id='about' className='mx-auto items-center justify-center overflow-hidden pt-5 md:pt-10 scroll-smooth duration-500 md:mt-32 text-[#e0e0e0]'>
        <div className='mx-auto justify-center md:pt-20 pb-10 max-w-screen-xl md:px-10 px-5 md:text-center'>
            <div className='justify-center mx-auto items-center'>
                <p className='block md:hidden lg:hidden uppercase text-xs font-semibold text-[#999]'>
                    Software Development
                </p>
                <p className='uppercase font-semibold text-[#D8BB6C] pt-10 text-xs'>
                    WHAT WE DO
                </p>
                <h1 className='md:text-4xl text-2xl mx-auto md:pt-10 pt-5 md:max-w-screen-sm text-[#fff]'>
                    Empowering Business Success through Expert Software Development
                </h1>
            </div>
            <div className='mx-auto pt-8'>
                <div className='max-w-4xl justify-center md:text-center mx-auto tracking-wide'>
                    <p className='md:pt-5 pt-3 md:text-lg text-sm'>
                        In today’s digital age, software development has become a crucial part of running a successful business. 
                        Whether you need a web application, a mobile app, or a customized software solution, our team of expert developers can help transform your business and take it to the next level.
                        Our team has extensive experience in developing custom software solutions tailored to meet the specific needs and goals of our clients. 
                        <br/>
                        <br/>
                        We use the latest tools and technologies to build robust, scalable, and secure software solutions that streamline business processes, increase efficiency, and enhance productivity.                 
                        We understand that each business is unique, and that’s why we take a collaborative approach to software development. Our team works closely with our clients 
                        to understand their business requirements and goals, and we develop software solutions that align with their objectives and deliver measurable results.
                        <br/>
                        <br/>
                        In addition to software development, we also offer ongoing support and maintenance to ensure that our clients’ software solutions are running smoothly and 
                        efficiently. Our team is dedicated to providing exceptional customer service and support, and we strive to build long-term relationships with our clients based on trust, transparency, and mutual respect.
                    </p>
                </div>
            </div>
        </div>
            <div className='justify-center w-full mx-auto pb-20 text-[#fff]'>
                <div className='md:flex grid grid-cols-3 md:gap-x-10 mx-auto justify-center text-center'>
                    <div className='md:py-10 md:max-w-sm py-3'>
                        <img className='mx-auto md:w-16 w-12' src='./Icons/icons8-javascript-100 (1).png' alt='logo'/>
                        <h1 className='md:pt-10 pt-5 font-semibold md:text-base text-xs'>
                            JavaScript
                        </h1>
                    </div>
                    <div className='md:py-10 md:max-w-sm py-3'>
                        <img className='mx-auto md:w-16 w-12' src='./Icons/icons8-python-100.png' alt='logo'/>
                        <h1 className='md:pt-10 pt-5 font-semibold md:text-base text-xs'>
                            Python
                        </h1>
                    </div>
                    <div className='md:py-10 md:max-w-sm py-3'>
                        <img className='mx-auto md:w-16 w-12' src='./Icons/icons8-java-100.png' alt='logo'/>
                        <h1 className='md:pt-10 pt-5 font-semibold md:text-base text-xs'>
                            Java
                        </h1>
                    </div>
                    <div className='md:py-10 md:max-w-sm py-3'>
                        <img className='mx-auto md:w-16 w-12' src='./Icons/icons8-c-100.png' alt='logo'/>
                        <h1 className='md:pt-10 pt-5 font-semibold md:text-base text-xs'>
                            C++
                        </h1>
                    </div>
                    <div className='md:py-10 md:max-w-sm py-3'>
                        <img className='mx-auto md:w-16 w-12' src='./Icons/icons8-c-100 (1).png' alt='logo'/>
                        <h1 className='md:pt-10 pt-5 font-semibold md:text-base text-xs'>
                            C#
                        </h1>
                    </div>
                    <div className='md:py-10 md:max-w-sm py-3'>
                        <img className='mx-auto md:w-16 w-12' src='./Icons/icons8-css-100.png' alt='logo'/>
                        <h1 className='md:pt-10 pt-5 font-semibold md:text-base text-xs'>
                            CSS
                        </h1>
                    </div>
                    <div className='md:py-10 md:max-w-sm py-3'>
                        <img className='mx-auto md:w-16 w-12' src='./Icons/icons8-html-100.png' alt='logo'/>
                        <h1 className='md:pt-10 pt-5 font-semibold md:text-base text-xs'>
                            HTML
                        </h1>
                    </div>
                    <div className='md:py-10 md:max-w-sm py-3'>
                        <img className='mx-auto md:w-16 w-12' src='./Icons/icons8-typescript-100.png' alt='logo'/>
                        <h1 className='md:pt-10 pt-5 font-semibold md:text-base text-xs'>
                            TypeScript
                        </h1>
                    </div>
                    <div className='md:py-10 md:max-w-sm py-3'>
                        <img className='mx-auto md:w-16 w-12' src='./Icons/icons8-sql-100.png' alt='logo'/>
                        <h1 className='md:pt-10 pt-5 font-semibold md:text-base text-xs'>
                            SQL
                        </h1>
                    </div>
                </div>
            </div>
            <div className='justify-center mx-auto w-full bg-[#101010] px-5'>
                <div className='text-[#aaa] max-w-screen-xl mx-auto justify-center md:py-20 py-10 text-center md:text-xl text-sm'>
                    <p>
                        Don’t let outdated software hold your business back. Contact us today to learn more about how our custom software development services can transform your business and help you stay ahead 
                        of the competition.
                    </p>
                </div>
            </div>
    </section>
    </>
  )
}