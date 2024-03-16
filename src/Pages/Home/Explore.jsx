// import React from 'react'
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";

// function Blog() {
//     const settings = {
//         dots: true,
//         infinite: true,
//         autoplay: true,
//         autoplaySpeed: 3000,
//         slidesToShow: 5,
//         slidesToScroll: 1,
//         pauseOnHover: true,

//         cssEase: "linear",
//         responsive: [
//           {
//             breakpoint: 1024,
//             settings: {
//               slidesToShow: 3,
//               slidesToScroll: 3,
//               infinite: true,
//               dots: true
//             }
//           },
//           {
//             breakpoint: 600,
//             settings: {
//               slidesToShow: 2,
//               slidesToScroll: 2,
//               initialSlide: 2
//             }
//           },
//           {
//             breakpoint: 480,
//             settings: {
//               slidesToShow: 1,
//               slidesToScroll: 1,
//               dots: true,
//             }
//           }
//         ]
//       };
//   return (
//     <>
//     <div className='mx-0 px-5 items-center md:py-28'>
//       <div data-aos="zoom-in-up" data-aos-delay="300" className='max-w-screen-xl text-center items-center mx-auto overflow-hidden'>
//         <h1 className='uppercase font-semibold text-[#d8bb6c]'>Our Expertise</h1>
//         <p className='md:text-5xl text-2xl mx-auto font-serif md:pt-20 pt-10 md:max-w-screen-sm'>Creating the Future of Digital Art, Safeguarding Your Imagination</p>
//         <Slider dots {...settings} className='flex mx-auto items-center pt-10 md:pt-20'>
//           <div className='py-10 max-w-sm shadow-md bg-white px-5 border-[#d8bb6c] border-2'>
//             <img className='md:w-20 w-16' src='./Icons/desktop.png' alt='logo'/>
//             <h1 className='md:text-2xl text-xl md:pt-10 pt-5 font-serif'>
//                 Digital Asset Consultions
//             </h1>
//             <p className='pt-5 font-light h-44 text-justify px-2'>
//               We are prefect balanced mix of computer scientists business strategistsfinancial analysts marketing and legal professional on the team with onething in common: digital assets expertise.
//             </p>
//             <a href='/digital-asset' className='underline py-3'>
//               Learn more
//             </a>
//           </div>
//           <div className='py-10 max-w-sm shadow-md bg-white px-5 border-[#d8bb6c] border-2'>
//             <img className='md:w-20 w-16' src='./Icons/NFT.png' alt='logo'/>
//             <h1 className='md:text-2xl text-xl md:pt-10 pt-5 font-serif'>
//               Digital Art Studio
//             </h1>
//             <p className='pt-5 font-light h-44 text-justify px-2'>
//               Great Winchester Digital Art studio have the Master – level Skills , process and mindset of professional digital artists to bring your imagination into reality.
//             </p>
//             <a href='/digital-art' className='underline py-3'>
//               Learn more
//             </a>
//           </div>
//           <div className='py-10 max-w-sm shadow-md bg-white px-5 border-[#d8bb6c] border-2'>
//             <img className='md:w-20 w-16' src='./Icons/coding.png' alt='logo'/>
//             <h1 className='md:text-2xl text-xl md:pt-10 pt-5 font-serif'>
//               Software Development
//             </h1>
//             <p className='pt-5 font-light h-44 text-justify px-2'>
//               Our Innovative Illustrators, Creative designers and highly skilled IT professionals are ready to transform your vision in reality and to facilitate your operations, while you are focused on your business.
//             </p>
//             <a href='/software-development' className='underline py-3'>
//               Learn more
//             </a>
//           </div>
//           <div className='py-10 max-w-sm shadow-md bg-white px-5 border-[#d8bb6c] border-2'>
//             <img className='md:w-20 w-16' src='./Icons/integration.png' alt='logo'/>
//             <h1 className='md:text-2xl text-xl md:pt-10 pt-5 font-serif'>
//               Cyber Security Solutions
//             </h1>
//             <p className='pt-5 font-light h-44 text-justify px-2'>
//               We are equipped with an advance , updated cyber security solutions knowledge to server our customers properly. We specialize in Securing networks, systems applications and devices and,
//             </p>
//             <a href='/cybersecurity' className='underline py-3 hover:text-[#D8BB6C]'>
//               Learn more
//             </a>
//           </div>
//           <div className='py-10 max-w-sm shadow-md bg-white px-5 border-[#d8bb6c] border-2'>
//             <img className='md:w-24 w-24' src='./Icons/support.png' alt='logo'/>
//             <h1 className='md:text-2xl text-xl md:pt-6 font-serif'>
//               IT Consultant
//             </h1>
//             <p className='pt-5 font-light h-44 text-justify px-2'>
//               Our collective insight and best practices guarantee real business results every time you partner with us, ensuring a level of certainty that no other service provider can match.
//             </p>
//             <a href='/IT-consultant' className='underline py-3'>
//               Learn more
//             </a>
//           </div>
//         </Slider>
//       </div>
//     </div>
//     </>
//   )
// }

// export default Blog;


import React from 'react';

