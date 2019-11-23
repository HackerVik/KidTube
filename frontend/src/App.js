import React from 'react';
import Header from "./Header";
import ActualVideo from "./ActualVideo";
import VideoList from "./VideoList";

function App() {
    return(
        <div>
          <Header/>
          <ActualVideo/>
          <VideoList/>
        </div>
    );
}

export default App;