import React, {createContext, useEffect, useReducer, useState} from 'react';
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
    const [isLoading, setIsLoading] = useState(true);
    const fetchdata = () => {
        setIsLoading(true);
        axios.get('http://' + process.env.REACT_APP_CLIENT_IP + ':8081/video/all').then(response => {
            const data = response.data;
            dispatch({type: 'initialdata', data})
            setIsLoading(false);
        });
    };
    const search = (searchString) => {
        setIsLoading(true);
        axios.get('http://' + process.env.REACT_APP_CLIENT_IP + ':8081/video/search/' + searchString).then(response => {
            const data = response.data;
            dispatch({type: 'initialdata', data})
            setIsLoading(false);
        });
    };
    const sort = (sortString) => {
        setIsLoading(true);
        axios.get('http://' + process.env.REACT_APP_CLIENT_IP + ':8081/video/sort/' + sortString).then(response => {
            const data = response.data;
            dispatch({type: 'initialdata', data})
            setIsLoading(false);
        });
    };
    return (
        <videocontext.Provider value={{videos, dispatch, search, fetchdata, sort, isLoading}}>
            {props.children}</videocontext.Provider>
    );
}
