import React from 'react';
import Header from "./Header";
import ActualVideo from "./ActualVideo";
import VideoList from "./VideoList";
import Navbar from "./Navbar";

function App() {
    return (
        <div className="app">
            <header className="app-header">
                <Header/>
                <Navbar/>
            </header>
            <body className="app-body">
            <ActualVideo/>
            <VideoList/>
            </body>
        </div>
    );
}

export default App;