import React from 'react';

//functional component
const VideoDetail = ({video}) => {
  if(!video) {                            // so we need this in order to allow the parent to catch up to the child's request
    return <div>Loading...</div>
  }

  const videoId = video.id.videoId;
  const url =`https://www.youtube.com/embed/${videoId}`;            // const url ='https://www.youtube.com/embed/' + videoId;
  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url}></iframe>
      </div>
      <div className="details">
        <div>{Date(video.snippet.publishedAt)}</div>
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  );
};

export default VideoDetail;

// So what we are doing in here is to embed youtube's iframe into our app. We need to create our own url link based on the video id.