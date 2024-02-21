import React from 'react'

export default function About() {
  return (
    <>
        <section id='about' className='mx-auto items-center justify-center overflow-hidden pt-5 md:pt-10 scroll-smooth duration-500 md:mt-32 text-[#e0e0e0]'>
        <div className='mx-auto justify-center md:pt-20 pb-10 max-w-screen-xl md:px-10 px-5 md:text-center'>
            <div className='justify-center mx-auto items-center'>
                <p className='block md:hidden lg:hidden uppercase text-xs font-semibold text-[#999]'>
                    Cyber Security Solutions
                </p>
                <p className='uppercase font-semibold text-[#D8BB6C] pt-10 text-xs'>
                    WHAT WE DO
                </p>
                <h1 className='md:text-4xl text-2xl mx-auto md:pt-10 pt-5 md:max-w-screen-sm text-[#fff]'>
                    Empowering Cybersecurity with AI Integration
                </h1>
            </div>
            <div className='mx-auto pt-8'>
                <div className='max-w-4xl tracking-wide justify-center md:text-center mx-auto'>
                    <p className='md:pt-5 pt-3 md:text-lg text-sm'>
                        At Great Winchester, our unwavering commitment is to harness the power of AI and seamlessly integrate the latest technological advancements, including 5G and IoT, 
                        into the realm of cybersecurity. We're dedicated to providing state-of-the-art cybersecurity solutions and staying at the forefront of this ever-evolving field to ensure the 
                        utmost protection for our clients.
                        <br/> 
                        <br/>
                        Our specialization lies in fortifying the security of networks, systems, applications, and devices. We achieve this by offering a comprehensive suite of services, including 
                        in-depth threat assessments, penetration testing, and regular security reviews. Your system's safety is our paramount concern, 
                        and we leverage over 80 years of combined experience and knowledge to deliver the assistance you need.                      
                        <br/> 
                        <br/>
                        Our commitment to excellence is reflected in our top-tier cybersecurity consulting services. Over the years, we've had the privilege of collaborating with 
                        numerous established companies and organizations across the globe, enabling them to navigate the complex landscape of digital security with confidence.
                        <br/>
                    </p>
                </div>
            </div>
        </div>
            <div className='justify-center w-full mx-auto pb-20 px-5 text-[#fff]'>
                <div className='md:flex grid grid-cols-3 md:gap-x-16 mx-auto justify-center text-center'>
                    <div className='md:py-10 md:max-w-sm py-3'>
                        <img className='mx-auto md:w-16 w-12' src='./Icons/Security/icons8-artificial-intelligence-100.png' alt='logo'/>
                        <h1 className='md:pt-10 pt-5 font-semibold md:text-base text-xs'>
                            AI
                        </h1>
                    </div>
                    <div className='md:py-10 md:max-w-sm py-3'>
                        <img className='mx-auto md:w-16 w-12' src='./Icons/Security/icons8-metaverse-100.png' alt='logo'/>
                        <h1 className='md:pt-10 pt-5 font-semibold md:text-base text-xs'>
                            Emerging Technology
                        </h1>
                    </div>
                    <div className='md:py-10 md:max-w-sm py-3'>
                        <img className='mx-auto md:w-16 w-12' src='./Icons/Security/icons8-5g-100.png' alt='logo'/>
                        <h1 className='md:pt-10 pt-5 font-semibold md:text-base text-xs'>
                            Integrating 5G
                        </h1>
                    </div>
                    <div className='md:py-10 md:max-w-sm py-3'>
                        <img className='mx-auto md:w-16 w-12' src='./Icons/Security/icons8-penetration-testing-100.png' alt='logo'/>
                        <h1 className='md:pt-10 pt-5 font-semibold md:text-base text-xs'>
                            Penetration Testing
                        </h1>
                    </div>
                    <div className='md:py-10 md:max-w-sm py-3'>
                        <img className='mx-auto md:w-16 w-12' src='./Icons/Security/icons8-internet-of-things-100.png' alt='logo'/>
                        <h1 className='md:pt-10 pt-5 font-semibold md:text-base text-xs'>
                            IOT
                        </h1>
                    </div>
                    <div className='md:py-10 md:max-w-sm py-3'>
                        <img className='mx-auto md:w-16 w-12' src='./Icons/Security/icons8-application-form-100.png' alt='logo'/>
                        <h1 className='md:pt-10 pt-5 font-semibold md:text-base text-xs'>
                            Threat Intelligence
                        </h1>
                    </div>
                </div>
            </div>
            <div className='justify-center mx-auto w-full bg-[#101010] px-5'>
                <div className='text-[#aaa] max-w-screen-xl mx-auto justify-center md:py-20 py-10 text-center md:text-xl text-xs'>
                    <p>
                        In a world where cyber threats are ever-advancing, our dedication to integrating AI and cutting-edge technologies into our solutions sets us apart. 
                        Great Winchester is your trusted partner, ensuring that your digital assets remain protected, no matter how the cybersecurity landscape evolves.
                    </p>
                </div>
            </div>
    </section>
    </>
  )
}