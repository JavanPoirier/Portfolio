import React, { Component } from 'react'
import styled from 'styled-components'

//Using styled components and CSS Grid
import Block from '../../components/Block'

import me from '../../img/Me.jpg'

const Container = styled.div`
    display: grid;
    grid-template-columns: 40% auto 40%;
    grid-template-rows: 500px;
    grid-gap: 5px;

    > div {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    img {
        height: 75%;
    }
`;

const List = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: auto;

    div .title {
        
    }

    div .name {
        display: flex;
        justify-content: left;
        align-items: normal;
    }

    div .item {
        display: flex;
        justify-content: left;
        align-items: normal;
    }
`;

export default class About extends Component {
    render() {
        return (
            <Block id="About" solid>
                <h1>About</h1>
                <Container>
                    <div><img src={me} alt="Me"></img></div>
                    <div></div>
                    <div>
                        <List>
                            <div className="name">Name:</div><div className="item">Javan Poirier</div>
                            <div className="name">Occupation:</div><div className="item">Fullstack Developer</div>
                            <div className="name">Location:</div><div className="item">Saint John, New Brunswick</div>
                        </List>
                    </div>
                </Container >
            </Block >
        )
    }
}