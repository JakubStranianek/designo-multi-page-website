import React from 'react'
import pass from "../../assets/home/desktop/illustration-passionate.svg"
import res from "../../assets/home/desktop/illustration-resourceful.svg"
import frie from "../../assets/home/desktop/illustration-friendly.svg"

export default function HomeDescribe() {
    const describeData = [
        {
            id: "1",
            name: "PASSIONATE",
            svg: pass,
            text: "Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions."
        },

        {
            id: "2",
            name: "RESOURCEFUL",
            svg: res,
            text: "Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs."
        },

        {
            id: "3",
            name: "FRIENDLY",
            svg: frie,
            text: " We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide."
        },
    ]
  
    return (
    <div className='w-full flex flex-col justify-center items-center mt-24'>
       <div className='w-4/5'>
            {
                describeData.map(index => 
                    <div key={index.key + index.name} className="flex flex-col items-center text-center text-myDarkGrey">
                        <img src={index.svg} alt={index.name} className="w-52"/>
                        <h3 className='mt-12 font-medium text-xl tracking-[5px]'>{index.name}</h3>
                        <p className='mt-8 text-xs font-normal leading-7'>{index.text}</p>
                    </div>
                )
            }
        </div> 

        <div className='w-4/5 h-[379px] bg-peach mt-28 rounded-2xl text-myWhite flex flex-col items-center justify-center text-center z-10'>
            <h2 className='font-medium text-[32px] leading-[36px] w-2/3'>Let’s talk about your project</h2>
            <p className='text-sm leading-6 w-5/6 mt-2'>Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow.</p>

            <div className='w-[152px] h-14 rounded-lg bg-myWhite text-myBlack flex items-center justify-center mt-6'>
                GET IN TOUCH
            </div>
        </div>
    </div>
  )
}
