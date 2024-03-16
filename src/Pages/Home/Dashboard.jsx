import { useState, useEffect } from 'react';

export default function Dashboard() {
    const [scrollPosition, setScrollPosition] = useState (0);

    useEffect(() => {
      const handleScroll = () => {
        setScrollPosition(window.scrollY);
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
  
    }, []);
  
    const zoomFactor = 115 + scrollPosition / 10;
  
  return (
    <>
        <div className='herosection duration-500 min-h-screen hidden md:block xl:block lg:block' style={{ backgroundSize: `${zoomFactor}%` }}>
            <div className='md:px-10 mx-auto justify-center px-5'>
                <div className='text-white md:top-1/4 md:absolute left-0 right-0 justify-center pt-48 md:pt-0 min-h-screen'>
                    <div className='md:text-center mx-auto'>
                        <h1 className='second md:text-7xl md:font-semibold text-4xl tracking-wider duration-500 text-[#fff]'>
                            Great Winchester
                        </h1>
                    </div>
                    <div className='third md:pt-10 pt-5 md:pb-0 md:text-2xl text-base tracking-wider max-w-screen-lg justify-center md:text-center mx-auto duration-500'>
                        <p className='md:font-semibold'> 
                            Our mission is to create lasting value for our family and friends who have believed in us and supported us on our journey.
                        </p>
                        <div className='md:block lg:block hidden five border-[#fff] border-l-2 mx-auto items-center relative md:h-40 h-24 md:my-12 my-5 w-0 justify-center text-center flex rounded-sm'/>
                        <a 
                            href="#about" className="fourth md:mt-20 mt-16 hover:px-4 items-center text-[#fff] md:text-base text-xs font-semibold scroll-smooth duration-500 border-[#fff] border md:mx-auto relative h-10 tracking-wide w-40 uppercase md:px-4 justify-center text-center flex rounded-sm">
                            Learn More
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <div className='herosection duration-500 min-h-screen w-full block md:hidden lg:hidden xl:hidden'>
            <div className='md:px-10 mx-auto justify-center px-5'>
                <div className='text-white md:top-1/4 md:absolute left-0 right-0 justify-center pt-48 md:pt-0'>
                    <div className='md:text-center mx-auto'>
                        <h1 className='second md:text-7xl md:font-semibold text-4xl tracking-wider duration-500 text-[#fff]'>
                            Great Winchester
                        </h1>
                    </div>
                    <div className='third md:pt-10 pt-5 md:pb-0 md:text-2xl text-base tracking-wider max-w-screen-lg justify-center md:text-center mx-auto duration-500'>
                        <p className='md:font-semibold'> 
                            Our mission is to create lasting value for our family and friends who have believed in us and supported us on our journey.
                        </p>
                        <div className='md:block lg:block hidden five border-[#fff] border-l-2 mx-auto items-center relative md:h-40 h-24 md:my-12 my-5 w-0 justify-center text-center flex rounded-sm'/>
                        <a 
                            href="#about" className="fourth md:mt-20 mt-16 hover:px-4 items-center text-[#fff] md:text-base text-xs font-semibold scroll-smooth duration-500 border-[#fff] border md:mx-auto relative h-10 tracking-wide w-40 uppercase md:px-4 justify-center text-center flex rounded-sm">
                            Learn More
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}