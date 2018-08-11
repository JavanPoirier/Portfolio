import React, { Component } from 'react';

import theme from '../../theme'

import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    height: 50px;
    background-color: ${theme.backgroundColor};
`

export default class Footer extends Component {
    render() {
        const styles = {
            text: {
                margin: 'auto',
                color: "#ffffff",
                fontFamily: "CPMono",
            }
        }

        return (
            <Container>
                <h4 style={styles.text}>Javan Poirier 2018</h4>
            </Container>
        )
    }
}