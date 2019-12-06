import React, {useContext, useState} from 'react';
import {videocontext} from "../context/VideoContext";
import {InputBase, makeStyles} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles(theme => ({
    root: {
        border: '1px solid lightgrey',
        borderRadius: '.3em',
        display: 'flex',
        padding: '.7em',
        width: '6em',
    },
}));

export default function Search() {
    const classes = useStyles();
    const [searchString, setSearch] = useState("");
    const {search, fetchdata} = useContext(videocontext);
    const searchClick = () => {
        searchString.length > 0 ? search(searchString) : fetchdata()
    };
    return (
        <div className={classes.root}>
            <form>
                <InputBase placeholder="Search" onChange={(e) => setSearch(e.target.value)}
                           inputProps={{'aria-label': 'search'}}/>
            </form>
            <SearchIcon onClick={searchClick}/>
        </div>
    );
}
