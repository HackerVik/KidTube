import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ReactPlayer from "react-player";

const useStyles = makeStyles({
    card: {
        maxWidth: 672,
        margin: 10,
    },
});

export default function ImgMediaCard(props) {
    const classes = useStyles();
    const {video} = props;
    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h6" component="h2">
                        {video.name}
                    </Typography>
                    <div className="videobox">
                        <ReactPlayer url={video.url} light={true} controls={true}/>
                    </div>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Like
                </Button><Button size="small" color="primary">
                Dislike
            </Button>
                <p>0</p>
            </CardActions>
        </Card>
    );
}
