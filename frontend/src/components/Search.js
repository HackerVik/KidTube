import React, {useContext, useState} from 'react';
import {videocontext} from "../context/VideoContext";
import {InputBase, makeStyles} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles(theme => ({
    root: {
        margin: theme.spacing(1),
        fontFamily: 'Arial, Helvetica, sans-serif',
        fontSize: '.7em',
        color: 'grey',
        backgroundColor: '#fff',
        border: '1px solid lightgrey',
        borderRadius: '1em',
        display: 'flex',
        padding: '.65em',
        width: '9em',
        transition: 'width .3s ease-out 0s',
        '&:hover': {
            border: '2px solid lightblue',
            width: '15em',
        },
    },
    hover: {
        '&:hover': {
            background: 'lightblue',
            borderRadius: '1em',
        },
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
                <InputBase className={classes.hover} placeholder="Search... "
                           onChange={(e) => setSearch(e.target.value)}
                           inputProps={{'aria-label': 'search'}}/>
            </form>
            <SearchIcon className={classes.hover} onClick={searchClick}/>
        </div>
    );
}
