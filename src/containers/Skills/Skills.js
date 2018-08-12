import React, { Component } from 'react';

import styled from 'styled-components'

import Block from '../../components/Block'
import Pie from '../../components/Graphs/Pie'

const Container = styled.div`
`

export default class Skills extends Component {
    render() {
        return(
            <Block>
                <Container>
                <h1>Skills</h1>
                <Pie/>
                </Container>
            </Block>
        );
    }
}