import React from 'react'
import { useState } from 'react'
const SidePlayer = () => {
    const [song, setSong] = useState("");

    return (
        <div className='flex flex-col bottom-0 left-0 z-30 fixed'>
            <img 
                src="https://i.scdn.co/image/ab67616d0000b273baf89eb11ec7c657805d2da0"
                className="w-300-custom l-300-custom"
            >
            </img>        
                
            <p className='m-10 text-center text-white'>
                Rick Ashely <br/>
                - Never Gonna Give You Up
            </p>
        </div>
  )
}

export default SidePlayer