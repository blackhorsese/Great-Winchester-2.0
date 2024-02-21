// import React from 'react'
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";

// function Blog() {
//     const settings = {
//         dots: true,
//         infinite: true,
//         autoplay: true,
//         autoplaySpeed: 2000,
//         slidesToScroll: 1,
//         pauseOnHover: false,

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
//     <div className='mx-0 px-5 items-center md:pt-10'>
//       <div data-aos="zoom-in-up" data-aos-delay="300" className='items-center justify-center mx-auto overflow-hidden text-[#000]'>
//         <Slider {...settings} className='flex grid-cols-5 mx-auto items-center gap-x-5 text-[#000]'>
//           <div className='md:w-80 justify-center mx-auto text-center'>
//             <h1 className='text-[200px] font-serif'>
//                 Build Wealth with
//             </h1>
//           </div>
//           <div className='md:w-80 justify-center mx-auto text-center'>
//             <h1 className='text-[200px] font-serif'>
//               Great Winchester
//             </h1>
//           </div>
//         </Slider>
//       </div>
//     </div>
//     </>
//   )
// }

// export default Blog;
// App.js

import React from 'react';

function App() {
  return (
    <div id='' className="text-white md:py-32 mt-5 pb-10 md:mt-20 items-center md:bg-[#AB905C]">
      <div className='md:flex md:grid-cols-2 justify-between mx-auto max-w-screen-xl'>
        <div className='block md:hidden lg:hidden max-w-2xl px-4 pt-5'>
          <img className='mx-auto' src='./build.jpg' alt='logo'/>
        </div>
        <div className='justify-center md:px-10 px-5 mx-auto pt-5'>
          <p className='tracking-wide font-semibold md:text-[#fff] text-[#d8bb6c] uppercase text-xs'>
            Build Wealth with
          </p>
          <p className='text-[#fff] md:text-5xl text-3xl pt-5'>
            Great Winchester
          </p>
          <p className='md:text-xl text-sm md:pt-8 pt-5 tracking-wide md:max-w-xl md:text-[#fff] text-[#e0e0e0]'>
            Begin your journey today with our captivating digital artwork that encapsulates the very essence of your voyage into the realm of cybersecurity, 
            intricately intertwined with the worlds of IT consulting and software development. This unique masterpiece is a visual narrative, a roadmap, and an inspiration 
            all rolled into one, providing a vivid representation of the path you'll tread as you embark on the quest to master cybersecurity and understand its profound 
            connection with IT consulting and software development, EV Charging Infrastructure.
          </p>
        </div>
        <div className='hidden md:block lg:block max-w-2xl pt-16'>
          <img className='mx-auto' src='./build.jpg' alt='logo'/>
        </div>
      </div>
    </div>
  );
}

export default App;