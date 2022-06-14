import React from 'react'
import {Link} from "react-router-dom"

export default function HomeProjects() {
    const data = [
        {
            id: "1",
            name: "WEB DESIGN",
            mobile: "bg-web-mobile",
            tablet: "bg-web-tablet",
            link: "/web-design"
        },

        {
            id: "2",
            name: "APP DESIGN",
            mobile: "bg-app-mobile",
            tablet: "bg-app-tablet",
            link: "/app-design"
        },

        {
            id: "3",
            name: "GRAPHIC DESIGN",
            mobile: "bg-graphic-mobile",
            tablet: "bg-graphic-tablet",
            link: "/graphic-design"
        },
    ]


    return (
    <div className='projects w-full bg-myWhite -mt-80 flex justify-center relative z-10'>
            <div className='w-4/5 flex flex-col mt-28 pb-14 md:w-11/12'>
                {
                    data.map(index => 
                        <div className={index.mobile + ' w-full h-64 bg-no-repeat bg-center bg-cover rounded-2xl relative mt-6 ' + 'md:' + index.tablet} key={index.id + index.name}>
                                <div className='absolute transform top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-myWhite font-medium md:flex md:flex-col md:items-center'>
                                    <h4 className='text-lg tracking-[1.4px] md:text-4xl md:tracking-[2px]'>{index.name}</h4>
                                    <Link to={index.link} className='text-xs  tracking-[5px] flex items-center mt-3 md:text-base'>VIEW PROJECTS <svg width="7" height="10" className='ml-2' xmlns="http://www.w3.org/2000/svg"><path d="M1 1l4 4-4 4" stroke="#E7816B" strokeWidth="2" fill="none" fillRule="evenodd"/></svg></Link>
                                </div>
                        </div>
                    )
                }
            </div>    
    </div>
  )
}
