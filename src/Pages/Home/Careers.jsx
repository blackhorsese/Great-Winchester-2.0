import React from 'react';

function App() {
  return (
    <div id='careers' className="text-white md:py-32 pt-20 md:mt-20 items-center">
      <div className='md:flex md:grid-cols-2 justify-between mx-auto max-w-screen-xl items-center'>
        <div className='justify-center md:px-10 px-5 mx-auto'>
          <p className='tracking-wide font-semibold text-[#d8bb6c] text-xs'>
            MAKE THINGS POSSIBLE
          </p>
          <p className='text-[#fff] md:text-5xl text-3xl md:pt-5 pt-3'>
            Careers at Great Winchester
          </p>
          <p className='md:text-xl text-sm md:pt-8 pt-5 tracking-wide max-w-xl text-[#e0e0e0]'>
            Begin your career with the Great Winchester Investments 2024 Summer Internship, where your skills can make an impact across our business.
          </p>
        </div>
        <div className='max-w-2xl pt-16 shadow-xl px-5 md:px-0'>
          <img className='mx-auto' src='./Careers.png' alt='logo'/>
        </div>

      </div>
    </div>
  );
}

export default App;