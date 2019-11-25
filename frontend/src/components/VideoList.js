import React, {useContext} from 'react';
import ImgMediaCard from "./ImgMediaCard";
import {videocontext} from "../context/VideoContext";

function VideoList() {
    const {videos} = useContext(videocontext);
    console.log(videos);
    return (
        <div>
            {videos.map(video => {
                return (<ImgMediaCard video={video}/>)
            })}
        </div>
    );
}

export default VideoList;