import React from 'react'

export default function Home(props) {
  return (
    <div className='bg-peach flex flex-col items-center text-myWhite text-center'>
        {
            props.button ?
            <div className='h-screen w-full absolute bg-black opacity-60 z-10'></div> :
            ""
        }
        <div className='w-4/5 flex flex-col items-center mt-20'>
        <svg xmlns="http://www.w3.org/2000/svg" width="640" height="640" className='absolute left-0 w-fit'><defs><linearGradient id="a" x1="0%" x2="100%" y1="50%" y2="50%"><stop offset="0%" stopColor="#5D0202" stopOpacity="0"/><stop offset="100%" stopColor="#5D0202" stopOpacity=".498"/></linearGradient></defs><circle cx="320" cy="320" r="320" fill="url(#a)" fillRule="evenodd" opacity=".203" transform="matrix(-1 0 0 1 640 0)"/></svg>
            <h2 className='font-medium text-2xl'>Award-winning custom designs and digital branding solutions</h2>

            <p className='mt-4'>
                With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services.
            </p>

            <div className='w-[152px] h-14 rounded-lg bg-myWhite text-myBlack flex items-center justify-center mt-6'>
                LEARN MORE
            </div>
        </div>

        <div className='bg-peach w-full h-[800px]'>
            <div className='w-full h-full bg-phone bg-center bg-no-repeat relative z-1'></div>
        </div>
    </div>
  )
}
