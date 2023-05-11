import React from 'react'
import { useState } from 'react'
const SidePlayer = () => {
    const [song, setSong] = useState("");

    return (
        <div className=''>
            <img 
                src="https://i.scdn.co/image/ab67616d0000b273baf89eb11ec7c657805d2da0"
                className="bottom-0 left-0"
            >
            </img>        
        </div>
  )
}

export default SidePlayer