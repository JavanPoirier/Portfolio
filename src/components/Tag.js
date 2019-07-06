import * as React from 'react'
import styled, { StyledInterface } from 'styled-components'

import { TriangleCorner } from './Shapes/Triangles'

const Tag = (props) => {
    return (
        <Container style={{...props.style}}>
         <TriangleCorner
            height={props.size} 
            width={props.size}
            color={props.color ? props.color : '#090909'}
            style={{
                display: props.left || !props.right && !props.left  ? 'inline-flex' : 'none',
                transform: 'rotate(180deg)'
            }} />
            {props.text ? 
            <Title style={{
                display: 'inline-flex', 
                backgroundColor: props.color ? props.color : '#090909', 
                margin: 0,
                paddingLeft: 50,
                paddingRight: 50,
                paddingBottom: 5,
                color: '#fff'
            }}>{props.text}</Title> : props.children}
            <TriangleCorner 
            height={props.size}
            width={props.size}
            color={props.color ? props.color : '#090909'}
            style={{
                display: props.right || !props.left && !props.right ? 'inline-flex' : 'none',
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
`

const Title = styled.h1`
    /* height: 100px;
    line-height: 100px; */
    text-align: ${(props) => props.titleCenter ? "center" : null};
`