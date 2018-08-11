import React, { Component } from 'react';
import styled from 'styled-components';

import Typist from 'react-typist';
import 'react-typist/dist/Typist.css';
import Tilt from 'react-tilt';

/** Styled Components */

const Container = styled.div`
    display: flex;
    width: 100%;
    /* Ensure height is reset on resize */
    height: ${(props) => props.size ? (props.size) : (window.innerHeight)}px;
    padding: 0 10%;
    align-items: center;
    justify-content: space-between;
    text-align: end;

    text-transform: uppercase;

    @media (min-width: 1800px) {
        padding: 0 15%;
    }

    @media (max-width: 800px) {
        padding-top: 60px;
        flex-direction: column;
        text-align: center;
        justify-content: space-evenly;
    }
`

const Text = styled.div`
    font-size: 5vw;
    font-family: CPMono;
    color: #fff;

    perspective: 150px;
    -webkit-perspective: 150px;
    perspective-origin: left;

    @media (max-width: 800px){
        font-size: 10vw;
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
            size: null,
            firstNameComplete: false,
        }

        this.resize = this.resize.bind(this);
    }

    componentDidMount() {
        window.addEventListener("resize", this.resize);
        this.resize();
    }

    resize() {
        this.setState({ size: window.innerHeight });
    }

    render() {
        const { size } = this.state;

        return (
            <Container id='Home' size={size}>
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
                <Info>Full-Stack Developer</Info>
            </Container>
        );
    }
}