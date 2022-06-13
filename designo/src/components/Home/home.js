import React from 'react'

export default function home() {
  return (
    <div className='bg-peach flex flex-col items-center text-myWhite font-jost text-center'>
        <div className='w-4/5 flex flex-col items-center mt-20'>
            <h2 className='font-medium text-2xl'>Award-winning custom designs and digital branding solutions</h2>

            <p className='mt-4'>
                With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services.
            </p>

            <div className='w-[152px] h-14 rounded-lg bg-myWhite text-myBlack flex items-center justify-center mt-6'>
                LEARN MORE
            </div>
        </div>

        <div className='bg-peach w-full h-[800px]'>
            <div className='w-full h-full bg-phone bg-center bg-no-repeat'></div>
        </div>
    </div>
  )
}
