import React, { Component } from 'react';

import styled from 'styled-components'

import Block from '../../components/Block'
import Pie from '../../components/Graphs/Pie'

const Container = styled.div`
    display: flex;
    flex: row wrap;
    width: 100%;
`

const Chart = styled.div`
    width: 200px;
    justify-content: space-around ;
`

export default class Skills extends Component {
    render() {
        return(
            <Block>
                <h1>Skills</h1>
                <Container>
                    <Chart>
                        <Pie percent="75"/>
                    </Chart>
                </Container>
            </Block>
        );
    }
}