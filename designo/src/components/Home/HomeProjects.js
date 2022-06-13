import React from 'react'
import {Link} from "react-router-dom"

export default function HomeProjects() {
  return (
    <div className='projects w-full bg-myWhite -mt-80 flex justify-center relative z-10'>
            <div className='w-4/5 flex flex-col mt-32 pb-14'>
                <div className='w-full h-64 bg-web-mobile bg-no-repeat bg-center bg-cover rounded-2xl relative'>
                    <div className='absolute transform top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center font-jost text-myWhite font-medium'>
                        <h4 className='text-lg tracking-[1.4px]'>WEB DESIGN</h4>
                        <Link to="/web-design" className='text-xs  tracking-[5px] flex items-center'>VIEW PROJECTS <svg width="7" height="10" className='ml-2' xmlns="http://www.w3.org/2000/svg"><path d="M1 1l4 4-4 4" stroke="#E7816B" stroke-width="2" fill="none" fillRule="evenodd"/></svg></Link>
                    </div>
                </div>

                <div className='w-full h-64 bg-app-mobile bg-no-repeat bg-center bg-cover mt-6 rounded-2xl relative'>
                    <div className='absolute transform top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center font-jost text-myWhite font-medium'>
                        <h4 className='text-lg tracking-[1.4px]'>APP DESIGN</h4>
                        <Link to="/web-design" className='text-xs  tracking-[5px] flex items-center'>VIEW PROJECTS <svg width="7" height="10" className='ml-2' xmlns="http://www.w3.org/2000/svg"><path d="M1 1l4 4-4 4" stroke="#E7816B" stroke-width="2" fill="none" fillRule="evenodd"/></svg></Link>
                    </div>
                </div>

                <div className='w-full h-64 bg-graphic-mobile bg-no-repeat bg-center bg-cover mt-6 rounded-2xl relative'>
                    <div className='absolute transform top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center font-jost text-myWhite font-medium'>
                        <h4 className='text-lg tracking-[1.4px]'>GRAPHIC DESIGN</h4>
                        <Link to="/web-design" className='text-xs  tracking-[5px] flex items-center'>VIEW PROJECTS <svg width="7" height="10" className='ml-2' xmlns="http://www.w3.org/2000/svg"><path d="M1 1l4 4-4 4" stroke="#E7816B" stroke-width="2" fill="none" fillRule="evenodd"/></svg></Link>
                    </div>
                </div>
            </div>    
    </div>
  )
}
