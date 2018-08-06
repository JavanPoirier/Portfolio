import React, { Component } from 'react';

import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    height: 75px;
    background-color: #090909;
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