import React from 'react'
import { useState } from 'react'; 
import { close, logo, menu, home, note, addPlaylist } from '../../assets';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState('Home');
  const links = [{"image":home, "tag":"Home", "link":"/"}, {"image":note, "tag":"Playlists", "link":"/playlist"}, {"image":addPlaylist, "tag":"Add Playlist", "link":"/addPlaylist"}]
  
  const Divider = () => <hr className="mt-4 border-primary" />;

  const SidebarItem = ({tag , icon, name, active }) => {
    return(
      <>
      <a href={ name } onClick={ () => (setActiveLink(tag)) } className="hover:text-black">
        <li className='transition duration-600 hover:bg-primary hover:text-black pt-3 pb-3'>
            <img src={ icon } className="inline-block mr-4 ml-3 w-10 l-10"></img>
            <span className="inline-block align-middle text-2x1">{ tag }</span>
        </li>
      </a>
      </>
    )
  }

  return (
    <div className="bg-gray-300 fixed top-0 left-0 h-screen w-300 flex flex-col shadow-lg">
      <nav className='m-5'>
        <ul>
            <div className='flex flex-row mb-2 mt-2'>
              <li className='inline'>
                <a href='#'>
                  <img 
                    src={ logo }
                    className="inline-block mr-2 w-10 h-30"
                  />
                  <span className="inline-block align-middle">Powered By: JanKiFy.io</span>
                </a>
                <Divider />
              </li>
            </div>

            <div> 
              { links.map((link, index) => (
                <SidebarItem
                  key={ link["tag"] }
                  tag={ link["tag"] }
                  icon={ link["image"] }
                  name={ link["link"] }
                  active={ activeLink }
                />
               )) }
            </div>
          </ul>  
      </nav>
    </div>
  )
}


export default Sidebar