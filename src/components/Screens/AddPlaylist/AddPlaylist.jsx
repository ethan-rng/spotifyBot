import React from 'react'

const AddPlaylist = () => {
  return (
    <div className='mt-8 flex flex-col'>
      <p className='text-secondary mb-4 text-4xl font-semibold underline'>
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