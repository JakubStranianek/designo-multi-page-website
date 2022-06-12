import React, { useState } from 'react'
import Logo from "../../assets/shared/desktop/logo-dark.png"
import {Link} from "react-router-dom"

export default function Header() {
const [toggleButton, setToggleButton] = useState(false);

const handleButton = () => {
    setToggleButton(!toggleButton);
}


  return (
    <div className='w-full flex flex-col justify-center'>
        {/* logo with hamburger */}
        
        <div className='w-5/6 flex justify-between mt-9 ml-auto mr-auto pb-8'>
            <img src={Logo} alt="logo" className='w-52'/>
            {
                toggleButton ? <svg width="20" height="20" className='cursor-pointer' onClick={handleButton} xmlns="http://www.w3.org/2000/svg"><path d="M17.071.1L19.9 2.93l-7.071 7.07 7.071 7.072-2.828 2.828L10 12.828l-7.071 7.071L.1 17.071 7.17 10 .102 2.929 2.929.1l7.07 7.07 7.072-7.07z" fill="#1D1C1E" fillRule="evenodd"/></svg>
                : <svg width="24" height="20" className='cursor-pointer' onClick={handleButton} xmlns="http://www.w3.org/2000/svg"><g fill="#1D1C1E" fillRule="evenodd"><path d="M0 0h24v4H0zM0 8h24v4H0zM0 16h24v4H0z"/></g></svg> 
            }       
        </div>

        {/* Navbar section */}

        <nav className={toggleButton ? "bg-myBlack flex items-center h-60 text-myWhite uppercase text-2xl font-jost font-normal" : "hidden"}>
            <div className='navBarText w-5/6 mr-auto ml-auto flex flex-col justify-between h-36'>
                <Link to={"/our-company"}>our company</Link>
                <Link to={"/our-locations"}>locations</Link>
                <Link to={"/our-contact"}>contact</Link>
            </div>
        </nav>
    </div>
  )
}