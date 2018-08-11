import React, { Component } from 'react';
import styled from 'styled-components';

import Typist from 'react-typist';
import 'react-typist/dist/Typist.css';
import Tilt from 'react-tilt';

/** Styled Components */

const Container = styled.div`
    display: grid;
    height: ${window.innerHeight + "px"};
    align-content: center;

    text-transform: uppercase;
`

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
    grid-gap: 20%;
    grid-row-gap: 100px;
    padding: 0 10%;

    > div {
        margin: auto;
    }

    @media (max-width: 768px) {
        padding: 0;
    }
`

const Text = styled.div`
    font-size: 10vh;
    font-family: CPMono;
    color: #fff;

    perspective: 150px;
    -webkit-perspective: 150px;
    perspective-origin: left;

    @media (max-width: 1250px){
        text-align: -webkit-center;
        perspective: none;
        -webkit-perspective: none;
    }
`
const Name = styled.div`
    background-color: #090909;
    
    width: fit-content;
    margin-bottom: -1px; 
    padding: 0 50px 0 50px;

    transform: rotateY(5deg);
    -webkit-transform: rotateY(5deg);

    span {
        display: inline !important;
    }
`

const Info = styled.div`
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold; 
    font-size: 35px;
`
/** End Styled Components */

const cursors = {
    firstName: {
        blink: true,
        element: '_',
        hideWhenDone: true,
        hideWhenDoneDelay: 0,
    },
    lastName: {
        blink: true,
        element: '_',
    }
}

const tiltOptions = {
    reverse: true,
    max: 20,
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
                <Grid>
                    <div>
                        <Tilt options={tiltOptions}>
                            <Text>
                                <Name className="firstName">
                                    <Typist cursor={cursors.firstName} startDelay={750} avgTypingDelay={150} onLineTyped={() => { this.setState({ firstNameComplete: true }) }}>
                                        Javan
                                    </Typist>
                                </Name>
                                {this.state.firstNameComplete === true &&
                                    (<Name className="lastName">
                                        <Typist cursor={cursors.lastName} startDelay={150} avgTypingDelay={150}>
                                            Poirier
                                        </Typist>
                                    </Name>)
                                }
                            </Text>
                        </Tilt>
                    </div>
                    <div>
                        <Info>Full-Stack Developer</Info>
                    </div>
                </Grid>
            </Container>
        );
    }
}