import React from 'react'
import { useState } from 'react';
import { close, logo, menu } from '../assets';
import { navLinks } from '../constants';


const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div>
        <nav className="w-full flex py-6 justify-between items-center navbar">
            <img src={logo} alt="hoobank" className="w-[124px] h-[32px]"/>

            <ul className="list-none sm:flex hidden justify-end items-center flex-1">
                {navLinks.map((nav, index) => (
                    <li
                      key={nav.id}
                      className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}`}
                                
                    >
                        <a href={`#${nav.id}`}>
                          {nav.title}
                        </a>
                    </li>
                ))}
            </ul>

            <div className="sm:hidden flex items-center">
                  <img 
                    src={showMenu ? close: menu}
                    alt="menu"
                    className="w-[28px] h-[28px] object-contain cursor-pointer"
                    onClick={() => setShowMenu((prev) => !prev)}
                  />

                  <div>
                    
                  </div>
                  
            </div>
        </nav>
    </div>
  )
}

export default NavBar