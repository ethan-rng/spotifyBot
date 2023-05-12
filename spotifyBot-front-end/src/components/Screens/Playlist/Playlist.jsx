import React from 'react'
import { getMasterPlaylist } from '../../../ApiCalls'
import { json } from 'react-router-dom'


const Playlist = () => {
  const PlaylistPanel = ({ jsonList }) => { 
    return (
      <a href="/playlist/#">
        <div className='
        bg-gray-200
          hover:bg-gray-100
          transition duration-500 ease-in-out
          rounded-md
          flex flex-col justify-center items-center 
          m-6 pl-8 pr-8 h-80
        '>

          <img 
            src={ jsonList.Image } 
            className='w-30 l-30 rounded'
          />

          <div className='text-center bottom-0 text-white font-bold'>
            { jsonList.Title }
          </div>

        </div>
      </a>
    )
  }

  return (
    <>
      <div className='text-secondary text-2xl pt-3 underline'>
        All Your Illegally Downloaded Playlists
      </div>

      <div className="grid grid-cols-playlist">
        { getMasterPlaylist().map((item, index) => {  
          return (
            <PlaylistPanel 
              jsonList={item} 
              key={index}
            />
          )        
        })}
      </div>
    
    </>
  )
}


export default Playlist