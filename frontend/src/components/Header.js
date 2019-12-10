import React, {useContext} from 'react';
import {makeStyles} from "@material-ui/core";
import background from '../background.png';
import {videocontext} from "../context/VideoContext";

export default function Header() {
    const {isLoading} = useContext(videocontext);
    const useStyles = makeStyles(theme => ({
        root: {
            width: 'auto',
            height: '7em',
            padding: '1em',
            opacity: '.65',
            backgroundImage: `url(${background})`,
            filter: isLoading ? 'blur(5px)' : 'blur(0px)',
        },
    }));
    const classes = useStyles();
    return (
        <div className={classes.root}/>
    );
}