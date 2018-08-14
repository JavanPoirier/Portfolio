import React from 'react';

import styled from 'styled-components';
import Tilt from 'react-tilt';

const Container = styled.div`
    display: flex;
    height: 45vw;
    width: 45vw;
    min-height: 150px;
    min-width: 150px;
    max-height: 250px;
    max-width: 250px;

    background-color: #fff;
    justify-content: center;
    align-items: center;

    @media only screen and (min-width: 800px){
        
        height: 15vw;
        width: 15vw;
        min-height: 200px;
        min-width: 200px;
        max-height: 250px;
        max-width: 250px;
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