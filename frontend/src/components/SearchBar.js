import React, {useContext, useState} from 'react';
import {videocontext} from "../context/VideoContext";
import {InputBase} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

export default function SearchBar() {
    const [searchString, setSearch] = useState("");
    const {search, fetchdata} = useContext(videocontext);
    const searchClick = () => {
        searchString.length > 0 ? search(searchString) : fetchdata()
    };


    return (
        <div className="searchbar-grid-container">
            <form>
                <div className="searchbar-grid-item">
                    <InputBase placeholder="Search" onChange={(e) => setSearch(e.target.value)}
                               inputProps={{'aria-label': 'search'}}/>
                </div>
                <div className="searchbar-grid-item">
                    <SearchIcon onClick={searchClick}/>
                </div>
            </form>
        </div>
    );
}
