import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ReactPlayer from "react-player";
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';

const useStyles = makeStyles({
    card: {
        maxWidth: 'auto',
        margin: '.5em',
    },
    root: {
        align: 'middle',
        display: 'inline-block',
        width: '20em',
    },
});

export default function Video(props) {
    const classes = useStyles();
    const {video} = props;
    return (
        <div className={classes.root}>
            <Card className={classes.card}>
                <CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="h2">
                            {video.name}
                        </Typography>
                        <div className="videobox">
                            <ReactPlayer url={video.url} light={true} controls={true} width={'auto'}/>
                        </div>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        <SentimentSatisfiedIcon/>
                    </Button><Button size="small" color="primary">
                    <SentimentDissatisfiedIcon/>
                </Button>
                    <p>0</p>
                </CardActions>
            </Card>
        </div>
    );
}
