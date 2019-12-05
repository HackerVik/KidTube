import React, {useContext} from 'react';
import Video from "./Video";
import {videocontext} from "../context/VideoContext";
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
},
}));

function VideoList() {
    const classes = useStyles();
    const {videos} = useContext(videocontext);
    return (
        <div className={classes.root}>
            {videos.map(video => {
                return (<Video video={video} key={video.id}/>)
            })}
        </div>
    );
}

export default VideoList;