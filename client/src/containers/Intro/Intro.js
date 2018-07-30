import React, { Component } from 'react';
import styled from 'styled-components';

import ReactFitText from 'react-fittext';

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    grid-gap: 20%;
    grid-row-gap: 50px;
    padding: 10%;

    > div {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`
const Text = styled.div`
    display: block;
    height: fit-content;
    margin: auto;
    perspective: 150px;
    -webkit-perspective: 150px;
    perspective-origin: left;
`
const Name = styled.h1`
    color: #fff;
    width: fit-content;
    margin-bottom: 0px;
    font-family: CPMono;
    text-transform: uppercase;
    padding: 0 50px 0 50px;
    background-color: #090909;
    transform: rotateY(5deg);
    -webkit-transform: rotateY(5deg);
`

const Info = styled.div`
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold; 
    font-size: 40px;
    text-transform: uppercase;
`

export default class About extends Component {
    render() {
        return (
            <Container>
                <div>
                    <Text>
                        <ReactFitText compressor={-0.5} maxFontSize={200} minFontSize={75}>
                            <Name>Javan</Name>
                        </ReactFitText>
                        {/* <ReactFitText compressor={0.5} minFontSize={75} maxFontSize={30}> */}
                            <Name>Poirier_</Name>
                        {/* </ReactFitText> */}
                    </Text>
                </div>
                <div>
                    <Info>Full-Stack Web & Software Developer</Info>
                </div>
            </Container>
        );
    }
}