import React from 'react';
import _ from 'lodash';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_details';
//cretae a new component this should produce some html


const API_KEY = "AIzaSyAF8eRLR4WrvygpV0JUGhLyGK0zm32HmHc";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
            videos: [],
            selectedVideo: null,

           };
    this.videoSearch('minions');
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
      // only works when key and variable have same name
    //  console.log(videos);
    });
  }

  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term) },300);
    return (<div>
      <SearchBar onSearchTermChange={videoSearch} />
      <VideoDetail video={this.state.selectedVideo} />
      <VideoList
        onVideoSelect={selectedVideo => this.setState({selectedVideo})}
        videos={this.state.videos} />

      </div>);
  }
}

// take this component and genrate HTML and put it on the page
ReactDOM.render(<App />, document.querySelector('.container'));
