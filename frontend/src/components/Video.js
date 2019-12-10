import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import ReactPlayer from "react-player";
import VideoRating from "./VideoRating";

const useStyles = makeStyles({
    root: {
        align: 'middle',
        display: 'inline-block',
        width: '20em',
    },
    card: {
        maxWidth: 'auto',
        margin: '.5em',
        border: '1px solid lightgrey',
        borderRadius: '1em',
        boxShadow: '.05em .05em .05em lightgrey',
        '&:hover': {
            boxShadow: '.5em .5em .5em lightgrey',
            background: 'lightblue',
        },
    },
    video: {
        width: '17em',
        height: '23em',
        padding: '1em',
    },
    title: {
        color: 'grey',
        fontFamily: 'Arial, Helvetica, sans-serif',
    }
});

export default function Video(props) {
    const classes = useStyles();
    const {video} = props;
    return (
        <div className={classes.root}>
            <div className={classes.card}>
                <div className={classes.video}>
                    <ReactPlayer url={video.url} light={true} controls={true} width={'auto'}/>
                </div>
                <div className={classes.title}>
                    <h3>{video.name}</h3>
                </div>
                <VideoRating/><br/>
            </div>
        </div>
    );
}
