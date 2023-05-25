import React from 'react';
import { getPlaylist } from '../../../ApiCalls'
import { pauseButton, playButton, nextButton, prevButton, shuffleButton, repeatButton } from '../../../assets';
import { useState } from 'react';


const SoloPlaylist = (props) => {
  const url = window.location.href;
  const playlistId = url.substring(url.length - 22);
  const playlistData = getPlaylist(playlistId);
  const numSongs = playlistData.Songs.length;
  const [isPaused, setIsPaused] = useState(true);
  
  // Individual Song Component
  const Song = ({ songData}) => {
    return (
      <div>asdf</div>
    )
  }


  // Error Page For When Invalid Playlist ID is Given
  if (playlistId.indexOf("/") !== -1 || playlistData === 404) {
    return (
      <div className="flex flex-col h-screen items-center justify-center bg-gray-100 mt-8">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">Error 404: Page Not Found</h1>
          <p className="text-lg text-gray-700 mb-4 text-center">
            Sorry, the page you are looking for does not exist. 
          <br/>The requested playlist does not exist.
          </p>
        <button 
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => window.location.href = "/"}
        >
        Go Home
      </button>
    </div>)

  // Playlist Page
  }else{
    return (
      <div className='mt-3'>
        <div className='bg-secondary p-4 flex flex-row rounded-md'>
          <a href={ playlistData.Link }>
            <img 
              src={ playlistData.Image }
              className='w-64 h-64 object-cover top-0 rounded mr-8'
            />
          </a>

          <div className='text-white flex flex-row'>
            <div className='flex flex-col'>
              <a href={ playlistData.Link }>
                <h1 className='text-6xl semibold mt-3 mb-3 underline'>
                  { playlistData.Title }
                </h1>
              </a>

              <div className='h-18-custom green-gradient rounded'/>

              <div className='flex flex-row'>
                <button 
                  className='rounded-full bg-primary mr-4 py-4 px-4 
                  border border-gray-100 flex items-center transition duration-200 
                  hover:bg-[#0E4024]'
                  onClick= ''
                >
                  <img 
                    src={ isPaused ? pauseButton : playButton } 
                    className='w-10 h-10' />
                </button>

                <div className='flex flex-col'>
                  <div> Playlist ID: { playlistId } </div>
                  <div> Number of Tracks: { numSongs } </div>
                  <a href={ playlistData.Owner.Link } className='hover:text-primary underline'>
                    <p>
                      By: { playlistData.Owner.Name }
                    </p>
                  </a>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
    )
  }

}

export default (SoloPlaylist);