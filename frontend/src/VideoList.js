import React, {Component} from 'react';
import axios from 'axios';

export default class VideoList extends Component {
    state = {
        videos: [],
    };

    componentDidMount() {
        axios.get('http://localhost:8081/video/all').then(response => {
            this.setState({videos: response.data});
        });

    }

    render () {
        return (
                <ul>
                    {this.state.videos.map(video => <li>{video.url}</li>)}
                </ul>
        )
    }
}