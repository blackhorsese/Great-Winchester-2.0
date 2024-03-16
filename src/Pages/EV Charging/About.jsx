import React from 'react'

export default function About() {
  return (
    <>
        <section id='about' className='mx-auto items-center justify-center overflow-hidden pt-10 md:pt-32 scroll-smooth duration-500 md:mt-32 text-[#e0e0e0] max-w-screen-xl md:px-10 px-5'>
            <div className='md:flex md:grid-cols-2 mx-auto justify-between md:gap-x-10'>
                <div className='mx-auto justify-center'>
                    <h1 className='font-semibold block md:hidden lg:hidden xl:hidden'>
                        Ultra-Fast EV Charging Network in the UK
                    </h1>
                    <div className='justify-center mx-auto items-center md:pt-32'>
                        <p className='uppercase font-semibold text-[#D8BB6C] pt-10 text-xs'>
                            WHAT WE DO
                        </p>
                        <h1 className='md:text-4xl text-xl mx-auto md:pt-10 pt-3 text-[#fff]'>
                            Accelerating the Future of Eco-Friendly Transportation
                        </h1>
                    </div>
                    <div className='block md:hidden lg:hidden md:py-0 md:pt-10 pt-5'>
                        <img className='mx-auto' src='./Picture2.jpg' alt='logo'/>
                    </div>
                    <div className='mx-auto md:pt-8 pt-3'>
                        <div className='max-w-4xl justify-center mx-auto tracking-wide'>
                            <p className='md:text-lg text-sm text-[#999]'>
                                At Great Winchester Investments, we are at the helm of transforming the UK's approach to sustainable transportation. Our commitment to developing an extensive network of ultra-fast Electric Vehicle (EV) charging stations, featuring 400+ kW capabilities, is a testament to our dedication to environmental stewardship and innovation. We are not just participants but leaders in the movement towards a greener, more sustainable future.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='hidden md:block lg:block md:py-0 py-10 mt-40'>
                    <img className='mx-auto' src='./Picture2.jpg' alt='logo'/>
                </div>
            </div>

            <div className='md:flex md:grid-cols-2 mx-auto justify-between md:gap-x-10 md:pt-32 pt-10'>
                <div className='hidden md:block lg:block md:py-0 pt-10'>
                    <img className='mx-auto' src='./Picture3.jpg' alt='logo'/>
                </div>
                <div className='mx-auto justify-center'>
                    <div className='justify-center mx-auto items-center md:pt-10'>
                        <h1 className='md:text-4xl text-xl mx-auto md:pt-10 pt-3 text-[#fff]'>
                            Collaborative Efforts for Nationwide Impact
                        </h1>
                    </div>
                    <div className='block md:hidden lg:hidden md:py-0 md:pt-10 pt-5'>
                        <img className='mx-auto' src='./Picture3.jpg' alt='logo'/>
                    </div>
                    <div className='mx-auto md:pt-8 pt-3'>
                        <div className='max-w-4xl justify-center mx-auto tracking-wide'>
                            <p className='md:text-lg text-sm text-[#999]'>
                                Our mission extends beyond merely installing charging stations; it's about weaving the fabric of a sustainable future through strategic partnerships and collaborative efforts. We are actively working alongside major stakeholders, including local councils, private developers, and key infrastructure providers, to integrate our state-of-the-art charging solutions into the national grid. These collaborations are pivotal in our quest to make electric vehicle charging more accessible, efficient, and convenient for everyone.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='md:flex md:grid-cols-2 mx-auto justify-between md:gap-x-10 md:pt-32 pt-10 pb-10'>
                <div className='mx-auto justify-center'>
                    <div className='justify-center mx-auto items-center'>
                        <h1 className='md:text-4xl text-xl mx-auto md:pt-32 pt-3 text-[#fff]'>
                            Pioneering Change with Strategic Partnerships
                        </h1>
                    </div>
                    <div className='block md:hidden lg:hidden md:py-0 md:pt-10 pt-5'>
                        <img className='mx-auto' src='./Picture1.jpg' alt='logo'/>
                    </div>
                    <div className='mx-auto md:pt-8 pt-3'>
                        <div className='max-w-4xl justify-center mx-auto tracking-wide'>
                            <p className='md:text-lg text-sm text-[#999]'>
                                The journey to revolutionize the EV charging experience is a collective one. By engaging with local councils, we aim to ensure that our charging stations are strategically placed in areas that benefit the community and support local sustainability goals. Our discussions with private developers focus on integrating charging infrastructure into new and existing developments, making EV ownership more practical for residents. Meanwhile, our cooperation with major infrastructure providers is crucial for scaling our network rapidly and efficiently, ensuring that EV owners can enjoy seamless travel across the UK.
                            <br/>
                            <br/>
                                Our collaborative approach signifies a major leap towards achieving the nation's green energy compliance goals and underscores our commitment to promoting eco-friendly transportation solutions. Through these partnerships, Great Winchester Investments is not just setting up charging stations; we are laying the groundwork for a sustainable future, making electric vehicle ownership a viable and attractive option for all.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='hidden md:block lg:block md:py-0 py-10 mt-40'>
                    <img className='mx-auto' src='./Picture1.jpg' alt='logo'/>
                </div>
            </div>
    </section>
    </>
  )
}