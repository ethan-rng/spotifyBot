import React from 'react';
import { useGetMasterPlaylistQuery } from "../../../redux/services/flaskCOre";
import { Error, Loader, Footer } from "../../Utils"
import PlaylistCard from './PlaylistCard';
import { json } from 'react-router-dom';
import { playButton } from '../../../assets';

const Playlist = () => {
  const { data, isFetching, error } = useGetMasterPlaylistQuery();

  if (isFetching) return <Loader title="Loading playlist..." />;
  if (error) return <Error />;

  return (
    <>
      <div className='header-title'>
        All Your Illegally Downloaded Playlists
      </div>

      <div className="grid grid-cols-playlist">
        { data?.map((item, index) => {  
          return (
            <PlaylistCard 
              jsonList={item} 
              key={index}
            />
          )        
        })}
      </div>
      <Footer />
    </>
  )
}


export default Playlist