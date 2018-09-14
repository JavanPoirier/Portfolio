import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    color: ${(props) => props.solid ? "#ffffff" : "#090909"};
    font-family: CPMono;
    height: ${(props) => props.size ? props.size + 'px' : 'fit-content'};
    min-height: ${(props) => props.minHeight ? props.minHeight : ""};
    width: 100%;
    padding: ${(props) => props.noPadding ? (props.titleName ? "0 0 100px 0" : "100px 0") : (props.titleName ? "0 10% 100px 10%" : "100px 10%") };
    background-color: ${(props) => props.solid ? '#090909' : ''};
    box-shadow: ${(props) => props.solid ? "0px 10px 20px 0px rgba(0, 0, 0, .5)" : ''};

    @media only screen and (min-width: 1800px) {
        padding: ${(props) => props.noPadding ? (props.titleName ? "0 0 100px 0" : "100px 0") : (props.titleName ? "0 15% 100px 15%" : "100px 15%") };
    }

    @media only screen and (max-width: 800px) {
        flex-direction: column;
        justify-content: space-evenly;
    }    
`;

const Title = styled.h1`
    height: 100px;
    line-height: 100px;
    text-align: ${(props) => props.titleCenter ? "center" : null};
`

const Block = (props) => {
    return(
        <Container {...props}>
            {props.titleName ? <Title titleCenter={props.titleCenter}>{props.titleName}</Title> : null}
            {props.children}
        </Container>
    )
}

export default Block;