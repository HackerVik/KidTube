import React from 'react';
import ReactPlayer from "react-player";

function ActualVideo() {
    return (
        <div className="actualVideo">
            <ReactPlayer url='https://www.youtube.com/watch?v=t99ULJjCsaM'
                         controls='true'
                         width='auto'
            />
        </div>
    )
        ;
}

export default ActualVideo;