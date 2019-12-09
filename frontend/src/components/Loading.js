import React, {useContext} from 'react';
import ReactLoading from "react-loading";
import styled from 'styled-components';
import {videocontext} from "../context/VideoContext";

const Container = styled.div`visibility: ${props => props.isLoading ? 'visible' : 'hidden'};`;

export default function Loading() {
    const {isLoading} = useContext(videocontext);
    return (
        <Container isLoading={isLoading}>
            <ReactLoading type={'bars'} color="lightblue" />
        </Container>
    );
}