import React from 'react';

import styled from 'styled-components';
import Tilt from 'react-tilt';
import HighlightText from '../HighlightText';

const Container = styled.div`
    position: relative;
    flex: 100%;

   :hover { 
        z-index: 5;
        
        .image {
            animation: opacity 0.5s forwards;
        }
        
        .title {
            display: block;
        }
    }

    @keyframes opacity {
        0%   { opacity: 1; }
        100% { opacity: 0.7; }
    }

    @media (min-width: 400px) {
        flex: 0 0 50%;
    }

    @media (min-width: 800px) {
        flex: 0 0 33%;
    }

    @media (min-width: 1200px) {
        flex: 0 0 25%;
    }

    @media (min-width: 1600px) {
        flex: 0 0 20%;
    }
`

const Wrapper = styled.div`
    display: flex;
    height: 30vh;
    width: 100%;
        
    background-color: #fff;
    justify-content: center;
    align-items: center;

    @media (min-width: 600px) {
        height: 35vh;
    }
`

const Image = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
    background: url(${(props) => props.img ? props.img : ""}) no-repeat;
    background-position-x: ${(props) => props.xpos};
    background-size: cover;
`

export const Tile = (props) => {
    const options = {
        reverse: true,
        max: 20,
    }

    return (
        <Container>
            <Tilt className="tilt" options={options}>
                <Wrapper onClick={props.onClick}>
                    <Image className="image" img={props.img} xpos={props.xpos}></Image>
                    <HighlightText className="title" display={"none"} color={"#090909"} textColor={"#fff"} size={"1em"} zIndex={5}>
                        {props.title}
                    </HighlightText>
                </Wrapper>
            </Tilt>
        </Container>
    )
}