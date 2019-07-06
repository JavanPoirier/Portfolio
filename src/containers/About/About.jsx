import React, { Component } from 'react'
import styled from 'styled-components'

import Typist from 'react-typist';
import 'react-typist/dist/Typist.css';

//Using styled components and CSS Grid
import Block from '../../components/Block'
import BoxBackground from './BoxBackground.svg';


import me from '../../img/Me.jpg'
import Lines from '../../components/Lines'
import HighlightText from '../../components/HighlightText'
import Experience from './AboutExperience'

const Container = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    text-align: left;
    
    img {
        height: 35vh;
    }

    @media only screen and (min-width: 800px) {
        flex-direction: row;

        img {
            height: 30vh;
        }
    }
`;

const ListWrapper = styled.div`
    width: 100%;
    margin-top: 50px;
    text-transform: uppercase;
    font-size: 75%;

    @media only screen and (min-width: 600px) {
        font-size: 90%;
    }

    @media only screen and (min-width: 800px) {
        width: 60%;
        margin-left: 10%;
        margin-top: 0;
        padding-top: 0;
        flex-direction: row;
        font-size: 75%;
    }

    @media only screen and (min-width: 1200px) {
        font-size: 100%;
    }
`

const ListHeader = styled.div`
    position: relative;
    margin: 25px 0;
    z-index: 1;
`

const ListSubTitle = styled.div`
    font-size: 1.2em;
`

const List = styled.div`
    display: grid;
    grid-template-columns: minmax(30%, 35%) auto;
    grid-template-rows: auto;
    grid-row-gap: 15px;

    @media only screen and (min-width: 800px) {
        grid-template-columns: minmax(30%, 40%) auto;
    }
`

const Item = styled.div`
    display: flex;
`

const Name = styled.div`
    color: #66ccff;
`

const cursor = {
    blink: true,
    element: '_'
}

const About = (props) => {
    return (
        //Change grid to single row
        <Block id="About" solid>
            <Container>
                {props.scrollTrigger}
                <div style={{position: "relative"}}>
                    <Lines height="20%" width="50%" style={{right: "-5%", bottom: "-5%", zIndex: 1}} />
                    <img src={me} alt="Me" style={{position: "relative", zIndex: 10, borderLeft: "#66ccff 5px solid"}}></img>
                    <img src={BoxBackground} style={{position: "absolute", right: "15px", bottom: "15px"}}></img>
                    <div style={{position: "absolute", bottom: "2px", left: "15px", zIndex: 15, textTransform: "uppercase", fontSize: "0.8em",  fontFamily: 'CPMono'}}>
                        <Typist cursor={cursor} startDelay={1000} avgTypingDelay={100} >
                            Image Analysis Complete
                        </Typist>
                    </div>
                </div>
                <ListWrapper>
                    <ListHeader>
                        <Lines height="125%" width="125px" margin="-10px -15px" />
                        <HighlightText color="#66ccff">Javan Poirier</HighlightText>
                        <ListSubTitle>Facial Recognition Data:</ListSubTitle>
                    </ListHeader>
                    <List>
                        <Name>Occupation</Name><Item><div>|&nbsp;</div>Full Stack Developer</Item>
                        <Name>Education</Name><Item><div>|&nbsp;</div>Programmer-Analyst, NBCC</Item>
                        <Name>Spoken Languages</Name><Item><div>|&nbsp;</div>English, French</Item>
                        <Name>Skills</Name><Item><div>|&nbsp;</div>Web, Mobile, Multimedia, Presenting, Electronics, Computer Hardware</Item>
                    </List>
                </ListWrapper>
            </Container >
            <Experience />
        </Block >
    )
}

export default About;