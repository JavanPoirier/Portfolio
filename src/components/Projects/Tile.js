import React from 'react';

import styled from 'styled-components';
import Tilt from 'react-tilt';
import HighlightText from '../HighlightText';

const Container = styled.div`
    position: relative;
    flex: 0.5 1 inherit;

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
`

const Wrapper = styled.div`
    display: flex;
    height: 150px;
    width: 150px;
    
    background-color: #fff;
    justify-content: center;
    align-items: center;

    @media only screen and (min-width: 800px){      
        height: 300px;
        width: 300px;
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