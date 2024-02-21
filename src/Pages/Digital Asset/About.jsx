import React from 'react'

export default function About() {
  return (
    <>
        <section id='about' className='mx-auto items-center justify-center overflow-hidden pt-5 md:pt-10 scroll-smooth duration-500 md:mt-32 text-[#e0e0e0]'>
        <div className='mx-auto justify-center md:pt-20 pb-10 max-w-screen-xl md:px-10 px-5 md:text-center'>
            <div className='justify-center mx-auto items-center'>
                <p className='block md:hidden lg:hidden uppercase text-xs font-semibold text-[#999]'>
                    Digital Asset Consultation
                </p>
                <p className='uppercase text-xs font-semibold text-[#D8BB6C] pt-10'>
                    WHAT WE DO
                </p>
                <h1 className='md:text-4xl text-2xl mx-auto md:pt-10 pt-3 md:max-w-screen-sm text-[#fff]'>
                    Unlocking the Full Potential of Digital Assets
                </h1>
            </div>
            <div className='mx-auto pt-8'>
                <div className='md:max-w-4xl justify-center md:text-center tracking-wide mx-auto'>
                    <p className='md:pt-5 pt-3 md:text-lg text-sm'>
                        At Great Winchester, we take immense pride in our distinguished team, a harmonious blend of industry-leading experts in their respective fields, 
                        encompassing computer science, astute business strategy, financial acumen, marketing prowess, and legal finesse. 
                        These brilliant minds converge with a shared focus: unparalleled mastery of the intricate world of digital assets.
                        <br/> 
                        <br/>
                        Digital assets, a concept once confined to audio, video, images, and documents, have undergone a remarkable metamorphosis in recent years. 
                        Today, the term "digital assets" is an umbrella that spans a vast and diverse array of unique binary data, each possessing inherent value 
                        that transcends traditional comprehension. This evolution reflects the ever-expanding significance of digital assets across an array of industries and sectors.
                        <br/> 
                        <br/>
                        Our commitment is resolute - we stand ready to provide unwavering business support for all your digital assets, ushering in an era of unparalleled growth and security. 
                        It is our mission to empower you to realize the full potential of your investments in the digital realm, 
                        all while ensuring that they remain safeguarded with the utmost diligence and security.
                        <br/>
                    </p>
                </div>
            </div>
        </div>
            <div className='justify-center w-full mx-auto pb-20 px-5 text-[#fff]'>
                <div className='md:flex grid grid-cols-3 md:gap-x-16 mx-auto justify-center text-center'>
                    <div className='md:py-10 md:max-w-sm py-3'>
                        <img className='mx-auto md:w-16 w-12' src='./Icons/icons8-website-100.png' alt='logo'/>
                        <h1 className='md:pt-10 pt-5 font-semibold md:text-base text-xs'>
                            Website Domain
                        </h1>
                    </div>
                    <div className='md:py-10 md:max-w-sm py-3'>
                        <img className='mx-auto md:w-16 w-12' src='./Icons/icons8-presentation-100.png' alt='logo'/>
                        <h1 className='md:pt-10 pt-5 font-semibold md:text-base text-xs'>
                            Presentation
                        </h1>
                    </div>
                    <div className='md:py-10 md:max-w-sm py-3'>
                        <img className='mx-auto md:w-16 w-12' src='./Icons/icons8-image-100.png' alt='logo'/>
                        <h1 className='md:pt-10 pt-5 font-semibold md:text-base text-xs'>
                            image
                        </h1>
                    </div>
                    <div className='md:py-10 md:max-w-sm py-3'>
                        <img className='mx-auto md:w-16 w-12' src='./Icons/icons8-video-100.png' alt='logo'/>
                        <h1 className='md:pt-10 pt-5 font-semibold md:text-base text-xs'>
                            Video
                        </h1>
                    </div>
                    <div className='md:py-10 md:max-w-sm py-3'>
                        <img className='mx-auto md:w-16 w-12' src='./Icons/icons8-documents-100.png' alt='logo'/>
                        <h1 className='md:pt-10 pt-5 font-semibold md:text-base text-xs'>
                            Documents
                        </h1>
                    </div>
                    <div className='md:py-10 md:max-w-sm py-3'>
                        <img className='mx-auto md:w-16 w-12' src='./Icons/icons8-commodity-100.png' alt='logo'/>
                        <h1 className='md:pt-10 pt-5 font-semibold md:text-base text-xs'>
                            Business
                        </h1>
                    </div>
                    <div className='md:py-10 md:max-w-sm py-3'>
                        <img className='mx-auto md:w-16 w-12' src='./Icons/icons8-ledger-100.png' alt='logo'/>
                        <h1 className='md:pt-10 pt-5 font-semibold md:text-base text-xs'>
                            Ledger Security
                        </h1>
                    </div>
                    <div className='md:py-10 md:max-w-sm py-3'>
                        <img className='mx-auto md:w-16 w-12' src='./Icons/icons8-binary-data-100.png' alt='logo'/>
                        <h1 className='md:pt-10 pt-5 font-semibold md:text-base text-xs'>
                            Binary Data
                        </h1>
                    </div>
                    <div className='md:py-10 md:max-w-sm py-3'>
                        <img className='mx-auto md:w-16 w-12' src='./Icons/icons8-combo-chart-100.png' alt='logo'/>
                        <h1 className='md:pt-10 pt-5 font-semibold md:text-base text-xs'>
                            Market Data
                        </h1>
                    </div>
                </div>
            </div>
            <div className='justify-center mx-auto w-full bg-[#101010] px-5'>
                <div className='text-[#aaa] max-w-screen-xl mx-auto justify-center md:py-20 py-10 text-center md:text-lg text-sm'>
                    <p>
                        At Great Winchester, your digital assets are not just assets; they are your future, your security, and your competitive advantage. Join us on a journey of transformation, 
                        where every bit and byte is maximized, and every asset is fortified for lasting success in the digital age.
                    </p>
                </div>
            </div>
    </section>
    </>
  )
}