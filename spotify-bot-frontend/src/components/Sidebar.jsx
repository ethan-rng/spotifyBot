import React from 'react'
import { useState } from 'react'; 
import { close, logo, menu } from '../assets';

const Sidebar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-16 flex flex-col bg-white dark:bg-gray-900 shadow-lg">
      <img src={logo}></img>

      <Divider />
      
    </div>
  )
}

const Divider = () => <hr className="sidebar-hr" />;

export default Sidebar