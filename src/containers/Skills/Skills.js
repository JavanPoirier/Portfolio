import React, { Component } from 'react';

import styled from 'styled-components'

import Block from '../../components/Block'
import Pie from '../../components/Graphs/Pie'
import HighlightText from '../../components/HighlightText'

const Container = styled.div`
    display: flex;
    flex: row wrap;
    width: 100%;
    justify-content: space-between;
`

const Wrapper = styled.div`
    width: fit-content;
`

const Chart = styled.div`
    width: 200px;
    margin: auto;
    margin-bottom: 15px;
`

const Text = (props) => {
    return <HighlightText color="#090909" textColor="#fff" size={props.size ? props.size : "1em" } margin={props.margin}>{props.children}</HighlightText>
}

export default class Skills extends Component {
    render() {
        return (
            <Block>
                <h1>Skills</h1>
                <Text size="1.25em">Pie charts are quite relative to ones percpective, no one can be 100%... but hey they look cool!</Text>
                <hr />
                <Container>
                    <Wrapper>
                        <Chart>
                            <Pie percent="75" scale="0.9" />
                        </Chart>
                        <Text margin="auto">Electronics/Robotics</Text>
                    </Wrapper>
                    <Wrapper>
                        <Chart>
                            <Pie percent="70" scale="0.9" />
                        </Chart>
                        <Text margin="auto">Electronics/Robotics</Text>
                    </Wrapper>
                    <Wrapper>
                        <Chart>
                            <Pie percent="60" scale="0.9" />
                        </Chart>
                        <Text margin="auto">Servers/Networking</Text>
                    </Wrapper>
                    <Wrapper>
                        <Chart>
                            <Pie percent="75" scale="0.9" />
                        </Chart>
                        <Text margin="auto">3D Printing/Modeling</Text>
                    </Wrapper>
                </Container>
            </Block>
        );
    }
}