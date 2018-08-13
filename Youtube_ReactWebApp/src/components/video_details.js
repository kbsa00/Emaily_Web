import React from 'react'; 


const VideoDetail = (props) => {
    const video = props.video;
    if(!video){
        return <div>Loading...</div>
    }
    
    const videoID = video.id.videoId; 
    const url = `https://www.youtube.com/embed/${videoID}`; 

    return(
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-respinsive item" src={url}></iframe>
            </div>

            <div className="details">
                <div><b>TITLE: </b>{video.snippet.title}</div>
                <div><b>DESCRIPTION: </b>{video.snippet.description}</div>
            </div>
        </div>

    );

}

export default VideoDetail; 
