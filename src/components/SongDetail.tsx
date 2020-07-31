import React from 'react'
import {connect} from 'react-redux';

interface Props {
  song: { title: string, duration: string}
}

const SongDetail: React.FC<Props> = ({song}) => {
  if (!song) {
    return <div>select a song</div>;
  }
  
  return (
    <div>
      <h3>Details for:</h3>
        <p>Title: {song.title}</p>
        <p>Duration: {song.duration}</p>
    </div>
  )
};

const mapStateToProps = (state: any) => {
    return { song: state.selectedSong };
}

export default connect(mapStateToProps)(SongDetail)