import React, { Component } from 'react';
import styled from 'styled-components';
import isTouch from 'is-touch-device';

import Typist from 'react-typist';
import 'react-typist/dist/Typist.css';
import Tilt from 'react-tilt';

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
    constructor(props) {
        super(props);

        this.state = {
            touch: null,
            size: null,
            firstNameComplete: false,
        }

        this.resize = this.resize.bind(this);
    }

    componentDidMount() {
        window.addEventListener("resize", this.resize);
        this.resize();

        this.setState({ touch: isTouch() });
    }

    resize() {
        this.setState({ size: window.innerHeight });
    }

    render() {
        const { touch, size } = this.state;

        const children = (
            <Text>
                {this.props.scrollTrigger}
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
        )

        return (
            <Container id='Home' size={size}>
                <NameContainer>
                    {touch ? children : <Tilt tiltOptions={tiltOptions}>{children}</Tilt>}\
                </NameContainer>
                <TitleContainer>
                    <Title>Full Stack</Title>
                    <Title>Software Developer</Title>
                </TitleContainer>
            </Container>
        );
    }
}

const Container = styled.div`
    display: flex;
    flex-direction: row;
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

const NameContainer = styled.div`
    width: 100%;
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

const TitleContainer = styled.div`
    width: 100%;
    justify-content: flex-end;
`

const Title = styled.div`
    text-align: center;
    font-weight: bold; 
    font-size: 35px;
`
