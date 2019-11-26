import React from 'react';
import VideoList from "./components/VideoList";
import VideoContextProvider from "./context/VideoContext";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

function App() {
    return (
        <div className="app">
            <Header/>
            <div className="navbar">
                <Navbar/>
            </div>
            <VideoContextProvider>
                <VideoList/>
            </VideoContextProvider>
        </div>
    );
}

export default App;