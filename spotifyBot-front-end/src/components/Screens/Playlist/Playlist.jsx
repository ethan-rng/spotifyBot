import React from 'react'
import { getMasterPlaylist } from '../../../ApiCalls'
import { json } from 'react-router-dom'
import { playButton } from '../../../assets'

const Playlist = () => {
  const PlaylistPanel = ({ jsonList }) => { 
    return (
      <a href={'/playlist/' + jsonList.ID}>
        <div className='
          bg-gray-200
          hover:bg-gray-100
          transition duration-500 ease-in-out
          rounded-md
          grid grid-cols-1 grid-rows-2 justify-center items-center 
          m-6 pl-8 pr-8 h-60
        '>

          <div className='top-0 mt-8'>
            <img 
              src={ jsonList.Image } 
              className='w-64 h-32 object-cover top-0 rounded-t-md'
              style={{objectFit: 'cover'}}
            />
          </div>
        
          <div className='m-3 relative bottom-0 text-white text-center font-bold'>   
            <a 
              href={ jsonList.Link }
              className='hover:text-secondary underline'
            >
              { jsonList.Title }
            </a>
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