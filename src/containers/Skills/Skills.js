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
`

const Wrapper = styled.div`
    width: fit-content;
    margin: 20px;
`

const Chart = styled.div`
    width: 200px;
    margin: auto;
    margin-bottom: 15px;
`

const Text = (props) => {
    return <HighlightText color="#090909" textColor="#fff" size={props.size ? props.size : "1.15em"} margin={props.margin} multiLine>{props.children}</HighlightText>
}

const List = styled.ul`
    text-align: center;
    padding: 0;
    margin: 0;
    font-size: 1.15em;
`

const ListItem = styled.li`
    list-style: none;
`

export default class Skills extends Component {
    render() {
        return (
            <Block>
                <h1>Skills</h1>
                <Text size="1.25em">Pie charts are quite relative to ones perspective, no one can be 100%... but hey they look cool!</Text>
                <hr />
                <Container>
                    <Wrapper>
                        <Chart>
                            <Pie percent="75" scale="0.9" />
                        </Chart>
                        <Text margin="auto">Electronics/Robotics</Text>
                        <List>
                            Arduino
                        </List>
                    </Wrapper>
                    <Wrapper>
                        <Chart>
                            <Pie percent="70" scale="0.9" />
                        </Chart>
                        <Text margin="auto">Electronics/Robotics</Text>
                        <List>
                            Arduino
                        </List>
                    </Wrapper>
                    <Wrapper>
                        <Chart>
                            <Pie percent="60" scale="0.9" />
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
                            <Pie percent="75" scale="0.9" />
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