import React, {useContext, useState} from 'react';
import {videocontext} from "../context/VideoContext";
import {InputBase, makeStyles} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles(theme => ({
    root: {
        display: 'grid',
    },
    item: {
        height: '3.4em',
        align: 'middle',
        display: 'inline-block',
        border: '1px solid lightgrey',
        borderRadius: '.3em',
        paddingLeft: '1em',
    },
    itemIcon: {
        align: 'middle',
        display: 'inline-block',
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
                <div className={classes.item}>
                    <InputBase placeholder="Search" onChange={(e) => setSearch(e.target.value)}
                               inputProps={{'aria-label': 'search'}}/>
                    <div className={classes.itemIcon}>
                        <SearchIcon onClick={searchClick}/>
                    </div>
                </div>
            </form>
        </div>
    );
}
