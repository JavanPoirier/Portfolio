import React, { Component } from 'react'
import styled from 'styled-components'

//Using styled components and CSS Grid
import Block from '../../components/Block'

import me from '../../img/Me.jpg'

const Container = styled.div`
    height: 80%;
    display: grid;
    grid-gap: 150px;
    grid-row-gap: 50px;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    grid-auto-rows: auto;
    justify-content: center;

    > div {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    img {
        max-height: 30vh;
    }
`;

const List = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 50% 50%;

    text-transform: uppercase;

    div {
        display: flex;
    }

    .title {
        grid-column: 1 / -1;
        margin-bottom: 50px;
    }

    .name {
        color: #66ccff;
    }

`;

export default class About extends Component {
    render() {
        return (
            //Change grid to single row
            <Block id="About" solid>
                <h1>About</h1>
                <Container>
                    <div><img src={me} alt="Me"></img></div>
                    <div>
                        <List>
                            <div className="title">Facial Recognition Data:</div>
                            <div className="name">Name</div><div className="item"><p>|&nbsp;</p>Javan Poirier</div>
                            <div className="name">Occupation</div><div className="item"><p>|&nbsp;</p>Fullstack Developer</div>
                            <div className="name">Location</div><div className="item"><p>|&nbsp;</p>Saint John, New Brunswick</div>
                            <div className="name">Skills</div><div className="item"><p>|&nbsp;</p>Programming, Robotics, Multi-media</div>
                        </List>
                    </div>
                </Container >
            </Block >
        )
    }
}