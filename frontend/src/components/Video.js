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
            boxShadow: '.01em .1em .1em lightgrey',
            '&:hover': {
                transform: 'scale(1.025, 1.025)',
                transition: '.1s ease-out 0s',
                boxShadow: '.5em .5em .5em lightgrey',
                background: 'lightblue',
            },
        },
        video: {
            padding: '1em',
        },
    })
;

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
