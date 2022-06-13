import React from 'react'
import {Link} from "react-router-dom"

export default function HomeProjects() {
    const data = [
        {
            id: "1",
            name: "WEB DESIGN",
            imageClassName: "bg-web-mobile",
            link: "/web-design"
        },

        {
            id: "2",
            name: "APP DESIGN",
            imageClassName: "bg-resource-mobile",
            link: "/app-design"
        },

        {
            id: "3",
            name: "GRAPHIC DESIGN",
            imageClassName: "bg-graphic-mobile",
            link: "/graphic-design"
        },
    ]


    return (
    <div className='projects w-full bg-myWhite -mt-80 flex justify-center relative z-10'>
            <div className='w-4/5 flex flex-col mt-28 pb-14'>
                {
                    data.map(index => 
                        <div className={index.imageClassName + ' w-full h-64 bg-web-mobile bg-no-repeat bg-center bg-cover rounded-2xl relative mt-6'} key={index.id + index.name}>
                                <div className='absolute transform top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-myWhite font-medium'>
                                    <h4 className='text-lg tracking-[1.4px]'>{index.name}</h4>
                                    <Link to={index.link} className='text-xs  tracking-[5px] flex items-center mt-3'>VIEW PROJECTS <svg width="7" height="10" className='ml-2' xmlns="http://www.w3.org/2000/svg"><path d="M1 1l4 4-4 4" stroke="#E7816B" strokeWidth="2" fill="none" fillRule="evenodd"/></svg></Link>
                                </div>
                        </div>
                    )
                }
            </div>    
    </div>
  )
}
