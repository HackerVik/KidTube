import React, {useContext} from 'react';
import styled from 'styled-components';
import {videocontext} from "../context/VideoContext";
import source from "../source.gif";

const Container = styled.div`visibility: ${props => props.isLoading ? 'visible' : 'hidden'};`;

export default function Loading() {
    const {isLoading} = useContext(videocontext);
    return (
        <Container isLoading={isLoading}>
            <img alt={'loading'} src={source} style={{height: "3em"}}/>
        </Container>
    );
}