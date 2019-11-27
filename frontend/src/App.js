import React from 'react';
import VideoList from "./components/VideoList";
import VideoContextProvider from "./context/VideoContext";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

function App() {
    return (
        <div className="app">
            <Header/>
            <VideoContextProvider>
                <div className="navbar">
                    <Navbar/>
                </div>
                <div className="video-grid-container">
                    <VideoList/>
                </div>
            </VideoContextProvider>
        </div>
    )
        ;
}

export default App;