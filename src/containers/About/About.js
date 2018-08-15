import React, { Component } from 'react'
import styled from 'styled-components'

//Using styled components and CSS Grid
import Block from '../../components/Block'

import me from '../../img/Me.jpg'
import Lines from '../../components/Lines'
import HighlightText from '../../components/HighlightText'

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    text-align: left;
    
    img {
        max-height: 30vh;
    }

    @media only screen and (min-width: 800px) {
        flex-direction: row;
    }
`;

const ListWrapper = styled.div`
    text-transform: uppercase;
    padding-top: 75px;
    font-size: 75%;

    @media only screen and (min-width: 800px) {
        padding-top: 0;
        flex-direction: row;
        font-size: 100%;
    }
`

const ListHeader = styled.div`
    position: relative;
    width: 100%;
    margin: 25px 0;
    z-index: 1;
`

const ListSubTitle = styled.div`
    font-size: 1.2em;
`

const List = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 40% 60%;
    grid-template-rows: auto;
    grid-row-gap: 15px;

    .name {
        color: #66ccff;
    }
`

const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
`

export default class About extends Component {
    render() {
        return (
            //Change grid to single row
            <Block id="About" solid>
                <Container>
                    <div>
                        <img src={me} alt="Me"></img>                       
                    </div>
                    <ListWrapper>                       
                        <ListHeader>  
                            <Lines height="125%" width="125px" margin="-10px -15px"/>
                            <HighlightText>Javan Poirier</HighlightText>
                            <ListSubTitle>Facial Recognition Data:</ListSubTitle>
                        </ListHeader>
                        <List>
                            <div className="name">Name</div><div className="item">|&nbsp;Javan Poirier</div>
                            <div className="name">Occupation</div><div className="item">|&nbsp;Full-stack Developer</div> 
                            <div className="name">Education</div><div className="item">|&nbsp;Programmer-Analyst, NBCC</div>                           
                            <div className="name">Skills</div><div className="item">|&nbsp;Programming, Systems Analysis, Robotics, Multi-media</div>
                        </List>
                    </ListWrapper>                   
                </Container >
                <Grid>

                </Grid>            
            </Block >
        )
    }
}