import React, { Component } from 'react';
import styled from 'styled-components';

import ReactFitText from 'react-fittext';
import Typist from 'react-typist';
import 'react-typist/dist/Typist.css';

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
    /* margin: auto; */
    perspective: 150px;
    -webkit-perspective: 150px;
    perspective-origin: left;
`
const Name = styled.div`
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

const firstNameCursor = {
    blink: true,
    element: '_',
    hideWhenDone: true,
    hideWhenDoneDelay: 0,
}

const lastNameCursor = {
    blink: true,
    element: '_',
}

export default class About extends Component {
    constructor() {
        super();

        this.state = {
            firstNameComplete: false,
        }
    }

    render() {
        return (
            <Container id='Home'>
                <div>
                    <ReactFitText compressor={-10.5} maxFontSize={100} minFontSize={75}>
                        <Text>
                            <Name>
                                <Typist cursor={firstNameCursor} avgTypingDelay={150} onLineTyped={() => {this.setState({firstNameComplete: true})}}>
                                    Javan
                                </Typist>
                            </Name>
                            {this.state.firstNameComplete === true &&
                            (<Name>
                                <Typist cursor={lastNameCursor} avgTypingDelay={150}>
                                    <Typist.Delay ms={100} />
                                    Poirier
                                </Typist>
                            </Name>)}
                        </Text>
                    </ReactFitText>
                </div>
                <div>
                    <Info>Full-Stack Web & Software Developer</Info>
                </div>
            </Container>
        );
    }
}