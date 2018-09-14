import React, { Component } from 'react'
import styled from 'styled-components'

//Using styled components and CSS Grid
import Block from '../../components/Block'

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

const About = (props) => {
    return (
        //Change grid to single row
        <Block id="About" titleName="About" solid>
            <Container>
                {props.scrollTrigger}
                <div>
                    <img src={me} alt="Me"></img>
                </div>
                <ListWrapper>
                    <ListHeader>
                        <Lines height="125%" width="125px" margin="-10px -15px" />
                        <HighlightText color="#66ccff">Javan Poirier</HighlightText>
                        <ListSubTitle>Facial Recognition Data:</ListSubTitle>
                    </ListHeader>
                    <List>
                        <Name>Occupation</Name><Item><div>|&nbsp;</div>Full-stack Developer</Item>
                        <Name>Education</Name><Item><div>|&nbsp;</div>Programmer-Analyst, NBCC</Item>
                        <Name>Spoken Languages</Name><Item><div>|&nbsp;</div>English, French</Item>
                        <Name>Skills</Name><Item><div>|&nbsp;</div>Software Development, Systems Analysis, Electronics, Multi-media, Hardware</Item>
                    </List>
                </ListWrapper>
            </Container >
            <Experience />
        </Block >
    )
}

export default About;