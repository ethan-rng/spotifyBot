import React from 'react'

const AddPlaylist = () => {
  return (
    <div className='flex flex-col'>
      <p className='header-title'>
        Insert Your Playlist Links Here:
      </p>
      <input className='pb-40 bg-primary rounded' />
      <button 
        className='m-10 py-2 px-4 bg-primary rounded '
        onClick={() => (console.log("HIII"))}
      >
        Start Your Illegal Pirating Journey Now!
      </button>


    </div>
  )
}

export default AddPlaylist