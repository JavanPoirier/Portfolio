import React from 'react';

import styled from 'styled-components';
import Tilt from 'react-tilt';

const Container = styled.div`
    display: flex;
    height: 250px;
    width: 250px;
    background-color: #fff;
`

const Title = styled.div`
    margin: auto;
    color: black;
`

export const Tile = (props) => {
    const options = {
        reverse: true,
        max: 20,
    }

    return (
        <Tilt options={options}>
            <Container onClick={props.callback}>
                <Title>
                    {props.title}
                </Title>
            </Container>
        </Tilt>
    )
}