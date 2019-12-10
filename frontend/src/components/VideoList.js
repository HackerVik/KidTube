import React, {useContext} from 'react';
import Video from "./Video";
import {videocontext} from "../context/VideoContext";

export default function VideoList() {
    const {videos, isLoading} = useContext(videocontext);
    return (
        !isLoading ?
            <div>
                {videos.map(video => {
                    return (<Video video={video} key={video.id}/>)
                })}
            </div>
            : <div/>
    );
}