const Explore = () => {
    return (
        <div id='mission' className='py-2 pb-20 text-white justify-center mx-auto max-w-screen-xl md:px-10 px-5'>
            <div className='mx-auto justify-center'>
                <div className='items-center py-10 pt-20 max-w-screen-lg'>
                  <p className='text-xs uppercase tracking-wide font-semibold text-[#d8bb6c]'>
                    Explore More
                  </p>
                </div>
                <div className='lg:grid lg:grid-cols-3 mx-auto justify-center md:gap-5 md:pt-10'>
                    <div className={`transition-transform transform hover:scale-105 duration-300 cursor-pointer md:mt-0 py-6 px-6 bg-[#1F1F1F] hover:bg-[#2b2b2b]`}>
                      <img className='md:w-16 w-14' src='./Icons/digital-assets.png' alt='logo'/>
                      <h1 className='text-lg lg:text-xl font-semibold justify-center md:py-5 py-3'>
                        Digital Asset Consultions
                      </h1>
                      <p className='md:text-base text-sm tracking-wide text-[#e0e0e0]'>
                        We are prefect balanced mix of computer scientists business strategistsfinancial analysts marketing and legal professional on the team with onething in common: digital assets expertise.
                      </p>
                      <br/>
                      <a href='/digital-asset' className=' hover:underline text-[#999] hover:text-[#D8BB6C] hover:font-semibold'>
                        Learn more
                      </a>
                    </div>
                    <div className={`transition-transform transform hover:scale-105 duration-300 cursor-pointer md:mt-0 mt-5 py-6 px-6 bg-[#1F1F1F] hover:bg-[#2b2b2b]`}>
                      <img className='md:w-16 w-14' src='./Icons/art.png' alt='logo'/>
                        <h1 className=' text-lg lg:text-xl font-semibold justify-center md:py-5 py-3'>
                          Digital Art Studio
                        </h1>
                        <p className='md:text-base text-sm tracking-wide text-[#e0e0e0]'>
                          Great Winchester Digital Art studio have the Master – level Skills , process and mindset of professional digital artists to bring your imagination into reality.
                        </p>
                        <br className='hidden md:block lg:block'/>
                        <br/>
                        <a href='/digital-art' className='hover:underline text-[#999] hover:text-[#D8BB6C] hover:font-semibold'>
                          Learn more
                        </a>
                    </div>
                    <div className={`transition-transform transform hover:scale-105 duration-300 cursor-pointer md:mt-0 mt-5 py-6 px-6 bg-[#1F1F1F] hover:bg-[#2b2b2b]`}>
                      <img className='md:w-14 w-14' src='./Icons/develop1.png' alt='logo'/>
                        <h1 className=' text-lg lg:text-xl font-semibold justify-center md:py-5 py-3'>
                          Software Development
                        </h1>
                        <p className='md:text-base text-sm tracking-wide text-[#e0e0e0]'>
                          Our Innovative Illustrators, Creative designers and highly skilled IT professionals are ready to transform your vision in reality and to facilitate your operations, while you are focused on your business.
                        </p>
                        <br/>
                        <a href='/software-development' className='hover:underline text-[#999] hover:text-[#D8BB6C] hover:font-semibold'>
                          Learn more
                        </a>
                    </div>
                    <div className={`transition-transform transform hover:scale-105 duration-300 cursor-pointer md:mt-0 mt-5 py-6 px-6 bg-[#1F1F1F] hover:bg-[#2b2b2b]`}>
                      <img className='md:w-16 w-14' src='./Icons/icons8-cyber-security-100.png' alt='logo'/>
                        <h1 className=' text-lg lg:text-xl font-semibold justify-center md:py-5 py-3'>
                          Cyber Security Solutions
                        </h1>
                        <p className='md:text-base text-sm tracking-wide text-[#e0e0e0]'>
                          We are equipped with an advance , updated cyber security solutions knowledge to server our customers properly. We specialize in Securing networks, systems applications and devices and,
                        </p>
                        <br/>
                        <a href='/cybersecurity' className='hover:underline text-[#999] hover:text-[#D8BB6C] hover:font-semibold'>
                          Learn more
                        </a>
                    </div>
                    <div className={`transition-transform transform hover:scale-105 duration-300 cursor-pointer md:mt-0 mt-5 py-6 px-6 bg-[#1F1F1F] hover:bg-[#2b2b2b]`}>
                      <img className='md:w-16 w-14' src='./Icons/icons8-support-100.png' alt='logo'/>
                        <h1 className=' text-lg lg:text-xl font-semibold justify-center md:py-5 py-3'>
                          IT Consultant
                        </h1>
                        <p className='md:text-base text-sm tracking-wide text-[#e0e0e0]'>
                          Our collective insight and best practices guarantee real business results every time you partner with us, ensuring a level of certainty that no other service provider can match.
                        </p>
                        <br className='hidden md:block lg:block'/>
                        <br/>
                        <a href='/IT-consultant' className='hover:underline text-[#999] hover:text-[#D8BB6C] hover:font-semibold'>
                          Learn more
                        </a>
                    </div>
                    <div className={`transition-transform transform hover:scale-105 duration-300 cursor-pointer md:mt-0 mt-5 py-6 px-6 bg-[#1F1F1F] hover:bg-[#2b2b2b]`}>
                        <img className='md:w-16 w-14' src='./Icons/icons8-electric-vehicle-100.png' alt='logo'/>
                        <h1 className=' text-lg lg:text-xl font-semibold justify-center md:py-5 py-3'>
                            Electric Vehicle Network
                        </h1>
                        <p className='md:text-base text-sm tracking-wide text-[#e0e0e0]'>
                          Great Winchester is spearheading the electric mobility revolution with its state-of-the-art EV Charging Infrastructure venture. Recognizing the transformative potential of robust charging networks,
                        </p>
                        <br/>
                        <a href='/ev-network' className='hover:underline text-[#999] hover:text-[#D8BB6C] hover:font-semibold'>
                          Learn more
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Explore;