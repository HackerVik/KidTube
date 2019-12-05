import React from 'react';
import '../App.css';
import {makeStyles} from "@material-ui/core";
import background from '../background.png';

const useStyles = makeStyles(theme => ({
    root: {
        width: 'auto',
        height: '8em',
        padding: '1em',
        opacity: '.8',
        backgroundImage: `url(${background})`,
    },
}));

export default function Header() {
    const classes = useStyles();
    return (
        <div className={classes.root}/>
    );
}
