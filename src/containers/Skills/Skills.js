import React, { Component } from 'react';

import styled from 'styled-components'

import Block from '../../components/Block'
import Pie from '../../components/Graphs/Pie'
import HighlightText from '../../components/HighlightText'

const Container = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    align-items: baseline;

    @media (min-width: 1200px) {
        justify-content: space-between;
    }
`

const Wrapper = styled.div`
    flex: 0 0 50%;
    width: fit-content;
    text-align: center;
    margin: 25px;

    @media (min-width: 802px) {
        flex: 0 0 33%;
    }

    @media (min-width: 1200px) {
        flex: 1 1 auto;
    }
`

const Chart = styled.div`
    width: 200px;
    margin: auto;
    margin-bottom: 25px;
`

const Text = (props) => {
    return <HighlightText color="#090909" textColor="#fff" size={props.size ? props.size : "1em"} margin={props.margin} multiLine {...props}>{props.children}</HighlightText>
}

const List = styled.ul`
    text-align: center;
    padding: 0;
    margin: 0;
    font-size: 2.5vmax;

    @media (min-width: 600px) {
        font-size: 1em;
    }
`

const ListItem = styled.li`
    list-style: none;
`

export default class Skills extends Component {
    render() {
        return (
            <Block>
                <h1>Skills</h1>
                <Text size="1.25em" responsive="2vmax">Jack of all trades, master of none. Skill charts are quite relative to one's perspective, and no one can be 100%... But hey, they look cool!</Text>
                <br />
                <Container>
                    <Wrapper>
                        <Chart>
                            <Pie percent={40} scale="0.9" />
                        </Chart>
                        <Text margin="auto">Multimedia</Text>
                        <List>
                            <ListItem>Photoshop</ListItem>
                            <ListItem>Illistrator</ListItem>
                            <ListItem>After Effects</ListItem>
                            <ListItem>Vegas Pro</ListItem>
                            <ListItem>Cinema 4D</ListItem>
                        </List>
                    </Wrapper>
                    <Wrapper>
                        <Chart>
                            <Pie percent={70} scale="0.9" />
                        </Chart>
                        <Text margin="auto">Electronics/Robotics</Text>
                        <List>
                            <ListItem>Circuits</ListItem>
                            <ListItem>Arduino</ListItem>
                        </List>
                    </Wrapper>
                    <Wrapper>
                        <Chart>
                            <Pie percent={60} scale="0.9" />
                        </Chart>
                        <Text margin="auto">Servers/Networking</Text>
                        <List>
                            <ListItem>CentOS</ListItem>
                            <ListItem>Nginx</ListItem>
                            <ListItem>SSH/FTP</ListItem>
                        </List>
                    </Wrapper>
                    <Wrapper>
                        <Chart>
                            <Pie percent={75} scale="0.9" />
                        </Chart>
                        <Text margin="auto">3D Printing/Modeling</Text>
                        <List>
                            <ListItem>RepRap</ListItem>
                            <ListItem>Makerbot</ListItem>

                            <ListItem>SketchUp</ListItem>
                            <ListItem>Simplify3D</ListItem>
                        </List>
                    </Wrapper>
                </Container>
            </Block>
        );
    }
}