import React from "react";
import SongCard from "./SongCard";
import ArtistCard from "./ArtistCard";
import { Error, Loader, Footer } from "../../Utils";
import {
  useGetMasterArtistQuery,
  useGetMasterSongQuery,
} from "../../../redux/services/flaskCOre";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const { masterSongData, songIsLoading, songError } = useGetMasterSongQuery();
  const { masterArtistData, artistIsLoading, artistError } =
    useGetMasterArtistQuery();
  const dispatch = useDispatch();
  const { activeSong, isPlaying } = useSelector((state) => state.player);

  // Error and Loading Logic
  if (songIsLoading || artistIsLoading)
    return <Loader title="Loading songs..." />;
  if (songError || artistError) return <Error />;

  return (
    <div className="flex flex-col">
      <div className="header-title">
        Discover Your Library of Downloaded Music
      </div>
      <div>
        {masterArtistData?.map((artist, index) => (
          <ArtistCard
            key={index}
            jsonList={artist}
          />
        ))}
      </div>
      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {masterSongData?.map((song, index) => (
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
