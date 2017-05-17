import React from 'react';

// functional component
const VideoList = ({video, onVideoSelect}) => {    // same as using the below, just es6 syntatic sugar
                                    // console.log(video); check to see whats going on, we want to focus on the snippet object
  const imageThumbUrl = video.snippet.thumbnails.default.url;  // no magic just from youtube

  return(            // whenever I am clicked, pass the video that I was passed.
    <li onClick={ ()=> onVideoSelect(video) } className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imageThumbUrl} />
        </div>

        <div className="media-body">
          <div className="media-heading">
            {video.snippet.title}
          </div>
        </div>
      </div>
    </li>
  );
};

export default VideoList;

//we are going to use es6
// const VideoList = (props) => {    // to access videos from parent component VideoList
//   const onVideoSelect = props.onVideoSelect;
//   const video = props.video;
//   return <li>Video</li>;
// };

// export default VideoList;