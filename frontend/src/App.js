import React from 'react';
import VideoList from "./components/VideoList";
import VideoContextProvider from "./context/VideoContext";
import Header from "./components/Header";
import Navbar from "./components/NavBar";
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    videocontainer: {
        flexGrow: 1,
    },
    app: {
        textAlign: 'center',
    },
}));

function App() {
    const classes = useStyles();
    return (
        <div className={classes.app}>
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