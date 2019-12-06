import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
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
    },
    video: {
        width: '17em',
        height: '23em',
        padding: '1em',
    },
});

export default function Video(props) {
    const classes = useStyles();
    const {video} = props;
    return (
        <div className={classes.root}>
            <Card className={classes.card}>
                <Typography gutterBottom variant="h5" component="h2">
                    {video.name}
                </Typography>
                <div className={classes.video}>
                    <ReactPlayer url={video.url} light={true} controls={true} width={'auto'}/>
                </div>
                <VideoRating/>
            </Card>
        </div>
    );
}
