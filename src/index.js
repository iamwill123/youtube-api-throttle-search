import _ from 'lodash'; // library to help throttle the search input so that there is less lag when searching
import React, { Component } from 'react'; // renders the components
import ReactDOM from 'react-dom'; // renders the components to the DOM
import YTSearch from 'youtube-api-search'; // basically like a function

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail'

// get the API key from https://console.developers.google.com
// Our top level component (index.js) is responsible for fetching our data, term: "downwards data flow" react term, the most parent component is responsible for fetching the data and pass it downwards.
const API_KEY = 'AIzaSyCgVONFVGqog2oPgJ71Vot8bFoeeVaKv94';
// In order to search for youtube videos, we will use a package called: npm install --save youtube-api-search
// The --save saves our package to our package.json
const channelId = 'UChiZsjOYrMY6wnnq1QvjCDA';
// Refactoring process to make App into a class to hold the state of our videos, and so that data can persist throughout the app.
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],           // Use anything here, but using Videos make sense, set it to an array because we want an array or list of videos.
      selectedVideo: null   // Selected video is null so video_detail will show "Loading..." until a selected video is available.
    };

    this.videoSearch('Lendit Conference 2017')
  } // We're passing props from the App to VideoList to be passed into video_list.js

  // tie in the search input with the search results.
  videoSearch(term){
    YTSearch(
    {
      key: API_KEY,
      term: term,
      channelId: channelId
    },
      (videos) => {                // only works when key: property are the same, // <-- using es6 syntax, we condensed this.setState({ videos: videos }); to just this.setState({ videos });
        this.setState({
          videos: videos,
          selectedVideo: videos[0]    // now we are setting the first video from the list of videos we requested from
        });
      }
    );
  }

  render() {    // a new debounced version of videoSearch, you can only trigger a new search every 300ms.
    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);  // debounce, what it does is returns the videoSearch func every 300ms

    return (
      <div>
        <SearchBar onSearchTermChange={term => this.videoSearch(term)} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList                                                           // VideoDetail takes in the selectedVideo state which is the main player
          onVideoSelect={ selectedVideo => this.setState({selectedVideo}) }   // we are passing this function to manipulate another component
          videos={this.state.videos} />
      </div>                                                                  // Now VideoList is given a prop onVideoSelect to be passed along
    );
  }
}

// App is the main class, JSX is written in the return function
// const App = () => { // const says that this is the final value of the variable, it will never change.
//   return (
//     <div>
//       <SearchBar />
//     </div>
//     );
// }

// we need to make an instance of App class, that's <App /> wrap it in JSX.
ReactDOM.render(<App />, document.querySelector('.container'));






