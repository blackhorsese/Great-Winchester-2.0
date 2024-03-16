import React from 'react'
import EmailForm from './Email'

export default function Updates() {
  return (
    <>
    <div className='bg-[#101010]'>
        <div className='md:max-w-screen-xl justify-center mx-auto md:py-32 md:px-10 px-5 py-20'>
            <p className='uppercase font-semibold text-[#D8BB6C] text-sm md:text-base'>
                STAY UP TO DATE
            </p>
            <div className='text-[#fff] md:flex md:grid-cols-2 justify-between mx-auto'>
                <div>
                    <h1 className='md:text-4xl text-2xl mx-auto md:pt-20 pt-5'>
                        Get our latest insights and company announcements. <br/>
                        <span className='text-sm text-[#a0a0a0]'>
                            Only subscribe if you part of friends and family network.
                        </span>
                    </h1>
                    <EmailForm/>
                </div>
                <div className='max-w-md md:py-0 py-10'>
                    <img className='mx-auto' src='./11.jpg' alt='logo'/>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
