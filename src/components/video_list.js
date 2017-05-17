import React from 'react';
import VideoListItem from './video_list_item';

// We're using a functional component here since we're just displaying data, not storing state.
// we can just use props, if we made this into a class component we would need this.props
const VideoList = (props) => {      // we're sending the array of videos through props
  // const videos = props.videos;   // <-- props is this array of videos
  const videoItems = props.videos.map((video) => {  // we want to map over each video in the array of videos
    return (
      <VideoListItem
        onVideoSelect={ props.onVideoSelect }               // We took this from App and we're passing it to VideoListItem
        key={ video.etag }
        video={ video } />
    );                                                      // we want to return a list of videos, react has it's way of rendering a list
  });                                                       // we need a key to make each video unique, it's like imagine shuffling a deck of cards
                                                            // and you want to change one card from the deck, but you dont know which one so you'll re-create the entire deck again, but with a unique key that would just target that specific id.
                                                            // video.etag is specific to youtube, can be found in the networks tab. {props.videos.length} for number of videos
  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  );
};

export default VideoList;