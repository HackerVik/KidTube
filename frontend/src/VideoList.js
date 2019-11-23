import React from 'react';
import axios from 'axios';

export default class VideoList extends React.Component {
    state = {
        videos : [],
    };

    componentDidMount() {
        axios.get('http://localhost:8081/video/all').then(res => {
            this.setState({videos: res.data});
        });
    }

    render() {
        return <ul>{this.state.videos.map(video => (<li>{video.name}</li>))}
            </ul>;
    }
}