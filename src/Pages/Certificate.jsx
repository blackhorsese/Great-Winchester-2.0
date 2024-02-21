import React from 'react'
import Tooltip from '@mui/material'

export default function certificate() {
  return (
    <>
    <div className='md:py-20 pt-5 bg-[#070707]'>
      <div className='max-w-screen-2xl md:px-10 px-5 justify-center mx-auto overflow-hidden'>
        <div className='mx-auto max-w-screen-md'>
          <h1 className='text-white md:text-4xl text-3xl justify-center pt-5 font-semibold text-center'>
            Our Team's Certification
          </h1>
          <div className='grid grid-cols-5 md:gap-x-5 mx-auto justify-center items-center pt-10'>
            <Tooltip title="CompTIA CASP Certificate" placement='top' className='hover:opacity-80 cursor-pointer'>
              <img src='../../Cerificate/CASP.png' alt='Image'/>
            </Tooltip>

            <Tooltip title="CompTIA CSA+ Certificate" placement='top' className='hover:opacity-80 cursor-pointer'>
              <img src='../../Cerificate/CSA+.png' alt='Image'/>
            </Tooltip>

            <Tooltip title="CompTIA Security+ Certificate" placement='top' className='hover:opacity-80 cursor-pointer'>
              <img src='../../Cerificate/Security+.png' alt='Image'/>
            </Tooltip>

            <Tooltip title="Certified Information Systems Auditor" placement='top' className='hover:opacity-80 cursor-pointer'>
              <img src='../../Cerificate/CISA.png' alt='Image'/>
            </Tooltip>

            <Tooltip title="Certified Information Security Manager" placement='top' className='hover:opacity-80 cursor-pointer'>
              <img src='../../Cerificate/CISM.png' alt='Image'/>
            </Tooltip>
          </div>

          <div className='grid grid-cols-5 md:gap-x-5 mx-auto justify-center items-center pt-3 md:pt-10 pb-20'>
          <Tooltip title="Certificate of Cloud Security Knowledge" placement='top' className='hover:opacity-80 cursor-pointer'>
            <img src='../../Cerificate/CCSK.png' alt='Image'/>
            </Tooltip>

            <Tooltip title="Computer Hacking Forensics Investigator" placement='top' className='hover:opacity-80 cursor-pointer'>
              <img src='../../Cerificate/CHIFI.png' alt='Image'/>
            </Tooltip>

            <Tooltip title="Risk Management Professional" placement='top' className='hover:opacity-80 cursor-pointer'>
              <img src='../../Cerificate/RMP.png' alt='Image'/>
            </Tooltip>

            <Tooltip title="Certified Information Systems Security Professional" placement='top' className='hover:opacity-80 cursor-pointer'>
              <img src='../../Cerificate/CISSP.png' alt='Image'/>
            </Tooltip>

            <Tooltip title="Cisco Certified Network Associate" placement='top' className='hover:opacity-80 cursor-pointer'>
              <img src='../../Cerificate/CISCO.png' alt='Image'/>
            </Tooltip>

          </div>
        </div>
      </div>
    </div>
    </>
  )
}