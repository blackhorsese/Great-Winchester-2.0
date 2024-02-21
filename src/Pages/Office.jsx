import React, { useState } from 'react';

const Office = () => {
    const [showText, setShowText] = useState(false);

    return (
        <div id='office' className='py-2 pb-20 text-white justify-center mx-auto max-w-screen-xl md:px-10 px-5'>
            <div className='mx-auto justify-center'>
                <div className='items-center py-10 pt-20 justify-center mx-auto text-center'>
                    <p className='text-[#fff] md:text-4xl text-3xl md:pt-5 pt-3'>
                        Our Office
                    </p>
                    <p className='text-sm md:text-xl md:pt-8 pt-5 tracking-wide mx-auto text-center justify-center max-w-3xl text-[#e0e0e0]'>
                        Great Winchester operates in multiple countries and our professional advice is only available for our friends and family.
                    </p>
                </div>
                <div className='lg:grid lg:grid-cols-3 mx-auto justify-center md:gap-5 md:pt-10'>
                    <div className='py-6 px-6 bg-[#1F1F1F] hover:bg-[#2b2b2b] md:mt-0 mt-5'
                    >
                      <img className={`transition-transform transform hover:scale-105 duration-300 cursor-pointer`} src='./Icons/new-york.jpg' alt='logo'/>
                        <div 
                            className='duration-300 text-center mx-auto'
                        >
                            <h1 className='text-lg lg:text-xl font-semibold justify-center md:py-5 py-3 text-[#D8BB6C]'>
                                United Kingdom London
                            </h1>
                            <p
                             className='md:text-base text-sm tracking-wide text-[#e0e0e0] duration-500'>
                                33 Queen St, London EC4R 1AP
                            </p>
                        </div>
                    </div>
                    <div className='py-6 px-6 bg-[#1F1F1F] hover:bg-[#2b2b2b] md:mt-0 mt-5'
                    >
                      <img className={`transition-transform transform hover:scale-105 duration-300 cursor-pointer`} src='./Icons/london.jpg' alt='logo'/>
                        <div 
                            className='duration-300 text-center mx-auto'
                        >
                            <h1 className='text-lg lg:text-xl font-semibold justify-center md:py-5 py-3 text-[#D8BB6C]'>
                                USA New York
                            </h1>
                            <p
                             className='md:text-base text-sm tracking-wide text-[#e0e0e0] duration-500'>
                                99 Wall Street #5976 New York, NY 10005
                            </p>
                        </div>
                    </div>
                    <div className='py-6 px-6 bg-[#1F1F1F] hover:bg-[#2b2b2b] md:mt-0 mt-5'
                    >
                      <img className={`transition-transform transform hover:scale-105 duration-300 cursor-pointer`} src='./Icons/4545.jpg' alt='logo'/>
                        <div 
                            className='duration-300 text-center mx-auto'
                        >
                            <h1 className='text-lg lg:text-xl font-semibold justify-center md:py-5 py-3 text-[#D8BB6C]'>
                                European Union
                            </h1>
                            <p
                             className='md:text-base text-sm tracking-wide text-[#e0e0e0] duration-500'>
                                Harju Maakond, Tallinn, Kesklinna Linnaosa, Veskiposti tn 2-1002, 10138
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Office;