import React from 'react';

const SoloPlaylist = (props) => {
  return (
    <div>SoloPlaylist {props.match.params.playlistID}</div>
  )
}

export default (SoloPlaylist);