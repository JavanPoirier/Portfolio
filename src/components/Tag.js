import React from 'react'
import styled from 'styled-components'

import { TriangleCorner } from './Shapes/Triangles'

const Tag = (props) => {
    return (
        <Container style={{...props.style}}>
         <TriangleCorner
            height={50} 
            width={50}
            color='#090909'
            style={{
                display: 'inline-flex',
                transform: 'rotate(180deg)'
            }} />
            <Title style={{
                display: 'inline-flex', 
                backgroundColor: '#090909', 
                margin: 0,
                paddingLeft: 50,
                paddingRight: 50,
                paddingBottom: 1,
            }}>
                {props.text}
            </Title>
            <TriangleCorner 
            height={50}
            width={50}
            color='#090909'
            style={{
                display: 'inline-flex',
                transform: 'rotate(270deg)'
            }} />
        </Container>
    )
}

export default Tag

const Container = styled.div`
    display: flex;
    flex-direction: table-row;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    margin-top: -150px;
    margin-bottom: 50px;
`

const Title = styled.h1`
    /* height: 100px;
    line-height: 100px; */
    text-align: ${(props) => props.titleCenter ? "center" : null};
`