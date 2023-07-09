import React from "react";
import SongCard from "./SongCard";
import { Error, Loader, Footer } from "../../Utils"
import { useGetMasterSongQuery } from "../../../redux/services/flaskCOre";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const { data, isFetching, error } = useGetMasterSongQuery();
  const dispatch = useDispatch();
  const { activeSong, isPlaying } = useSelector( (state) => state.player );
  if (isFetching) return <Loader title="Loading songs..." />;
  if (error) return <Error />;

  return (
    <div className="flex flex-col">
      <div className="header-title">
        Discover Your Library of Downloaded Music
      </div>
      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {data?.map((song, index) => (
          <SongCard 
            key={index} 
            jsonList={song} 
            isPlaying={isPlaying}
            activeSong={activeSong}
            data={data}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
