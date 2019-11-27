import React, {useContext} from 'react';
import ImgMediaCard from "./ImgMediaCard";
import {videocontext} from "../context/VideoContext";

function VideoList() {
    const {videos} = useContext(videocontext);
    return (
        <div className="videocontainer">
            {videos.map(video => {
                return (<ImgMediaCard video={video} key={video.id}/>)
            })}
        </div>
    );
}

export default VideoList;