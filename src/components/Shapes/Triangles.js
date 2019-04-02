import React from 'react'
import styled from 'styled-components'

export const Triangle = styled.div`
    width: 0;
    height: 0;
    background-color: transparent;
    border-style: solid;
    border-left-width: 50px;
    border-right-width: 50px;
    border-bottom-width: 100px;
    border-left-color: transparent;
    border-right-color: transparent;
    border-bottom-color: red;
`

export const TriangleCorner = styled.div`
  width: 0; 
  height: 0; 
  border-bottom: ${props => props.height + 'px'} solid transparent;
  border-left: ${props => props.width + 'px'} solid ${props => props.color};
`