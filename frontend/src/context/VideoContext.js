import React, {createContext, useEffect, useReducer} from 'react';
import axios from "axios";
import videoreducer from "../reducer/VideoReducer";

export const videocontext = createContext();

export default function VideoContext(props) {
    useEffect(() => {
        fetchdata()
    }, []);
    const initialState = [{
        id: 0,
        name: '',
        url: '',
        ispublic: false,
        owner: ''
    }];
    const [videos, dispatch] = useReducer(videoreducer, initialState);
    const fetchdata = () => {
        axios.get('http://' + process.env.REACT_APP_CLIENT_IP + ':8081/video/all').then(response => {
            const data = response.data;
            dispatch({type: 'initialdata', data})
        });
    };
    const search = (searchString) => {
        axios.get('http://' + process.env.REACT_APP_CLIENT_IP + ':8081/video/search/' + searchString).then(response => {
            const data = response.data;
            dispatch({type: 'initialdata', data})
        });
    };
    const sort = (sortString) => {
        axios.get('http://' + process.env.REACT_APP_CLIENT_IP + ':8081/video/sort/' + sortString).then(response => {
            const data = response.data;
            dispatch({type: 'initialdata', data})
        });
    };
    return (
        <videocontext.Provider value={{videos, dispatch, search, fetchdata, sort}}>
            {props.children}</videocontext.Provider>
    );
}
