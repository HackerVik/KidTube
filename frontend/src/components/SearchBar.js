import React, {useContext, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {videocontext} from "../context/VideoContext";
import {InputBase} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles(theme => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: 130,
        },
    },
}));

export default function SearchBar() {
    const classes = useStyles();
    const [searchString, setSearch] = useState("");
    const {search, fetchdata} = useContext(videocontext);
    const searchClick = () => {
        searchString.length > 0 ? search(searchString) : fetchdata()
    };


    return (
        <form className={classes.root} noValidate autoComplete="off">
            <SearchIcon onClick={searchClick}/>
            <InputBase placeholder="Search" onChange={(e) => setSearch(e.target.value)}
                       inputProps={{'aria-label': 'search'}}/>
        </form>
    );
}
