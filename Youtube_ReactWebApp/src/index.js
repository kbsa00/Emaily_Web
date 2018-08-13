import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Search_bar from './components/search_bar';
import YTsearch from 'youtube-api-search'; 
import Video_list from './components/video_list'; 
import Video_detail from './components/video_details';
import APIkey from './config/keys';

class App extends Component{

    constructor(props){
        super(props);
        this.state = {
            videos: [], 
            selectedVideo: null
        };
        

        YTsearch({key: APIkey, term: 'KSI'},
        (videos) =>{
         this.setState({
             videos: videos,
             selectedVideo: videos[0]
             }); 
        }); 
    }

    render(){
       return(
           <div>
                <Search_bar />
                <Video_detail video={this.state.selectedVideo} />
                <Video_list 
                    onVideoSelect={selectedVideo =>  this.setState({selectedVideo})         }
                    videos={this.state.videos} />
           </div>
       );
    }
}


ReactDOM.render(<App />, document.querySelector('.container')); 

