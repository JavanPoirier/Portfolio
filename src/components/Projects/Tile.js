import React from 'react';

import styled from 'styled-components';
import Tilt from 'react-tilt';

const Container = styled.div`
    display: flex;
    width: 45vw;
    height: 45vw;
    background-color: #fff;
    justify-content: center;
    align-items: center;

    @media only screen and (min-width: 800px){
        width: 15vw;
        height: 15vw;
    }
`

const Title = styled.div`
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