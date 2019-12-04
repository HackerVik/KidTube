import React from 'react';
import VideoList from "./components/VideoList";
import VideoContextProvider from "./context/VideoContext";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    videocontainer: {
        flexGrow: 1,
    },
}));

function App() {
    const classes = useStyles();
    return (
        <div className="app">
            <Header/>
            <VideoContextProvider>
                <Navbar/>
                <div className={classes.videocontainer}>
                    <VideoList/>
                </div>
            </VideoContextProvider>
        </div>
    )
        ;
}

export default App;