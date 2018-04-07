import React from 'react';

export default function Player(props) {
  const {
    id,
  } =  props.selectVideo;

  return (
    <div className="embed-responsive embed-responsive-16by9">
      <iframe className="embed-responsive-item"
        src={`http://www.youtube.com/embed/${id.videoId}?autoplay=1`}
        frameBorder="0"/>
    </div>
  );
}