import React from 'react'

export default function About() {
  return (
    <>
        <section id='about' className='mx-auto items-center justify-center overflow-hidden pt-5 md:pt-10 scroll-smooth duration-500 md:mt-32 text-[#e0e0e0]'>
        <div className='mx-auto justify-center md:pt-20 pb-10 max-w-screen-xl md:px-10 px-5 md:text-center'>
            <div className='justify-center mx-auto items-center'>
                <p className='block md:hidden lg:hidden uppercase text-xs font-semibold text-[#999]'>
                    Digital Art
                </p>
                <p className='uppercase font-semibold text-[#D8BB6C] pt-10 text-xs'>
                    WHAT WE DO
                </p>
                <h1 className='md:text-4xl text-2xl mx-auto md:pt-10 pt-3 md:max-w-screen-sm text-[#fff]'>
                    Unleash Your Imagination
                </h1>
            </div>
            <div className='mx-auto pt-8'>
                <div className='max-w-4xl tracking-wide justify-center md:text-center mx-auto'>
                    <p className='md:pt-5 pt-3 md:text-lg text-sm'>
                        At Great Winchester Digital Art Studio, we're at the forefront of a creative revolution. Digital art and technology have opened up an expansive realm of possibilities, transforming the way we bring imagination to life. <br/><br/>Our team of dedicated professional digital artists specializes in pushing the boundaries of creativity. Whether it's crafting breathtaking CGI, designing intricate 3D models, bringing animations to life, or exploring the world of NFTs, there are no limits to what we can achieve. We pride ourselves on taking your unique ideas and turning them into captivating, immersive experiences.
                        <br/> <br/>As digital art continually evolves, so do we. Our artists are always expanding their skill sets and honing their abilities, ensuring that every project we undertake is better than the last. We're not just creating art; we're shaping the future of creative expression.
                    </p>
                </div>
            </div>
        </div>
            <div className='justify-center w-full mx-auto pb-20 px-5 text-[#fff]'>
                <div className='md:flex grid grid-cols-3 md:gap-x-16 mx-auto justify-center text-center'>
                    <div className='md:py-10 md:max-w-sm py-3'>
                        <img className='mx-auto md:w-16 w-12' src='./Icons/icons8-3d-model-100.png' alt='logo'/>
                        <h1 className='md:pt-10 pt-5 font-semibold md:text-base text-xs'>
                            3D models
                        </h1>
                    </div>
                    <div className='md:py-10 md:max-w-sm py-3'>
                        <img className='mx-auto md:w-16 w-12' src='./Icons/icons8-animated-skeleton-100.png' alt='logo'/>
                        <h1 className='md:pt-10 pt-5 font-semibold md:text-base text-xs'>
                            Animations
                        </h1>
                    </div>
                    <div className='md:py-10 md:max-w-sm py-3'>
                        <img className='mx-auto md:w-16 w-12' src='./Icons/icons8-black-blood-100.png' alt='logo'/>
                        <h1 className='md:pt-10 pt-5 font-semibold md:text-base text-xs'>
                            Faces
                        </h1>
                    </div>
                    <div className='md:py-10 md:max-w-sm py-3'>
                        <img className='mx-auto md:w-16 w-12' src='./Icons/icons8-machines-100.png' alt='logo'/>
                        <h1 className='md:pt-10 pt-5 font-semibold md:text-base text-xs'>
                            Machines
                        </h1>
                    </div>
                    <div className='md:py-10 md:max-w-sm py-3'>
                        <img className='mx-auto md:w-16 w-12' src='./Icons/icons8-faces-100.png' alt='logo'/>
                        <h1 className='md:pt-10 pt-5 font-semibold md:text-base text-xs'>
                            Characters
                        </h1>
                    </div>
                    <div className='md:py-10 md:max-w-sm py-3'>
                        <img className='mx-auto md:w-16 w-12' src='./Icons/icons8-figures-100.png' alt='logo'/>
                        <h1 className='md:pt-10 pt-5 font-semibold md:text-base text-xs'>
                            Figures
                        </h1>
                    </div>
                </div>
            </div>
            <div className='justify-center mx-auto w-full bg-[#101010] px-5'>
                <div className='text-[#aaa] max-w-screen-xl mx-auto justify-center md:py-20 py-10 text-center md:text-lg text-xs'>
                    <p>
                        Join us on this exciting journey where innovation knows no bounds. From crafting fantastical creatures to capturing the perfect shot, we're here to make your artistic dreams a reality. 
                        At Great Winchester Digital Art Studio, we're not just embracing the digital age; we're defining it.
                    </p>
                </div>
            </div>
    </section>
    </>
  )
}
