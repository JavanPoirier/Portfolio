import React, { Component } from 'react';
import styled from 'styled-components';

import Typist from 'react-typist';
import 'react-typist/dist/Typist.css';
import Tilt from 'react-tilt';

/** Styled Components */

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    /* Ensure height is reset on resize */
    height: ${(props) => props.size ? (props.size) : (window.innerHeight)}px;
    min-height: 550px;
    padding: 0 10%;
    align-items: center;
    justify-content: center;
    font-family: CPMono;
    text-transform: uppercase;

    > div:first-child {
            margin-bottom: 50px;
    }

    @media (min-width: 800px) {
        padding-top: 60px;
        flex-direction: row;
        justify-content: space-between;

        > div:first-child {
            margin-bottom: 0;
        }
    }

    @media (min-width: 1800px) {
        padding: 0 15%;
    }
`

const Text = styled.div`
    font-size: 10vw;
    perspective: none;
    color: #fff;

    @media (min-width: 800px){
        font-size: 5vw;
        perspective: 150px;
        perspective-origin: left;
    }
`
const Name = styled.div`
    display: table;
    background-color: #090909;
    margin: auto;
    
    width: fit-content;
    padding: 0 50px 0 50px;

    transform: rotateY(5deg);
    -webkit-transform: rotateY(5deg);

    span {
        display: inline !important;
    }

    :first-child {
        margin-bottom: -1px;
    }

    @media (min-width: 800px) {
        margin: 0;
    }
`

const Info = styled.div`
    text-align: center;
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
                            <Typist cursor={cursors.firstName} startDelay={1000} avgTypingDelay={150} onLineTyped={() => { this.setState({ firstNameComplete: true }) }}>
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