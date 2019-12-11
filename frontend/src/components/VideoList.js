import React, {useContext} from 'react';
import Video from "./Video";
import {videocontext} from "../context/VideoContext";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    root: {
        marginTop: '1em',
    },
},);

export default function VideoList() {
    const classes = useStyles();
    const {videos, isLoading} = useContext(videocontext);
    return (
        !isLoading ?
            <div className={classes.root}>
                {videos.map(video => {
                    return (<Video video={video} key={video.id}/>)
                })}
            </div>
            : <div/>
    );
}